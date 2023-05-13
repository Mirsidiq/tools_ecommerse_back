import { Router } from "express";
import { addCategory, allCategories, deleteCategory, updateCategory } from "./controller.js";
import { checkAdminToken} from "../../middlewares/checkToken.js";
import { upload } from "../../middlewares/fileUpload.middleware.js";
import { checkParamsId } from "../../middlewares/validation.middleware.js";
const router=Router()

router.get("/categories",checkAdminToken,allCategories)
router.post("/categories",checkAdminToken,upload.single('image'),addCategory)
router.put("/category/:id",checkAdminToken,checkParamsId,upload.single('image'),updateCategory)
router.delete("/category/:id",checkAdminToken,checkParamsId,deleteCategory)

export default router