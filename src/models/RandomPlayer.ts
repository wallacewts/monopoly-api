import { Player } from "./Player";
import { Property } from "./Property";

export class RandomPlayer extends Player {
    constructor(currentProperty: Property) {
        super('Aleatório', currentProperty)
    }

    override buyCurrentProperty(): void {
        const randomNumber = Math.round(Math.random());

        if (randomNumber === 1) {
            this.currentProperty.setOwner(this);
            this.subtractMoney(this.currentProperty.getSalePrice());
            console.log(`- O jogador ${this.getProfile()} parou na proprieadade ${this.currentProperty.getId()} sem dono e decidiu compra-la.`)
        } else {
            console.log(`- O jogador ${this.getProfile()} parou na proprieadade ${this.currentProperty.getId()} sem dono, mas não quis compra-la.`)
        }
    }
}