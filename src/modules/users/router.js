import { Router } from "express";
import { deleteUser, addUser, updateUser, users, usersById, } from "./controller.js";
import { checkAdminToken, checkUserToken } from "../../middlewares/checkToken.js";
import { checkParamsId } from "../../middlewares/validation.middleware.js";

const router=Router()

router.get("/users",checkAdminToken,users)
router.get("/user/profile",checkUserToken,usersById)
// router.get("/user/order/:id",checkAdminToken,usersOrders)
router.post("/users",addUser)
router.put("/users/:id",checkUserToken,checkParamsId,updateUser)
router.delete("/users/:id",checkAdminToken,deleteUser)
export default router