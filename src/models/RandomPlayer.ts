import Logger from "@ptkdev/logger";
import { Player } from "./Player";
import { Property } from "./Property";

export class RandomPlayer extends Player {
    constructor(currentProperty: Property, logger: Logger) {
        super('Aleatório', currentProperty, logger)
    }

    override buyCurrentProperty(): void {
        const randomNumber = Math.round(Math.random());

        if (randomNumber === 1) {
            this.currentProperty.setOwner(this);
            this.subtractMoney(this.currentProperty.getSalePrice());
            this.logger.info(`Parou na proprieadade ${this.currentProperty.getId()} sem dono e decidiu compra-la`, this.getProfile())
        } else {
            this.logger.info(`Parou na proprieadade ${this.currentProperty.getId()} sem dono, mas não quis compra-la`, this.getProfile())
        }
    }
}