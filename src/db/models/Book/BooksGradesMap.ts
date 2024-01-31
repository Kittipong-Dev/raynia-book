import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
import { Book } from "./Book";
import { Grade } from "./Grade";

export const BooksGradesMap = sequelize.define(
    "BooksGradesMaps",
    {
        bookId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Book,
                key: 'bookId'
            },
        },
        grade: {
            type: DataTypes.ENUM("1/1", "1/2", "2/1", "2/2", "3/1", "3/2", "4/1", "4/2", "5/1", "5/2", "6/1", "6/2"),
            primaryKey: true,
            references: {
                model: Grade,
                key: "grade"
            }
        }
    },
    {paranoid: true}
)