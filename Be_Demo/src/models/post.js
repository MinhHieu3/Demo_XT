import {DataTypes} from 'sequelize';
import {SubCategory, User} from '../mysql/mysql.js';

export const createPostModel = async (sequelize) => {
    const Post = sequelize.define(
        'Post', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            show:{
              type: DataTypes.BOOLEAN,

            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        tableName: "User"
                    },
                    key: 'id',
                }
            },
            subCategoryId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        tableName: 'SubCategory',
                    },
                    key: 'id',
                }
            }
        }, {
            timestamps: false,
            tableName: 'Post',

        });

    return Post;
};
