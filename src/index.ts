import express, { json, urlencoded } from 'express';
import config from './config';
import booksApi from './routers/booksApi';
import accountsApi from './routers/accountsApi';
import routing from './routers/routing';
import { initDB } from './db/initDB';
import path from 'path';

async function main(): Promise<void> {
    const app = express();
    const port = config.app.port;
    const host = config.app.host;

    await initDB();

    app.use(json())
    app.use(urlencoded({ extended: true}))
    app.use(express.static(path.join(process.cwd(), 'public')))

    // api/v1
    app.use('/api/v1/books', booksApi)
    app.use('/api/v1/accounts', accountsApi)

    // /
    app.use('/', routing);

    app.listen(port, () => console.log(`Server is running on http://${host}:${port}`))
}
main()