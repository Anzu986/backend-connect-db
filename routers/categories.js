const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');
const { checkAuth } = require('../middlewares/auth');
const { findAllCategories, createCategory, findCategoryById, updateCategory, checkEmptyName, deleteCategory, checkIsCategoryExists } = require('../middlewares/categories');

  
  const categoriesRouter = require('express').Router();
 
  categoriesRouter.get('/categories/',
  
findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
  categoriesRouter.post(
    "/categories", 
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
); 
categoriesRouter.put ('/categories/:id',checkEmptyName, checkAuth,checkIsCategoryExists, updateCategory, sendCategoryUpdated)

categoriesRouter.delete('/categories/:id', checkAuth, deleteCategory, sendCategoryDeleted)

  module.exports = categoriesRouter;
  