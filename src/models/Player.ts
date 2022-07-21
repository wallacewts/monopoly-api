import { IPlayer } from "../interfaces/IPlayer"
import { Property } from "./Property"

import Logger from '@ptkdev/logger'

export class Player implements IPlayer {
    private profile: string
    private money: number
    protected currentProperty: Property;
    protected logger: Logger;

    constructor(profile: string, currentProperty: Property, logger: Logger) {
        this.profile = profile
        this.currentProperty = currentProperty;
        this.money = 300
        this.logger = logger;
    }

    public getCurrentProperty(): Property {
        return this.currentProperty;
    }

    public throwDice(dice: number[]): number {
        const diceNumber = dice[Math.floor(Math.random() * dice.length)]

        this.logger.info(`Lançou o dado e caiu o número ${diceNumber}`, this.profile)

        return diceNumber;
    }

    public getProfile(): string {
        return this.profile;
    }

    public getMoney(): number {
        return this.money;
    }

    public subtractMoney(money: number): void {
        this.logger.info(`Saldo anterior R$${this.money}`, this.profile);

        this.money -= money;

        this.logger.info(`Saldo atual R$${this.money}`, this.profile)
    }

    public addMoney(money: number): void {
        this.logger.info(`Saldo anterior R$${this.money}`, this.profile);

        this.money += money;

        this.logger.info(`Saldo atual R$${this.money}`, this.profile)
    }

    buyCurrentProperty(): void {
        this.currentProperty.setOwner(this);
        this.subtractMoney(this.currentProperty.getSalePrice());
        this.logger.info(`Comprou a propriedade ${this.currentProperty.getId()}`, this.profile)
    }

    public moveToNextProperty(property: Property): void {
        const owner = property.getOwner();
        this.currentProperty = property;

        if (owner && owner.getProfile() !== this.getProfile()) {
            const rentalPrice = property.getRentalPrice();

            this.logger.error(`Parou na propriedade do jogador ${owner.getProfile()} e precisou pagar R$${rentalPrice}`, this.profile)
            this.subtractMoney(rentalPrice);
            owner.addMoney(rentalPrice);
        } else {
            this.buyCurrentProperty();
        }
    }
}