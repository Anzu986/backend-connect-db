const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');
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
    createCategory,
    sendCategoryCreated
); 
categoriesRouter.put ('/categories/:id',checkEmptyName,checkIsCategoryExists, updateCategory, sendCategoryUpdated)

categoriesRouter.delete('/categories/:id',deleteCategory, sendCategoryDeleted)

  module.exports = categoriesRouter;
  