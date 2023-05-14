import { customError } from "../../exception/customError.js"
import { ProductsModel } from "../products/model.js"
import { SubcategoriesModel } from "./model.js"

const allSubCategories=async (req,res,next) => {
  try {
    const subcategories =await SubcategoriesModel.findAll({include:[ProductsModel]})
    if(subcategories.length > 0) {
      res.status(200).json({
        message:"subcategories",
        data:subcategories
      })
    }
    else {
          res.status(404).json({
            message:"subcategories not found",
            data:[]
          })
        }
  } catch (error) {
    next(new customError(500,"internal error"))
  }
}
const addSubCategory=async(req,res,next) => {
  try {
   const {name} = req.body
   const subcategory=await SubcategoriesModel.create({name},{returning:true})
   if(subcategory){
     res.status(201).json({
       message:"subcategory created",
       data:subcategory
     }) 
   }
   else{
     res.status(400).json({
       message:"subcategory not created",
       data:{}
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
 const updateSubCategory=async(req,res,next) => {
  try {
   const {id}=req.params
   const {name} = req.body
   const subcategory=await SubcategoriesModel.update({name},{where:{
    subcategory_id:id
   }},{returning:true})
   if(subcategory[0]==1){
     res.status(201).json({
       message:"subcategory updated",
       data:subcategory
     }) 
   }
   else{
     res.status(400).json({
       message:"category not updated",
       data:{}
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
 const deleteSubCategory=async(req,res,next) => {
  try {
   const {id}=req.params
   const subcategory=await SubcategoriesModel.destroy({where:{
     subcategory_id:id
   }})
   if(subcategory==1){
     res.status(201).json({
       message:"subcategory deleted",
       data:true
     }) 
   }
   else{
     res.status(400).json({
       message:"subcategory not deleted",
       data:false
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
export{
  allSubCategories,
  addSubCategory,
  updateSubCategory,
  deleteSubCategory
}