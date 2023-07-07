import express from "express";
import {
    getSchedules,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule
} from "../controllers/Schedules.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/schedules', verifyUser, getSchedules);
router.get('/schedules/:id', verifyUser, getScheduleById);
router.post('/schedules', verifyUser, createSchedule);
router.patch('/schedules/:id', verifyUser, updateSchedule);
router.delete('/schedules/:id', verifyUser, deleteSchedule);

export default router;