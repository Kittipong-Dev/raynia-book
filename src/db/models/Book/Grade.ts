import { DataTypes } from "sequelize";
import { sequelize } from "../../database";

export const Grade = sequelize.define(
    "Grades",
    {
        grade: {
            type: DataTypes.ENUM("1/1", "1/2", "2/1", "2/2", "3/1", "3/2", "4/1", "4/2", "5/1", "5/2", "6/1", "6/2"),
            allowNull: false,
            unique: true
        }
    },
    {paranoid: true}
)