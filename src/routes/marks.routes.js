import express from 'express';
import { getAllMarkers, getAllGroupMarkers,getZoneMarkers,writeMarker } from '../Controllers/marker.controller.js';
const router = express.Router();



router.get('/markers', getAllMarkers);
router.get('/group-markers', getAllGroupMarkers);
router.get('/markers/:id_group_mark', getZoneMarkers);
router.post('/createMarker', writeMarker);

export default router;