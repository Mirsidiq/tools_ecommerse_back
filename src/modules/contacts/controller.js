import { customError } from "../../exception/customError.js"
import { CompanyAddressModel } from "./model.js"

const allContacts=async (req,res,next) => {
  try {
    const contacts =await CompanyAddressModel.findAll()
    if(contacts.length > 0) {
      res.status(200).json({
        message:"contacts",
        data:contacts
      })
    }
    else {
          res.status(404).json({
            message:"contacts not found",
            data:[]
          })
        }
  } catch (error) {
    next(new customError(500,"internal error"))
  }
}
const addContact=async(req,res,next) => {
  try {
   const {address,email,phone} = req.body
   const contact=await CompanyAddressModel.create({address,email,phone},{returning:true})
   if(contact){
     res.status(201).json({
       message:"contact created",
       data:contact
     }) 
   }
   else{
     res.status(400).json({
       message:"contact not created",
       data:{}
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
 const updateContact=async(req,res,next) => {
  try {
   const {id}=req.params
   const {email,phone,address} = req.body
   const contact=await CompanyAddressModel.update({email,phone,address},{where:{
    id
   }},{returning:true})
   if(contact[0]==1){
     res.status(201).json({
       message:"contact updated",
       data:contact
     }) 
   }
   else{
     res.status(400).json({
       message:"contact not updated",
       data:{}
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
 const deleteContact=async(req,res,next) => {
  try {
   const {id}=req.params
   const contact=await CompanyAddressModel.destroy({where:{
     id
   }})
   if(contact==1){
     res.status(201).json({
       message:"contact deleted",
       data:true
     }) 
   }
   else{
     res.status(400).json({
       message:"contact not deleted",
       data:false
     })
   }
  } catch (error) {
   next(new customError(500,"internal error"))
  }
 }
export{
  allContacts,
  addContact,
  updateContact,
  deleteContact,
}