import expressPkg from "express";
const { Router } = expressPkg;
import { googleLogin, googleCallback } from "./auth.controller.ts";

const router = Router();

router.get("/google", googleLogin);
router.get("/google/callback", googleCallback);

export default router;
