import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
import { SubcategoriesModel } from "../subcategories/model.js";
const CategoriesModel=sequelize.define("categories",{
  category_id:{
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
 thumbnail:{
  type:DataTypes.STRING,
 }
},
{
  timestamps:false,
  freezeTableName:true,
})
CategoriesModel.hasMany(SubcategoriesModel,{
  foreignKey:"ref_category",
})
SubcategoriesModel.belongsTo(CategoriesModel,{
  foreignKey:"ref_category",
})

export{
  CategoriesModel
}