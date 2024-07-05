import {Category, SubCategory} from "../mysql/mysql.js";
import express from 'express';
import {
    createCategoryController,
    getCategoryController, hideCategoryController,
    updateCategoryController
} from "../controller/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get('/',getCategoryController)

categoryRouter.post('/', createCategoryController);

categoryRouter.put('/:id', updateCategoryController);

categoryRouter.delete('/:id', hideCategoryController);

export default categoryRouter;
