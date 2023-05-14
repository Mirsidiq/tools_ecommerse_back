import { Router } from "express";
import { checkAdminToken} from "../../middlewares/checkToken.js";
import {OrderAddressBodyMiddleware,checkParamsId} from "../../middlewares/validation.middleware.js";
import { orderAddress } from "./controller.js";
const router=Router()

router.get("/order/address",orderAddress)
// router.post("/subcategories",checkAdminToken,SubcategoryBodyMiddleware,addSubCategory)
// router.put("/subcategory/:id",checkAdminToken,checkParamsId,updateSubCategory)
// router.delete("/subcategory/:id",checkAdminToken,checkParamsId,deleteSubCategory)
export default router