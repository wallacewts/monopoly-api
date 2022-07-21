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
            this.logger.info(`Comprou a propriedade em que parou pois o valor de aluguel dela é R$${this.currentProperty.getRentalPrice()} maior que sua exigência de R$${this.requirementRent}`, this.getProfile())
        } else {
            this.logger.info(`Não quis comprar a propriedade em que parou pois seu valor de alugel de R${this.currentProperty.getRentalPrice()} não atendia suas exigências`, this.getProfile())
        }
    }
}