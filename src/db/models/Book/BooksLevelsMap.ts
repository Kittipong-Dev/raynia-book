import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
import { Book } from "./Book";
import { Level } from "./Level";

export const BooksLevelsMap = sequelize.define(
    "BooksLevelsMaps",
    {
        bookId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Book,
                key: 'bookId'
            },
        },
        level: {
            type: DataTypes.ENUM("ม.1 เทอม 1", "ม.1 เทอม 2", "ม.2 เทอม 1", "ม.2 เทอม 2", "ม.3 เทอม 1", "ม.3 เทอม 2", "ม.4 เทอม 1", "ม.4 เทอม 2", "ม.5 เทอม 1", "ม.5 เทอม 2", "ม.6 เทอม 1", "ม.6 เทอม 2"),
            primaryKey: true,
            references: {
                model: Level,
                key: "level"
            }
        }
    },
    {paranoid: true}
)