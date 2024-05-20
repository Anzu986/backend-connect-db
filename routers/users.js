const { sendUserCreated, sendAllUsers, sendUserById, sendUserUpdated } = require('../controllers/users');
const { findAllUsers, createUser, findUserById, updateUser, checkEmptyNameAndEmail } = require('../middlewares/users');

const usersRouter = require('express' ) .Router();

 
usersRouter.get('/users/',
findUserById, sendUserById,
findAllUsers, sendAllUsers);

usersRouter.post(
  "/users",
  checkEmptyNameAndEmail,
  findAllUsers,
  createUser,
  sendUserCreated
); 

usersRouter.put ('/users/:id',checkEmptyNameAndEmail, updateUser,sendUserUpdated)
  module.exports = usersRouter;
  