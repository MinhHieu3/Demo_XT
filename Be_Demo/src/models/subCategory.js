import { DataTypes } from 'sequelize';

export const createSubCategoryModel = async (sequelize) => {
    const SubCategory = sequelize.define('SubCategory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        show: {
            type: DataTypes.BOOLEAN,

        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category',
                key: 'id',
            },
        }
    }, {
        timestamps: false,
        tableName: "SubCategory"
    });

    return SubCategory;
};
