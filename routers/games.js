const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGamedeleted } = require('../controllers/games');
const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require('../middlewares/games');


const gamesRouter = require('express' ) .Router();
gamesRouter.get ("/games/" ,

findAllGames, sendAllGames);

gamesRouter.post("/games/", findAllGames, createGame, sendGameCreated);

gamesRouter.put ('/game/:id', findGameById, updateGame,sendGameUpdated)

gamesRouter.delete('/game/:id',deleteGame, sendGamedeleted)

module.exports = gamesRouter;