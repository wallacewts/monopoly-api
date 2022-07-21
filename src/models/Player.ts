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
        this.logger.info(`Comprou a propriedade ${this.currentProperty.getId()}`, this.profile)
        this.currentProperty.setOwner(this);
        this.subtractMoney(this.currentProperty.getSalePrice());
    }

    public moveToNextProperty(property: Property): void {
        this.currentProperty = property;
        
        this.logger.info(`Moveu para a propriedade ${this.currentProperty.getId()}`, this.profile)
    }

    public verifyCanBuyProperty(): void {
        if (this.currentProperty.getOwner()) {
            this.logger.error(`Não pode comprar a propriedade atual pois ela já tem um dono`, this.getProfile());
        } else if (this.money >= this.currentProperty.getSalePrice()) {
            this.buyCurrentProperty();
        } else {
            this.logger.error(`Não tem dinheiro para comprar a propriedade ${this.getCurrentProperty().getId()}`, this.getProfile());
        }
    }
}