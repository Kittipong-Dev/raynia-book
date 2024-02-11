import express, {Request, Response} from "express";
import path from 'path';

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../public/index.html"))
}) // Welcome
router.get('/books', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../public/books.html"))
})
router.get('/books/book', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../public/book.html"))
})
router.get('/search', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../public/search.html"))
})
router.get('/account', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../public/account.html"))
})
router.get('/singIn', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../public/signIn.html"))
})
router.get('/signUp', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../public/signUp.html"))
})

export default router