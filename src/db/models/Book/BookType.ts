import {sequelize} from "../../database";
import {DataTypes} from "sequelize";

export const BookType = sequelize.define(
    "BookTypes",
    {
        typeName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        }
    },
    {paranoid: true}
)