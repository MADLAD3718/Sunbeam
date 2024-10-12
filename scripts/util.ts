import { Entity, WeatherType, world } from "@minecraft/server";
import { jobPromise } from "@bedrock-oss/bedrock-boost";
import { Mat3, Matrix3 } from "@madlad3718/mcvec3";
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
        if (entity.runCommand(`testfor @s[hasitem={location=slot.armor.head,item=${helmetId}}]`).successCount == 1)
            return true;
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
