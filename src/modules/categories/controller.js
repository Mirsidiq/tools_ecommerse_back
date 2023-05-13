import {CategoriesModel} from './model.js'
import {customError} from "../../exception/customError.js"
import { HOST } from '../../config/config.js'
const allCategories=async(req,res,next) => {
  const categories=await CategoriesModel.findAll()
 try {
  if(categories.length>0){
    res.status(200).json({
      message:"categories",
      data:categories
    })
  }
  else{
    res.status(404).json({
      message:"no categories",
      data:[]
    })
  }
 } catch (error) {
  next(new customError(error.message))
 }
}
const addCategory=async(req,res,next) => {
 try {
  const {name} = req.body
  const {filename}=req.file
  const imageUrl=`${HOST}/images/${filename}`
  const category=await CategoriesModel.create({name,thumbnail:imageUrl},{returning:true})
  if(category){
    res.status(201).json({
      message:"category created",
      data:category
    }) 
  }
  else{
    res.status(400).json({
      message:"category not created",
      data:{}
    })
  }
 } catch (error) {
  next(new customError(500,"internal error"))
 }
}
const updateCategory=async(req,res,next) => {
 try {
  const {id}=req.params
  const {name} = req.body
  const {filename}=req.file
  const imageUrl=`${HOST}/images/${filename}`
  const category=await CategoriesModel.update({name,thumbnail:imageUrl},{where:{
    category_id:id
  }},{returning:true})
  if(category[0]==1){
    res.status(201).json({
      message:"category updated",
      data:category
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
const deleteCategory=async(req,res,next) => {
 try {
  const {id}=req.params
  const category=await CategoriesModel.destroy({where:{
    category_id:id
  }})
  if(category==1){
    res.status(201).json({
      message:"category deleted",
      data:true
    }) 
  }
  else{
    res.status(400).json({
      message:"category not deleted",
      data:false
    })
  }
 } catch (error) {
  next(new customError(500,"internal error"))
 }
}
export{
  allCategories,
  addCategory,
  updateCategory,
  deleteCategory
}