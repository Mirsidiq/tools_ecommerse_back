import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
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
},
{
  timestamps:false,
  freezeTableName:true,
})
// SubcategoriesModel.hasMany(IncomesModel,{
//   foreignKey:"user_ref_id"
// })
// IncomesModel.belongsTo(SubcategoriesModel,{
//   foreignKey:"user_ref_id"
// })

export{
  SubcategoriesModel
}