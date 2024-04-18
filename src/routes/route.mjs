import express from "express";
import { addBooks,findBooks } from "../controllers/LibraryController.mjs";

const router = express.Router();
router.get('/api/books',findBooks);
router.post('/api/books/add',addBooks)

export default router;