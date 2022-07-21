import Logger from "@ptkdev/logger";
import { Player } from "./Player";
import { Property } from "./Property";

export class CautiousPlayer extends Player {
    private limitBalance = 80;

    constructor(currentProperty: Property, logger: Logger) {
        super('Cauteloso', currentProperty, logger)
    }

    override buyCurrentProperty(): void {
        const reserveBalance = this.getMoney() - this.currentProperty.getSalePrice();

        if (reserveBalance >= this.limitBalance) {
            this.logger.info(`Comprou a propriedade ${this.currentProperty.getId()} por R$${this.currentProperty.getSalePrice()}, pois seu saldo reserva ainda é de R$${reserveBalance}`, this.getProfile())
            this.currentProperty.setOwner(this);
            this.subtractMoney(this.currentProperty.getSalePrice());
        }
    }
}