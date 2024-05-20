const { sendUserCreated, sendAllUsers, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users');
const { findAllUsers, createUser, findUserById, updateUser, checkEmptyNameAndEmail, deleteUser } = require('../middlewares/users');

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
usersRouter.delete('/users/:id',deleteUser, sendUserDeleted)

usersRouter.put ('/users/:id',checkEmptyNameAndEmail, updateUser,sendUserUpdated)
  module.exports = usersRouter;
  