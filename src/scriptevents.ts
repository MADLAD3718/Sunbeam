import { ScriptEventCommandMessageAfterEvent, world } from "@minecraft/server";
import { directionToSun } from "./sundirection";
import { Vec3 } from "@madlad3718/mcvec3";

export function scriptEventHandler(event: ScriptEventCommandMessageAfterEvent) {
    switch (event.id) { 
        case "sunbeam:dts":
            world.sendMessage(`Direction to Sun: {${Vec3.toString(directionToSun())}}`);
            break;
    }
}