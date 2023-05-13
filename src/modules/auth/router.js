import { Router } from "express";
import {login, register} from "./controller.js";
import { UserLoginBodyMiddleware,UserRegisterBodyMiddleware } from "../../middlewares/validation.middleware.js";

const router=Router()

router.post("/login",UserLoginBodyMiddleware,login)
router.post("/register",UserRegisterBodyMiddleware,register)
export default router