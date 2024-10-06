import { scriptEventHandler } from "./scriptevents";
import { system } from "@minecraft/server";
import { repeatGenerator } from "./util";
import { sunlightBurn } from "./burn";

system.afterEvents.scriptEventReceive.subscribe(scriptEventHandler);

repeatGenerator(sunlightBurn);
