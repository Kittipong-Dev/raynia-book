import { sequelize } from "../database";
import { DataTypes } from "sequelize";

export const Book = sequelize.define(
    "Books",
    {
        bookId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dataId: {
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        tag: {
            type: DataTypes.ARRAY,
            allowNull: false
        },
        image: {
            type: DataTypes.ARRAY,
            allowNull: false
        },
        requirement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {paranoid: true}
)