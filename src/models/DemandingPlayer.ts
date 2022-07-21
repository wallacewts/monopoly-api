import Logger from "@ptkdev/logger";
import { Player } from "./Player";
import { Property } from "./Property";

export class DemandingPlayer extends Player {
    private requirementRent = 50;

    constructor(currentProperty: Property, logger: Logger) {
        super('Exigente', currentProperty, logger)
    }

    override buyCurrentProperty(): void {
        if (this.currentProperty.getRentalPrice() > this.requirementRent) {
            this.currentProperty.setOwner(this);
            this.subtractMoney(this.currentProperty.getSalePrice());
            this.logger.info(`Comprou a propriedade ${this.currentProperty.getId()} pois o valor de aluguel dela é R$${this.currentProperty.getRentalPrice()} maior que sua exigência de R$${this.requirementRent}`, this.getProfile())
        }
    }
}