import express from 'express'
import { GameBoard } from './models/GameBoard'

const app = express()
const port = 8080

app.get('/jogo/simular', (request, response) => {
    const gameBoard = new GameBoard();
    
    gameBoard.start();
    response.json(gameBoard.getPlayers().map(player => ({
        name: player.getProfile(),
        money: player.getMoney()
    })))
})

app.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port} 👌`)
})