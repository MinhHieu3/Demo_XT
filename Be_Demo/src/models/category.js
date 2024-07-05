import { DataTypes } from 'sequelize';

export const createCategoryModel = async (sequelize) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        show: {
            type: DataTypes.BOOLEAN,
        }
    }, {
        timestamps: false,
        tableName: 'Category'
    });

    return Category;
};
