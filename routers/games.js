const sendAllGames = require('../controllers/games');
const findAllGames = require('../middlewares/games');

const gameRouter = require('express' ) .Router();
gameRouter.get ('/games' , findAllGames, sendAllGames);
module.exports = gameRouter;