import express from 'express';
import { getAllMarkers, getAllGroupMarkers } from '../Controllers/marker.controller.js';
const router = express.Router();



router.get('/users', getAllMarkers);
router.get('/group-markers', getAllGroupMarkers);

export default router;