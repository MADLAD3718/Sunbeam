import { Entity, Vector3, WeatherType, world } from "@minecraft/server";
import { Mat3, Matrix3, Vec3 } from "@madlad3718/mcvec3";
import { jobPromise } from "@bedrock-oss/bedrock-boost";
import { SunAngle } from "./config";

export function repeatGenerator(source: () => Generator<undefined, void, unknown>) {
    jobPromise(source()).then(() => repeatGenerator(source));
}

const WEATHER_PROPERTY = "sunbeam:weather";

world.afterEvents.weatherChange.subscribe(event => {
    if (event.dimension !== "overworld") return;
    world.setDynamicProperty(WEATHER_PROPERTY, event.newWeather);
});

export function getCurrentWeather(): WeatherType {
    return world.getDynamicProperty(WEATHER_PROPERTY) as WeatherType
        ?? WeatherType.Clear;
}


const HELMETIDS = [
    "minecraft:leather_helmet",
    "minecraft:iron_helmet",
    "minecraft:golden_helmet",
    "minecraft:diamond_helmet",
    "minecraft:netherite_helmet",
    "minecraft:turtle_helmet",
    "minecraft:chainmail_helmet"
]

export function hasHelmet(entity: Entity): boolean {
    for (const helmetId of HELMETIDS) {
        const command = `testfor @s[hasitem={location=slot.armor.head,item=${helmetId}}]`;
        if (entity.runCommand(command).successCount === 1) return true;
    }
    return false;
}

export function getRotationMatrix(angles: SunAngle): Matrix3 {
    const cosa = Math.cos(angles.azimuth);
    const sina = Math.sin(angles.azimuth);
    const azimuth = Mat3.from([
        cosa, 0, sina,
           0, 1,    0,
       -sina, 0, cosa,
    ]);
    const cosz = Math.cos(angles.zenith);
    const sinz = Math.sin(angles.zenith);
    const zenith = Mat3.from([
        1,    0,     0,
        0, cosz, -sinz,
        0, sinz,  cosz,
    ]);
    return Mat3.mul(azimuth, zenith);
}

/** Contains IOR values for various mediums. */
export const enum IOR {
    AIR   = 1.000,
    WATER = 1.333,
    GLASS = 1.500
};

export function refractWithTIR(i: Vector3, n: Vector3, e: number): Vector3 {
    const cost = Vec3.dot(i, Vec3.neg(n))
    if (cost * cost < 1 - 1 / (e * e))
        return Vec3.reflect(i, n);
    else return Vec3.refract(i, n, e);
}
