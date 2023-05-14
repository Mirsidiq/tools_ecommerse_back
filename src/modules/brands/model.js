import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
const BrandsModel=sequelize.define("brands",{
  id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  autoIncrement:true,
  primaryKey:true,
  unique:true
 },
 brand:{
  type:DataTypes.STRING(128),
  allowNull:false,
  unique:true
 },
},
{
  timestamps:false,
  freezeTableName:true,
})
// BrandsModel.hasMany(IncomesModel,{
//   foreignKey:"user_ref_id"
// })
// IncomesModel.belongsTo(BrandsModel,{
//   foreignKey:"user_ref_id"
// })

export{
  BrandsModel
}