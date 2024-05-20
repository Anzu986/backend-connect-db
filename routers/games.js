const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated } = require('../controllers/games');
const { findAllGames, createGame, findGameById, updateGame } = require('../middlewares/games');


const gamesRouter = require('express' ) .Router();
gamesRouter.get ("/games/" ,

findAllGames, sendAllGames);

gamesRouter.post("/games/", findAllGames, createGame, sendGameCreated);

gamesRouter.put ('/game/:id', findGameById, updateGame,sendGameUpdated)

module.exports = gamesRouter;