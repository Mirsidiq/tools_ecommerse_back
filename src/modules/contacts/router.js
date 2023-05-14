import { Router } from "express";
import { checkAdminToken} from "../../middlewares/checkToken.js";
import { ContactBodyMiddleware,checkParamsId } from "../../middlewares/validation.middleware.js";
import { addContact, allContacts, deleteContact, updateContact } from "./controller.js";
const router=Router()

router.get("/contacts",allContacts)
router.post("/contacts",checkAdminToken,ContactBodyMiddleware,addContact)
router.put("/contact/:id",checkAdminToken,checkParamsId,updateContact)
router.delete("/contact/:id",checkAdminToken,checkParamsId,deleteContact)

export default router