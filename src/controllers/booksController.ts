import { Request, Response } from 'express';
import { Book } from '../db/models/Book/Book';
import { Author } from '../db/models/Book/Author';
import { BooksAuthorsMap } from '../db/models/Book/BooksAuthorsMap';
import { BookTag } from '../db/models/Book/BookTag';
import { BooksBookTagsMap } from '../db/models/Book/BooksBookTagsMap';
import { BookType } from '../db/models/Book/BookType';
import { BooksBookTypesMap } from '../db/models/Book/BooksBookTypesMap';
import { BooksGradesMap } from '../db/models/Book/BooksLevelsMap';
import { BookData } from '../db/models/Book/BookData';

const addBook = async ( req: Request, res: Response ) => {
    try {
        const body = req.body
        const book = await Book.create(body.book) // book: name price description

        await Author.findOrCreate({
            where: {
                authorName: body.authorName
            },
            defaults: {
                authorName: body.authorName
            }
        })
        await BooksAuthorsMap.create({bookId: book.bookId, authorName: body.authorName})

        // imagesPath

        await BookTag.findOrCreate({
            where: {
                tagName: body.tagName
            },
            defaults: {
                tagName: body.tagName
            }
        })
        await BooksBookTagsMap.create({bookId: book.bookId, tagName: body.tagName})

        await BooksBookTypesMap.create({bookId: book.bookId, typeName: body.TypeName})
        
        await BooksGradesMap.create({bookId: book.bookId, grade: body.grade})
    
        let bookData = body.data
        bookData.bookId = book.bookId

        await BookData.create(bookData)

        // add to calculated database

    } catch (error) {

    }
}


// http://localhost:8000/books?search=htmlcssfundamental&subject=math&subject=science&grade=4/2&type=content&author=chaiya-promso&publisher=dip&price=asc/desc (default random)
const getBooks = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
}

// http://localhost:8000/books/book/:bookId
const getBook = async (req: Request, res: Response) => {
    try {
        const { bookId } = req.params
        console.log(Book.findAll({include: Author}))
    } catch (error) {

    }
}

export { addBook, getBook, getBooks }

// put book for normal users need to have logged in