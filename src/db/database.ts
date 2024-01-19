import { Sequelize } from "sequelize";
import config from "../config";

export const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
    host: config.database.host,
    dialect: 'mysql'
});

export function dbConnect(): Promise<void> {
    return sequelize.authenticate().then((): void => {
        console.log("Database Authorized")
    }).catch((error): void => {
        console.error("Database Falied", error)
        process.exit(1)
    })
}