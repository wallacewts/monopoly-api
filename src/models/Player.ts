import { IPlayer } from "../interfaces/IPlayer"
import { Property } from "./Property"

export class Player implements IPlayer {
    private profile: string
    private money: number
    protected currentProperty: Property;

    constructor(profile: string, currentProperty: Property) {
        this.profile = profile
        this.currentProperty = currentProperty;
        this.money = 300
    }

    public getCurrentProperty(): Property {
        return this.currentProperty;
    }

    public throwDice(dice: number[]): number {
        const diceNumber = dice[Math.floor(Math.random() * dice.length)]

        console.log(`- O jogador ${this.profile} lançou o dado e caiu o número: ${diceNumber}.`)

        return diceNumber;
    }

    public getProfile(): string {
        return this.profile;
    }

    public getMoney(): number {
        return this.money;
    }

    public subtractMoney(money: number): void {
        this.money -= money;
    }

    public addMoney(money: number): void {
        this.money += money;
    }

    buyCurrentProperty(): void {
        this.currentProperty.setOwner(this);
        this.subtractMoney(this.currentProperty.getSalePrice());
        console.log(`- O jogador ${this.getProfile()} comprou a propriedade ${this.currentProperty.getId()}.`)
    }

    public moveToNextProperty(property: Property): void {
        const owner = property.getOwner();
        this.currentProperty = property;

        if (owner && owner.getProfile() !== this.getProfile()) {
            const rentalPrice = property.getRentalPrice();

            this.subtractMoney(rentalPrice);
            owner.addMoney(rentalPrice);

            console.log(`- O jogador ${this.getProfile()} parou na propriedade do jogador ${owner.getProfile()} e precisou pagar R$${rentalPrice}.`);
        } else {
            this.buyCurrentProperty();
        }
    }
}