import { sequelize } from "../database";
import { DataTypes } from "sequelize";

export const Book = sequelize.define(
    "Books",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        author: DataTypes.STRING,
        price: DataTypes.FLOAT,
        tag: DataTypes.ARRAY,
        image: DataTypes.ARRAY
    },
    {paranoid: true}
)