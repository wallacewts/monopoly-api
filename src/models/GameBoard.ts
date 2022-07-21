import { IPlayer } from "../interfaces/IPlayer";
import { CautiousPlayer } from "./CautiousPlayer";
import { DemandingPlayer } from "./DemandingPlayer";
import { ImpulsivePlayer } from "./ImpulsivePlayer";
import { Property } from "./Property";
import { RandomPlayer } from "./RandomPlayer";

export class GameBoard {
    private fullBackBonus = 100;
    private dice  = [1, 2, 3, 4, 5, 6];
    private players;
    private properties;

    constructor() {
        const zeroProperty = new Property(0, 0, 0);
        this.players = [
            new CautiousPlayer(zeroProperty),
            new DemandingPlayer(zeroProperty),
            new ImpulsivePlayer(zeroProperty),
            new RandomPlayer(zeroProperty)
        ];
        this.properties = [
            new Property(1, 10, 5),
            new Property(2, 20, 10),
            new Property(3, 30, 15),
            new Property(4, 40, 20),
            new Property(5, 50, 25),
            new Property(6, 60, 30),
            new Property(7, 70, 35),
            new Property(8, 80, 40),
            new Property(9, 90, 45),
            new Property(10, 100, 50),
            new Property(11, 110, 55),
            new Property(12, 120, 60),
            new Property(13, 130, 65),
            new Property(14, 140, 70),
            new Property(15, 150, 75),
            new Property(16, 160, 80),
            new Property(17, 170, 85),
            new Property(18, 180, 90),
            new Property(19, 190, 95),
            new Property(20, 200, 100)
        ];
    }

    public start(): void {
        let round = 0;
        this.players = this.players.sort(() => Math.random() - 0.5);

        while(round < 1000) {
            this.players.forEach(player => {
                const diceNumber = player.throwDice(this.dice);
                const playerCurrentProperty = player.getCurrentProperty();
                const calculatePostion =  playerCurrentProperty.getId() !== 0 ? playerCurrentProperty.getId() + diceNumber : diceNumber;
                let propertyIndexPosition;
    
                if (calculatePostion > this.properties.length) {
                    propertyIndexPosition = calculatePostion - this.properties.length - 1;
                    this.applyFullBackBonus(player)
                } else {
                    propertyIndexPosition = calculatePostion - 1;
                }
    
                const nextProperty = this.properties[propertyIndexPosition];
    
                player.moveToNextProperty(nextProperty);
                round++;
                console.log('Round: ' + round)
            });
        }
    }

    public getPlayers(): IPlayer[] {
        return this.players;
    }

    public applyFullBackBonus(player: IPlayer): void {
        player.addMoney(this.fullBackBonus);

        console.log(`- O jogador ${player.getProfile()} completou uma volta no tabuleiro e recebeu R$${this.fullBackBonus} como bônus.`)
    }
}