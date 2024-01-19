import { sequelize } from "../database";
import { DataTypes } from "sequelize";

export const BookRaynia = sequelize.define(
    "BookRaynia",
    {
        
    },
    {paranoid: true}
)