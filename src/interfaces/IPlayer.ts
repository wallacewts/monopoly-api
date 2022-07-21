import { Property } from "../models/Property";

export interface IPlayer {
    throwDice(dice: number[], gameBoard: Property[]): void 

    subtractMoney(money: number): void;

    addMoney(money: number): void;

    buyCurrentProperty(): void;

    moveToNextProperty(property: Property): void;

    getProfile(): string;
    
    getMoney(): number;

    getCurrentProperty(): Property;

    verifyCanBuyProperty(): void;
}