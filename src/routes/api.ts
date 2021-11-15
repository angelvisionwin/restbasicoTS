import { Router } from 'express';
import { apiGet, apiPost, apiPut, apiDelete } from '../controllers/api';

export const router: Router = Router();

router.get('/', apiGet);
router.post('/', apiPost);
router.put('/', apiPut);
router.delete('/', apiDelete);