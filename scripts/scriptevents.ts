import { Player, ScriptEventCommandMessageAfterEvent } from "@minecraft/server";
import { directionToSun } from "./sundirection";
import { Vec3 } from "@madlad3718/mcvec3";

export function scriptEventHandler(event: ScriptEventCommandMessageAfterEvent) {
    const player = event.sourceEntity as Player | undefined;
    switch (event.id) { 
        case "sunbeam:dts":
            player?.sendMessage(`Direction to Sun: {${Vec3.toString(directionToSun())}}`);
            break;
    }
}