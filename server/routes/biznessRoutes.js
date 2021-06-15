import express from 'express';
import { getAllBiznesses, createBizness } from '../controllers/biznessesController.js'

const router = express.Router();

router.get('/', getAllBiznesses);
router.post('/', createBizness);

export default router;