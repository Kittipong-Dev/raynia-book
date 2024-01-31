import { sequelize } from "../../database";
import { DataTypes } from "sequelize";

export const Book = sequelize.define(
    "Books",
    {
        bookId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {paranoid: true}
)