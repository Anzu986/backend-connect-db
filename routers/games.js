const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGamedeleted } = require('../controllers/games');
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists } = require('../middlewares/games');


const gamesRouter = require('express' ) .Router();
gamesRouter.get ("/games/" ,

findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games/", findAllGames,
checkIsGameExists,
checkIfCategoriesAvaliable,
checkEmptyFields,
createGame,
sendGameCreated);

gamesRouter.put ('/game/:id', findGameById,checkIfUsersAreSafe,checkIfCategoriesAvaliable,  checkEmptyFields, updateGame,sendGameUpdated)

gamesRouter.delete('/game/:id',deleteGame, sendGamedeleted)

module.exports = gamesRouter;