import Logger from "@ptkdev/logger";
import { Player } from "./Player";
import { Property } from "./Property";

export class ImpulsivePlayer extends Player {
    constructor(currentProperty: Property, logger: Logger) {
        super('Impulsivo', currentProperty, logger)
    }
}