import { Block, BlockRaycastHit, BlockRaycastOptions, Entity, EntityComponentTypes, MinecraftDimensionTypes, Vector3, WeatherType, world } from "@minecraft/server";
import { getCurrentWeather, hasHelmet, IOR, refractWithTIR } from "./util";
import { directionToSun } from "./sundirection";
import { Vec3 } from "@madlad3718/mcveclib";

const overworld = world.getDimension(MinecraftDimensionTypes.overworld);

const EPSILON = 1.0e-3;

function isGlass(block: Block | undefined): boolean {
    return block?.typeId.includes("glass") ?? false;
}

function traceShadowRay(origin: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined {
    const hit = overworld.getBlockFromRay(origin, direction, options);
    if (hit === undefined || !isGlass(hit.block)) return hit;

    const thisMediumIsGlass = isGlass(overworld.getBlock(origin)) ?? false;
    origin = Vec3.add(hit.block.location, hit.faceLocation, Vec3.mul(direction, EPSILON));
    const nextMediumIsGlass = isGlass(overworld.getBlock(origin)) ?? false;

    if (!thisMediumIsGlass && nextMediumIsGlass) {
        const normal = Vec3.fromDirection(hit.face);
        direction = refractWithTIR(direction, normal, IOR.AIR / IOR.GLASS);
    } else if (thisMediumIsGlass && !nextMediumIsGlass) {
        const normal = Vec3.neg(Vec3.fromDirection(hit.face));
        direction = refractWithTIR(direction, normal, IOR.GLASS / IOR.AIR);
    } else if (!thisMediumIsGlass && !nextMediumIsGlass) return hit;

    return traceShadowRay(origin, direction, options);
}

function isInSunlight(location: Vector3): boolean {
    const direction = directionToSun();
    const options: BlockRaycastOptions = { includeLiquidBlocks: true };
    return traceShadowRay(location, direction, options) === undefined;
}

function isOnFire(entity: Entity): boolean {
    return entity.hasComponent(EntityComponentTypes.OnFire);
}

export function* sunlightBurn() {
    if ((world.getTimeOfDay() + 540) % 24000 >= 13082) return;
    if (getCurrentWeather() !== WeatherType.Clear) return;
    for (const entity of overworld.getEntities({families: ["burns_in_sunlight"]})) {
        if (!entity || !entity.isValid()) continue;
        if (entity.isInWater) continue;
        if (isOnFire(entity)) continue;
        if (hasHelmet(entity)) continue;
        const feet = entity.location, head = entity.getHeadLocation();
        if (isInSunlight(feet) || isInSunlight(head)) entity.setOnFire(8, true);
        yield;
    }
    return;
}
