import Logger from "@ptkdev/logger";
import { Property } from "../models/Property";

export interface IPlayer {
    profile: string
    money: number
    currentProperty: Property;
    logger: Logger;

    throwDice(dice: number[]): number; 

    subtractMoney(money: number): void;

    addMoney(money: number): void;

    buyCurrentProperty(): void;

    moveToNextProperty(property: Property): void;

    getProfile(): string;
    
    getMoney(): number;

    getCurrentProperty(): Property;

    verifyCanBuyProperty(): void;
}