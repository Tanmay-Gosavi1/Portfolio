import express from 'express';
import { DownloadResume } from '../controller/downloadResume.js';
const router = express.Router();
import contactUs from '../controller/contactUs.js';

router.get('/download',DownloadResume);
router.post('/contact',contactUs)

export default router;