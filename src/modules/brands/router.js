import { Router } from "express";
import { checkAdminToken} from "../../middlewares/checkToken.js";
import { checkParamsId } from "../../middlewares/validation.middleware.js";
import { addBrand, allBrands, deleteBrand, updateBrand } from "./controller.js";
const router=Router()

router.get("/brands",allBrands)
router.post("/brands",checkAdminToken,addBrand)
router.put("/brand/:id",checkAdminToken,checkParamsId,updateBrand)
router.delete("/brand/:id",checkAdminToken,checkParamsId,deleteBrand)

export default router