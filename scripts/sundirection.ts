import { Vector3, world } from "@minecraft/server";
import { Mat3, Vec3 } from "@madlad3718/mcvec3";

const ZENITH_ANGLE = Math.PI / 4;

const cosz = Math.cos(ZENITH_ANGLE);
const sinz = Math.sin(ZENITH_ANGLE);
const zenith = Mat3.from([
    1,    0,     0,
    0, cosz, -sinz,
    0, sinz,  cosz,
]);

function clamp(x: number, min: number, max: number) {
    return Math.min(Math.max(x, min), max);
}

function getTimeInterpolant(): number {
    const mod = (world.getTimeOfDay() + 1000) % 24000;
    return clamp(mod / 14000, 0, 1);
}

export function directionToSun(): Vector3 {
    const angle = Math.PI * getTimeInterpolant();
    const direction = Vec3.rotate(Vec3.East, Vec3.South, angle);
    return Mat3.mul(zenith, direction);
}
