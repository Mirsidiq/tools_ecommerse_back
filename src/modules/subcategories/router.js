import { Router } from "express";
import { checkAdminToken} from "../../middlewares/checkToken.js";
import { SubcategoryBodyMiddleware, checkParamsId } from "../../middlewares/validation.middleware.js";
import { addSubCategory, allSubCategories,categoryById,deleteSubCategory,updateSubCategory } from "./controller.js";
const router=Router()

router.get("/subcategories",allSubCategories)
router.get("/subcategory/:id",categoryById)
router.post("/subcategories",checkAdminToken,SubcategoryBodyMiddleware,addSubCategory)
router.put("/subcategory/:id",checkAdminToken,checkParamsId,updateSubCategory)
router.delete("/subcategory/:id",checkAdminToken,checkParamsId,deleteSubCategory)

export default router