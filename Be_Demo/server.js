import express from 'express';
import { connection } from './src/mysql/mysql.js';
import userRouter from './src/router/userRouter.js';
import categoryRouter from "./src/router/categoryRouter.js";
import subCategoryRouter from "./src/router/subCategoryRouter.js";
import postRouter from "./src/router/postRouter.js";


const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/subCategories', subCategoryRouter);
app.use('/api/posts', postRouter);


app.listen(3007, async () => {
    try {
        await connection();
        console.log(`Server is running `);
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
});