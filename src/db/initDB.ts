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
import { BooksLevelsMap } from './models/Book/BooksLevelsMap';
import { Level } from './models/Book/Level';
import { Publisher } from './models/Book/Publisher';
import { BooksPublishersMap } from './models/Book/BooksPublishersMap';
import { RayniaedContentData } from './models/Book/Raynia/RayniaedContentData';
import { RayniaedExplainTypesData } from './models/Book/Raynia/RayniaedExplainTypesData';
import { RayniaedPhysicalData } from './models/Book/Raynia/RayniaedPhysicalData';
import { RayniaedProblemData } from './models/Book/Raynia/RayniaedProblemData';

export async function initDB() {
    await dbConnect();
    // await sequelize.drop();
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
    await Level.sync();
    await BooksLevelsMap.sync();
    await Publisher.sync();
    await BooksPublishersMap.sync();
    await RayniaedContentData.sync();
    await RayniaedExplainTypesData.sync();
    await RayniaedPhysicalData.sync();
    await RayniaedProblemData.sync();
}

// BookType.create({
//     typeName: "content"
// })

// BookType.create({
//     typeName: "problem"
// })

// BookType.create({
//     typeName: "content-problem"
// })


// for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 2; j++) {
//         Grade.create({
//             grade: `${i}/${j}`
//         })
//     }
// }