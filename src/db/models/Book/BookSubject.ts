import {sequelize} from "../../database";
import {DataTypes} from "sequelize";

export const BookSubject = sequelize.define(
    "BookSubjects",
    {
        subjectName: {
            type: DataTypes.ENUM(),
            unique: true,
            allowNull: true
        }
    },
    {paranoid: true}
)