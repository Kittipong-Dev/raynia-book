import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
import { Book } from "./Book";
import { BookSubject } from "./BookSubject";

export const BooksBookSubjectsMap = sequelize.define(
    "BooksBookSubjectsMaps",
    {
        bookId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Book,
                key: "bookId"
            }
        },
        subjectName: {
            type: DataTypes.ENUM(),
            primaryKey: true,
            references: {
                model: BookSubject,
                key: "subjectName"
            }
        }
    },
    {paranoid: true}
)