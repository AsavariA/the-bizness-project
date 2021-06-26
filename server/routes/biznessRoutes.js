import express from 'express';
import { getAllBiznesses, createBizness, updateBizness, deleteBizness } from '../controllers/biznessesController.js'
import auth from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/', getAllBiznesses);
router.post('/', auth, createBizness);
router.patch('/:id', auth, updateBizness);
router.delete('/:id', auth, deleteBizness);

export default router;