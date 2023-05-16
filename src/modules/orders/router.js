import { Router } from "express";
import { checkAdminToken, checkUserToken} from "../../middlewares/checkToken.js";
import {checkParamsId,OrderBodyMiddleware} from "../../middlewares/validation.middleware.js";
import { addOrder,allOrders, deleteOrder, updateOrder } from "./controller.js";
const router=Router()

router.get("/order",checkAdminToken,allOrders)
router.post("/order",checkUserToken,OrderBodyMiddleware,addOrder)
router.put("/order/:id",checkAdminToken,checkParamsId,updateOrder)
router.delete("/order/:id",checkAdminToken,checkParamsId,deleteOrder)
// router.put("/subcategory/:id",checkAdminToken,checkParamsId,updateSubCategory)
// router.delete("/subcategory/:id",checkAdminToken,checkParamsId,deleteSubCategory)
export default router