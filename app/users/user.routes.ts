import { Router } from "express";
const router = Router();
import * as UserController from "./user.controller";

router
    .post("/", UserController.create)
    .post("/auth", UserController.login);

export default router;
