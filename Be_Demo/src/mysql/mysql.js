import { Sequelize } from 'sequelize';
import { createUserModel } from '../models/user.js';
import { createSubCategoryModel } from '../models/subCategory.js';
import { createCategoryModel } from '../models/category.js';
import { createPostModel } from '../models/post.js';
import { createLikeModel } from '../models/likes.js';


const sequelize = new Sequelize('database', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

let User = null;
let SubCategory = null;
let Category = null;
let Post = null;
let Likes = null;


const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to DB successful");


        User = await createUserModel(sequelize);
        SubCategory = await createSubCategoryModel(sequelize);
        Category = await createCategoryModel(sequelize);
        Post = await createPostModel(sequelize);
        Likes = await createLikeModel(sequelize);

        // Define relationships
        User.hasMany(Likes, { foreignKey: 'userId' });
        Likes.belongsTo(User, { foreignKey: 'userId' });

        User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
        Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

        Post.hasMany(Likes, { foreignKey: 'postId' });
        Likes.belongsTo(Post, { foreignKey: 'postId' });

        SubCategory.hasMany(Post, { foreignKey: 'subCategoryId', as: 'posts' });
        Post.belongsTo(SubCategory, { foreignKey: 'subCategoryId', as: 'subCategory' });

        Category.hasMany(SubCategory, { as: 'subcategories', foreignKey: 'categoryId' });
        SubCategory.belongsTo(Category, { as: 'category', foreignKey: 'categoryId' });


        await sequelize.sync({ force: true });
        console.log("Database Synced");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export {
    sequelize,
    connection,
    User,
    SubCategory,
    Category,
    Post,
    Likes,
};
