import express from 'express';
import { getAllBiznesses, createBizness, updateBizness } from '../controllers/biznessesController.js'

const router = express.Router();

router.get('/', getAllBiznesses);
router.post('/', createBizness);
router.patch('/:id', updateBizness);

export default router;