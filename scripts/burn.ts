import { Entity, EntityComponentTypes, MinecraftDimensionTypes, WeatherType, world } from "@minecraft/server";
import { directionToSun } from "./sundirection";
import { getCurrentWeather } from "./util";

const overworld = world.getDimension(MinecraftDimensionTypes.overworld);

function isInSunlight(entity: Entity): boolean {
    const {dimension} = entity;
    return dimension.getBlockFromRay(entity.getHeadLocation(), directionToSun(), {
        includePassableBlocks: true,
        includeLiquidBlocks: true
    }) === undefined;
}

function isOnFire(entity: Entity): boolean {
    return entity.hasComponent(EntityComponentTypes.OnFire);
}

export function* sunlightBurn() {
    if ((world.getTimeOfDay() + 540) % 24000 >= 13082) return;
    if (getCurrentWeather() !== WeatherType.Clear) return;
    for (const entity of overworld.getEntities({families: ["burns_in_sunlight"]})) {
        const {dimension, location} = entity;
        if (dimension.getBlock(location)?.typeId === "minecraft:water") continue;
        if (isOnFire(entity)) continue;
        if (isInSunlight(entity))
            entity.setOnFire(8, true);
        yield;
    }
    return;
}
