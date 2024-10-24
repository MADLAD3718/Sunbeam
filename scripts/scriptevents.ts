import { Player, ScriptEventCommandMessageAfterEvent } from "@minecraft/server";
import { directionToSun } from "./sundirection";
import { Vec3 } from "@madlad3718/mcveclib";
import { getCurrentWeather } from "./util";

const NAMESPACE = "sunbeam";

export function scriptEventHandler(event: ScriptEventCommandMessageAfterEvent) {
    const player = event.sourceEntity as Player;
    let message = "";
    switch (event.id) {
        case `${NAMESPACE}:help`:
            switch (event.message) {
                case "dts":
                    message = `§edts:\nLogs the current direction to sun vector.\n`
                            + `§rUsage:\n - /scriptevent ${NAMESPACE}:dts`;
                    break;
                case "wet":
                        message = `§ewet:\nLogs the currently stored weather value.\n`
                                + `§rUsage:\n - /scriptevent ${NAMESPACE}:wet`;
                        break;
                default:
                    message = `§2--- Showing help page 1 of 1 ---\n`
                            + `§r/scriptevent ${NAMESPACE}:help [command: CommandName]\n`
                            + `/scriptevent ${NAMESPACE}:dts\n`
                            + `/scriptevent ${NAMESPACE}:wet`;
            }
            break;
        case `${NAMESPACE}:dts`:
            message = `Direction to Sun: {${Vec3.toString(directionToSun())}}`;
            break;
        case `${NAMESPACE}:wet`:
            message = `Get weather result: ${getCurrentWeather()}`;
            break;
    }
    player.sendMessage(message);
}
