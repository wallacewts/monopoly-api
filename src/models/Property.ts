import { IPlayer } from "../interfaces/IPlayer";

export class Property {
    private id: number;
    private owner: IPlayer | null = null;
    private salePrice: number;
    private rentalPrice: number;

    constructor(id: number, salePrice: number, rentalPrice: number) {
        this.id = id;
        this.salePrice = salePrice;
        this.rentalPrice = rentalPrice;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getOwner(): IPlayer | null {
        return this.owner;
    }

    public setOwner(player: IPlayer): void {
        this.owner = player;
    }

    public getRentalPrice(): number {
        return this.rentalPrice;
    }

    public getSalePrice(): number {
        return this.salePrice;
    }

    public removeOwner(): void {
        this.owner = null;
    }
}