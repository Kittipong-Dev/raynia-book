// rename to config.ts before build

const { MYSQL_HOST, SERVER_HOST } = process.env


if (MYSQL_HOST === undefined || SERVER_HOST === undefined) {
    console.log('No Database Host')
    process.exit(1)
}


export default {
    app: {
        host: SERVER_HOST,
        port: ""
    },
    database: {
        username: "",
        password: "",
        name: "",
        host: MYSQL_HOST
    }
}