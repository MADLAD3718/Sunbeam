import { Player, ScriptEventCommandMessageAfterEvent } from "@minecraft/server";
import { directionToSun } from "./sundirection";
import { getCurrentWeather } from "./util";
import { Vec3 } from "@madlad3718/mcvec3";

const NAMESPACE = "sunbeam";

export function scriptEventHandler(event: ScriptEventCommandMessageAfterEvent) {
    const player = event.sourceEntity as Player | undefined;
    switch (event.id) {
        case `${NAMESPACE}:help`:
            let message = "";
            switch (event.message) {
                case "dts":
                    message = `§edts:\nLogs the current direction to sun vector.\n`
                            + `§rUsage:\n - /scriptevent ${NAMESPACE}:dts`;
                    break;
                case "wt":
                        message = `§ewt:\nLogs the currently stored weather value.\n`
                                + `§rUsage:\n - /scriptevent ${NAMESPACE}:wt`;
                        break;
                default:
                    message = `§2--- Showing help page 1 of 1 ---\n`
                            + `§r/scriptevent ${NAMESPACE}:help [command: CommandName]\n`
                            + `/scriptevent ${NAMESPACE}:dts\n`
                            + `/scriptevent ${NAMESPACE}:wt`;
            }
            player?.sendMessage(message);
            break;
        case `${NAMESPACE}:dts`:
            player?.sendMessage(`Direction to Sun: {${Vec3.toString(directionToSun())}}`);
            break;
        case `${NAMESPACE}:wt`:
            player?.sendMessage(`Get weather result: ${getCurrentWeather()}`);
            break;
    }
}