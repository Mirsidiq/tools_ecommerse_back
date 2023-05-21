import { Router } from "express";
import { checkAdminToken} from "../../middlewares/checkToken.js";
import {  ProductBodyMiddleware, checkParamsId } from "../../middlewares/validation.middleware.js";
import { addProduct, allProducts,deleteProduct,discountedProducts,getProductById,productsAndSubcategory,updateProduct, } from "./controller.js";
import { upload } from "../../middlewares/fileUpload.middleware.js";
const router=Router()

router.get("/products",allProducts)
router.get("/product/:id",checkParamsId,getProductById)
router.get("/products/discounted",discountedProducts)
router.get("/products/subcategory",productsAndSubcategory)
router.post("/product",checkAdminToken,upload.single("image"),ProductBodyMiddleware,addProduct)
router.put("/product/:id",checkAdminToken,checkParamsId,upload.single("image"),updateProduct)
router.delete("/product/:id",checkAdminToken,checkParamsId,deleteProduct)

export default router