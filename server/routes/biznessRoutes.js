import express from 'express';
import { getAllBiznesses, createBizness, updateBizness, deleteBizness } from '../controllers/biznessesController.js'

const router = express.Router();

router.get('/', getAllBiznesses);
router.post('/', createBizness);
router.patch('/:id', updateBizness);
router.delete('/:id', deleteBizness);

export default router;