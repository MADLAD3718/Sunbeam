import { Entity, EntityComponentTypes, MinecraftDimensionTypes, WeatherType, world } from "@minecraft/server";
import { getCurrentWeather, hasHelmet } from "./util";
import { directionToSun } from "./sundirection";

const overworld = world.getDimension(MinecraftDimensionTypes.overworld);

function isInSunlight(entity: Entity): boolean {
    return overworld.getBlockFromRay(entity.getHeadLocation(), directionToSun(), {
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
        if (!entity.isValid()) continue;
        if (overworld.getBlock(entity.location)?.typeId === "minecraft:water") continue;
        if (isOnFire(entity)) continue;
        if (hasHelmet(entity)) continue;
        if (isInSunlight(entity))
            entity.setOnFire(8, true);
        yield;
    }
    return;
}
