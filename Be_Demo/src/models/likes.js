import { DataTypes } from 'sequelize';
import { Post, User } from '../mysql/mysql.js';

export const createLikeModel = async (sequelize) => {
    const Likes = sequelize.define('Likes', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Post',
                key: 'id',
            },
        },
    }, {
        timestamps: false,
        tableName:"Likes"
    });
    return Likes;
};
