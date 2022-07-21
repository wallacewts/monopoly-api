import { Player } from "./Player";
import { Property } from "./Property";

export class DemandingPlayer extends Player {
    constructor(currentProperty: Property) {
        super('Exigente', currentProperty)
    }

    override buyCurrentProperty(): void {
        if (this.currentProperty.getRentalPrice() > 50) {
            this.currentProperty.setOwner(this);
            this.subtractMoney(this.currentProperty.getSalePrice());
            console.log(`- O jogador ${this.getProfile()} comprou a propriedade ${this.currentProperty.getId()} pois o valor de aluguel dela é de R$${this.currentProperty.getRentalPrice()}.`);
        }
    }
}