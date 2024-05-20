
const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
 
req.usersArray = await users.find({});
next();
}




const findUserById = async (req, res, next) => {
    console.log("GET /users/:id");
    try {
      req.user = await users.findById(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
  };




  const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
      console.log(req.body);
      req.user = await users.create(req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
    }
  }; 

  const updateUser = async (req, res, next) => {
    try {
        // В метод передаём id из параметров запроса и объект с новыми свойствами
      req.user = await games.findByIdAndUpdate(req.params.id, req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Ошибка обновления пользоваткля" }));
    }
  }; 
  const checkEmptyNameAndEmail = async(req, res, next) =>{
    if (!req.body.username || !req.body.email){
      res.status(400).send({ message: "введите имя и email " })
    }else{
      next()
    }
  }

module.exports = {findAllUsers, findUserById, createUser,updateUser, checkEmptyNameAndEmail};