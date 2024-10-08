import { Entity, WeatherType, world } from "@minecraft/server";
import { jobPromise } from "@bedrock-oss/bedrock-boost";

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
    "minecraft:turtle_helmet"
]

export function hasHelmet(entity: Entity): boolean {
    for (const helmetId of HELMETIDS) {
        if (entity.runCommand(`testfor @s[hasitem={location=slot.armor.head,item=${helmetId}}]`).successCount == 1)
            return true;
    }
    return false;
}
