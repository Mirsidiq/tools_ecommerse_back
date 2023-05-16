import { DataTypes,ENUM } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
import { OrderAddressModel } from "../orderAddress/model.js";
const OrdersModel=sequelize.define("orders",{
  order_id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  autoIncrement:true,
  primaryKey:true,
  unique:true
 },
 total:{
  type:DataTypes.DOUBLE,
  allowNull:false
 },
 count:{
  type:DataTypes.BIGINT,
  allowNull:false
 },
 product:{
  type:DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.BIGINT)),
  allowNull:false
 },
 ordered_at:{
  type:DataTypes.NOW,
  defaultValue:DataTypes.NOW,
  allowNull:false
 }
},
{
  timestamps:false,
  freezeTableName:true,
})
// OrdersModel.hasMany(OrderAddressModel,{
//   foreignKey:"ref_user"
// })
// OrderAddressModel.belongsTo(OrdersModel,{
//   foreignKey:"ref_user"
// })
// 1 ta userni bir nechta orderi bor har bitta orderni order addressi bor

export{
  OrdersModel
}