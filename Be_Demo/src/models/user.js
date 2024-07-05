import {DataTypes} from 'sequelize';

export const createUserModel = async (sequelize) => {
    const User = sequelize.define(
        'User', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            picture: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
            tableName : "User"
        });

    return User;
};
