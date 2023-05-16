import { Router } from "express";
import { checkAdminToken, checkUserToken} from "../../middlewares/checkToken.js";
import {OrderAddressBodyMiddleware,checkParamsId} from "../../middlewares/validation.middleware.js";
import { addOrderAddress, orderAddress } from "./controller.js";
const router=Router()

router.get("/order/address",checkAdminToken,orderAddress)
router.post("/order/address",checkUserToken,OrderAddressBodyMiddleware,addOrderAddress)
// router.put("/subcategory/:id",checkAdminToken,checkParamsId,updateSubCategory)
// router.delete("/subcategory/:id",checkAdminToken,checkParamsId,deleteSubCategory)
export default router