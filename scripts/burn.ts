import { BlockRaycastOptions, Entity, EntityComponentTypes, MinecraftDimensionTypes, WeatherType, world } from "@minecraft/server";
import { getCurrentWeather, hasHelmet } from "./util";
import { directionToSun } from "./sundirection";

const overworld = world.getDimension(MinecraftDimensionTypes.overworld);

function isInSunlight(entity: Entity): boolean {
    const direction = directionToSun();
    const feet = entity.location, head = entity.getHeadLocation();
    const options: BlockRaycastOptions = { includeLiquidBlocks: true };
    return overworld.getBlockFromRay(feet, direction, options) === undefined
        || overworld.getBlockFromRay(head, direction, options) === undefined;
}

function isOnFire(entity: Entity): boolean {
    return entity.hasComponent(EntityComponentTypes.OnFire);
}

export function* sunlightBurn() {
    if ((world.getTimeOfDay() + 540) % 24000 >= 13082) return;
    if (getCurrentWeather() !== WeatherType.Clear) return;
    for (const entity of overworld.getEntities({families: ["burns_in_sunlight"]})) {
        if (!entity || !entity.isValid()) continue;
        if (overworld.getBlock(entity.location)?.typeId === "minecraft:water") continue;
        if (isOnFire(entity)) continue;
        if (hasHelmet(entity)) continue;
        if (isInSunlight(entity))
            entity.setOnFire(8, true);
        yield;
    }
    return;
}
