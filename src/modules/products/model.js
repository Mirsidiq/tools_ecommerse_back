import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
const brands=["rasulov","stroyka","destroy","rollers"]
const ProductsModel=sequelize.define("products",{
  product_id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  autoIncrement:true,
  primaryKey:true,
  unique:true
 },
 name:{
  type:DataTypes.STRING(64),
  allowNull:false
 },
 description:{
  type:DataTypes.STRING,

 },
 price:{
  type:DataTypes.DOUBLE,
  allowNull:false
 },
 total_count:{
  type:DataTypes.DOUBLE,
  allowNull:false
 },
 thumbnail:{
  type:DataTypes.STRING,
 },
 brand:{
  type:DataTypes.ENUM(...brands),
  allowNull:false
 },
 ref_subcategory:{
  type:DataTypes.BIGINT,
  allowNull:false
 }
},
{
  timestamps:false,
  freezeTableName:true,
})
// ProductsModel.hasMany(IncomesModel,{
//   foreignKey:"user_ref_id"
// })
// IncomesModel.belongsTo(ProductsModel,{
//   foreignKey:"user_ref_id"
// })

export{
  ProductsModel
}