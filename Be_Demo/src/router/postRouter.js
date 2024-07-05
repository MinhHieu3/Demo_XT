import {Category, SubCategory} from "../mysql/mysql.js";
import express from 'express';
import {
    createPostController,
    getPostController,
    hidePostController,
    updatePostController
} from "../controller/postController.js";

const postRouter = express.Router();

postRouter.get('/',getPostController)

postRouter.post('/', createPostController);

postRouter.put('/:id', updatePostController);

postRouter.delete('/:id', hidePostController);

export default postRouter;