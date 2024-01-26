import { sequelize } from "../database";
import { DataTypes } from "sequelize";

export const BookData = sequelize.define(
    "BookDatas",
    {
        dataId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        technic: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        length: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        explain: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        example: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        complete: {
            type: DataTypes.INTEGER
        },
        T: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 100
            }
        },
        D: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 100
            }
        },
        P: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 100
            }
        },
        analyze: DataTypes.BOOLEAN,
        applied: DataTypes.BOOLEAN,
        knowledgeTest: DataTypes.BOOLEAN,
        complexNumber: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        step: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        analyzeHardness: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        technicalTermDifficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        answer: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 3
            }
        },
        surfaceCmW: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        surfaceCmH: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weightG: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        threadSewing: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        glue: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        gram: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cover: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        flexibleRidge: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        fontTyped: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        fontSize: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        eyeCare: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        blackWhite: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        oneCharLineSpacing: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    {paranoid: true}
)