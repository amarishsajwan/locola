import { Router } from "express";
import userRoute from "./user";
import eventRoute from "./event";
import authMiddleware from "./middleware";
import adminRoute from "./admin";
const router = Router();
router.use("/admin", adminRoute);
router.use("/user", userRoute);
router.use("/event", authMiddleware, eventRoute);
router.use("/findEvent", authMiddleware);
export default router;