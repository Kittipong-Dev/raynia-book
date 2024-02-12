import express, {Request, Response} from "express";
import path from 'path';

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), './public/index.html'))
})
router.get('/books', (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), './public/homepage.html'))
})
router.get('/books/book/:id', (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), './public/book.html'))
})
router.get('/search', (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), './public/search.html'))
})
router.get('/account', (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), './public/signin_signup.html'))
})
router.get('/signIn', (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), './public/signin.html'))
})
router.get('/signup', (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), './public/signup.html'))
})

export default router