import express, { json, urlencoded } from 'express';
import config from './config';
import { dbConnect } from './db/database';

async function main(): Promise<void> {
    const app = express();
    const port = config.app.port;
    const host = config.app.host;

    await dbConnect();

    app.use(json())
    app.use(urlencoded({ extended: true}))

    app.listen(port, () => console.log(`Server is running on http://${host}:${port}`))
}
main()