import { Player } from "./Player";
import { Property } from "./Property";

export class CautiousPlayer extends Player {
    private limitBalance = 80;

    constructor(currentProperty: Property) {
        super('Cauteloso', currentProperty)
    }

    override buyCurrentProperty(): void {
        const reserveBalance = this.getMoney() - this.currentProperty.getSalePrice();

        if (reserveBalance >= this.limitBalance) {
            console.log(`- O jogador ${this.getProfile()} comprou a propriedade ${this.currentProperty.getId()} por R$${this.currentProperty.getSalePrice()}, pois seu saldo reserva ainda é de R$${this.getMoney()}.`);
            this.currentProperty.setOwner(this);
            this.subtractMoney(this.currentProperty.getSalePrice());
        }
    }
}