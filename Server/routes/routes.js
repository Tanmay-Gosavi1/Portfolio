import express from 'express';
import { DownloadResume } from '../controller/downloadResume.js';
import { getAIResponse } from '../controller/aiController.js';
const router = express.Router();
import contactUs from '../controller/contactUs.js';

router.get('/download',DownloadResume);
router.post('/contact',contactUs)
router.post('/chat' , getAIResponse);

export default router;