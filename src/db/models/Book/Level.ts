import { DataTypes } from "sequelize";
import { sequelize } from "../../database";

export const Level = sequelize.define(
    "Levels",
    {
        minLevel: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 6
            },
            primaryKey: true
        },
        minTerm: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 2
            },
            primaryKey: true
        } // validate min < max
    }, // put this to primary table
    {paranoid: true}
)