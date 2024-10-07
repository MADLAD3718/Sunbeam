import { Player, ScriptEventCommandMessageAfterEvent } from "@minecraft/server";
import { directionToSun } from "./sundirection";
import { getCurrentWeather } from "./util";
import { Vec3 } from "@madlad3718/mcvec3";

const NAMESPACE = "sunbeam";

export function scriptEventHandler(event: ScriptEventCommandMessageAfterEvent) {
    const player = event.sourceEntity as Player | undefined;
    switch (event.id) {
        case `${NAMESPACE}:dts`:
            player?.sendMessage(`Direction to Sun: {${Vec3.toString(directionToSun())}}`);
            break;
        case `${NAMESPACE}:wet`:
            player?.dimension.runCommandAsync("weather query").then(result => {
                player?.sendMessage(`Get weather result: ${getCurrentWeather()}`);
            });
            break;
    }
}