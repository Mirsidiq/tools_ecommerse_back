import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
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
// CategoriesModel.hasMany(IncomesModel,{
//   foreignKey:"user_ref_id"
// })
// IncomesModel.belongsTo(CategoriesModel,{
//   foreignKey:"user_ref_id"
// })

export{
  CategoriesModel
}