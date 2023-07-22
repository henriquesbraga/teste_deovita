import { Router } from 'express';
import { insertNews, listAllNews, listOne, updateNews, deleteSpecificNews } from './controller/NewsController.js';
const router = Router();

router.post('/create', insertNews);
router.get('/all', listAllNews)
router.get('/specific/:id', listOne)
router.put('/update/:id', updateNews)
router.delete('/delete/:id', deleteSpecificNews)

export default router