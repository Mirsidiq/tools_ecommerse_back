import { Router } from "express";
import { checkAdminToken} from "../../middlewares/checkToken.js";
import {  ProductBodyMiddleware, checkParamsId } from "../../middlewares/validation.middleware.js";
import { addProduct, allProducts,deleteProduct,productsAndSubcategory,updateProduct, } from "./controller.js";
const router=Router()

router.get("/products",allProducts)
router.get("/products/subcategory",productsAndSubcategory)
router.post("/product",checkAdminToken,ProductBodyMiddleware,addProduct)
router.put("/product/:id",checkAdminToken,checkParamsId,updateProduct)
router.delete("/product/:id",checkAdminToken,checkParamsId,deleteProduct)

export default router