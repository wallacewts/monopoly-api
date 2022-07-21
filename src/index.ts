import express from 'express'
import dotenv from 'dotenv'

import { GameBoard } from './models/GameBoard'

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 8080;

app.get('/jogo/simular', (request, response) => {
    const gameBoard = new GameBoard();
    
    gameBoard.start();

    const mappedPlayers = gameBoard.getFinishedPlayers().map((player, index) => ({
        posicao: index + 1,
        name: player.getProfile(),
        money: player.getMoney()
    }))

    response.json({
        vencedor: mappedPlayers[0].name,
        jogadores: mappedPlayers
    })
})

app.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port} 👌`)
})