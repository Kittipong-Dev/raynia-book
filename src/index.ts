import express, { json, urlencoded } from 'express';
import config from './config';
import books from './routers/books';
import accounts from './routers/accounts';
import { initDB } from './db/initDB';

async function main(): Promise<void> {
    const app = express();
    const port = config.app.port;
    const host = config.app.host;

    await initDB();

    app.use(json())
    app.use(urlencoded({ extended: true}))

    app.use('/books', books)
    app.use('/accounts', accounts)

    app.listen(port, () => console.log(`Server is running on http://${host}:${port}`))
}
main()