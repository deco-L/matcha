import { Router } from "express";
import { googleLogin, googleCallback } from "./auth.controller";

const router = Router();

router.get("/google", googleLogin);
router.get("/google/callback", googleCallback);

export default router;
