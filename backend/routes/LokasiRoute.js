import express from "express";
import {
    getLokasis,
    getLokasiById,
    createLokasi,
    updateLokasi,
    deleteLokasi
} from "../controllers/Lokasis.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/lokasis', verifyUser, getLokasis);
router.get('/lokasis/:id', verifyUser, getLokasiById);
router.post('/lokasis', verifyUser, createLokasi);
router.patch('/lokasis/:id', verifyUser, updateLokasi);
router.delete('/lokasis/:id', verifyUser, deleteLokasi);

export default router;