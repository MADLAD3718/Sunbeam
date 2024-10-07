import { MinecraftDimensionTypes, WeatherType, world } from "@minecraft/server";
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
