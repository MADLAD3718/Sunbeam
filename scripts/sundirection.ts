import { Vector3, world } from "@minecraft/server";
import { Mat3, Vec3 } from "@madlad3718/mcvec3";

const AZIMUTH_ANGLE = 0;
const ZENITH_ANGLE = Math.PI / 4;

const cosa = Math.cos(AZIMUTH_ANGLE);
const sina = Math.sin(AZIMUTH_ANGLE);
const azimuth = Mat3.from([
    cosa, 0, sina,
       0, 1,    0,
   -sina, 0, cosa,
]);
const cosz = Math.cos(ZENITH_ANGLE);
const sinz = Math.sin(ZENITH_ANGLE);
const zenith = Mat3.from([
    1,    0,     0,
    0, cosz, -sinz,
    0, sinz,  cosz,
]);
const rotation = Mat3.mul(azimuth, zenith);

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
    return Mat3.mul(rotation, direction);
}
