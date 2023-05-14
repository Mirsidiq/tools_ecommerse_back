import { customError } from "../../exception/customError.js"
import { BrandsModel } from "./model.js"

const allBrands=async (req,res,next) => {
  try {
    const brands =await BrandsModel.findAll()
    if(brands.length > 0) {
      res.status(200).json({
        message:"brands",
        data:brands
      })
    }
    else {
          res.status(404).json({
            message:"brands not found",
            data:[]
          })
        }
  } catch (error) {
    next(new customError(500,"internal error"))
  }
}
const addBrand=async(req,res,next) => {
  try {
   const {name} = req.body
   const brand=await BrandsModel.create({brand:name},{returning:true})
   if(brand){
     res.status(201).json({
       message:"brand created",
       data:brand
     }) 
   }
   else{
     res.status(400).json({
       message:"brand not created",
       data:{}
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
 const updateBrand=async(req,res,next) => {
  try {
   const {id}=req.params
   const {name} = req.body
   const brand=await BrandsModel.update({brand:name},{where:{
    id
   }},{returning:true})
   if(brand[0]==1){
     res.status(201).json({
       message:"brand updated",
       data:brand
     }) 
   }
   else{
     res.status(400).json({
       message:"brand not updated",
       data:{}
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
 const deleteBrand=async(req,res,next) => {
  try {
   const {id}=req.params
   const brand=await BrandsModel.destroy({where:{
     id
   }})
   if(brand==1){
     res.status(201).json({
       message:"brand deleted",
       data:true
     }) 
   }
   else{
     res.status(400).json({
       message:"brand not deleted",
       data:false
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
export{
  addBrand,
  allBrands,
  deleteBrand,
  updateBrand,
}