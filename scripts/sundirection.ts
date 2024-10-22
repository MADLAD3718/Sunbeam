import { Vector3, world } from "@minecraft/server";
import { Mat3, Vec3 } from "@madlad3718/mcveclib";
import { getRotationMatrix } from "./util";
import { Config } from "./config";

const rotation = getRotationMatrix(Config.Default);

function clamp(x: number, min: number, max: number): number {
    return Math.min(Math.max(x, min), max);
}

function getTimeInterpolant(): number {
    const mod = (world.getTimeOfDay() + 1000) % 24000;
    return clamp(mod / 14000, 0, 1);
}

export function directionToSun(): Vector3 {
    const angle = Math.PI * getTimeInterpolant();
    const direction = Vec3.rotate(Vec3.East, Vec3.South, angle);
    return Mat3.mul(rotation, direction);
}
