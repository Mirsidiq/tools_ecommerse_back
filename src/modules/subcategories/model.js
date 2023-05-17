import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
import { ProductsModel } from "../products/model.js";
const SubcategoriesModel=sequelize.define("subcategories",{
  subcategory_id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  autoIncrement:true,
  primaryKey:true,
  unique:true
 },
 name:{
  type:DataTypes.STRING(20),
  allowNull:false,
  unique:true
 },
 ref_category:{
  type:DataTypes.BIGINT,
    allowNull:false,
 }
},
{
  timestamps:false,
  freezeTableName:true,
})
// SubcategoriesModel.hasMany(ProductsModel,{
//   foreignKey:"ref_subcategory"
// })
// ProductsModel.belongsTo(SubcategoriesModel,{
//   foreignKey:"ref_subcategory"
// })

export{
  SubcategoriesModel
}