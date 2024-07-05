import express from "express";
import {
    createSubCategoryController,
    getSubCategoryController,
    hideSubCategoryController, updateSubCategoryController
} from "../controller/subCategoryController.js";

const subCategoryRouter=express.Router();


subCategoryRouter.get('/', getSubCategoryController);

subCategoryRouter.post('/', createSubCategoryController);

subCategoryRouter.delete('/:id', hideSubCategoryController)
subCategoryRouter.put('/:id', updateSubCategoryController)

export default subCategoryRouter;