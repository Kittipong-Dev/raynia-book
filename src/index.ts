import express, { json, urlencoded } from 'express';
import config from './config';
import { dbConnect } from './db/database';
import { User } from './db/models/User';
import books from './routers/books';
import accounts from './routers/accounts';

async function main(): Promise<void> {
    const app = express();
    const port = config.app.port;
    const host = config.app.host;

    await dbConnect();
    await User.sync();

    app.use(json())
    app.use(urlencoded({ extended: true}))

    app.use('/books', books)
    app.use('/accounts', accounts)

    app.listen(port, () => console.log(`Server is running on http://${host}:${port}`))
}
main()