import { dbConnect, sequelize } from './database';
import { User } from './models/User/User';
import { Book } from './models/Book/Book';
import { BookData } from './models/Book/BookData';
import { Author } from './models/Book/Author';
import { BooksAuthorsMap } from './models/Book/BooksAuthorsMap';
import { BookTag } from './models/Book/BookTag';
import { BooksBookTagsMap } from './models/Book/BooksBookTagsMap';
import { BookType } from './models/Book/BookType';
import { BooksBookTypesMap } from './models/Book/BooksBookTypesMap';
import { BooksImage } from './models/Book/BooksImage';
import { BooksGradesMap } from './models/Book/BooksGradesMap';
import { Grade } from './models/Book/Grade';

export async function initDB() {
    await dbConnect();
    await User.sync();
    await Book.sync();
    await BookData.sync();
    await Author.sync();
    await BooksAuthorsMap.sync();
    await BookTag.sync();
    await BooksBookTagsMap.sync();
    await BookType.sync();
    await BooksBookTypesMap.sync();
    await BooksImage.sync();
    await Grade.sync();
    await BooksGradesMap.sync();
}
