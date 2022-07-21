import { Player } from "./Player";
import { Property } from "./Property";

export class ImpulsivePlayer extends Player {
    constructor(currentProperty: Property) {
        super('Impulsivo', currentProperty)
    }
}