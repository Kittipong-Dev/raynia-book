import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
import { Book } from "./Book";


export const BooksImage = sequelize.define(
    "BooksImages",
    {
        bookId: {
            type: DataTypes.INTEGER,
            references: {
                model: Book,
                key: 'bookId'
            },
            primaryKey: true
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {paranoid: true}
)