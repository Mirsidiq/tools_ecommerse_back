import { DataTypes,ENUM } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
import { OrderAddressModel } from "../orderAddress/model.js";
import { OrdersModel } from "../orders/model.js";
const UsersModel=sequelize.define("users",{
  user_id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  autoIncrement:true,
  primaryKey:true,
  unique:true
 },
 firstname:{
  type:DataTypes.STRING(20),
 },
 lastname:{
  type:DataTypes.STRING(20),
 },
 contact:{
  type:DataTypes.STRING(15),
  unique:true,
  validate:{
    is:/^\+?[1-9][0-9]{7,11}$/
  }
 },
 email:{
  type:DataTypes.STRING(64),
  allowNull:false,
  validate:{
    isEmail:true
  }
 },
 password:{
  type:DataTypes.STRING(64),
    allowNull:false,
 },
 role:{
  type:DataTypes.ENUM("user","admin"),
  defaultValue:"user"
 }
},
{
  timestamps:false,
  freezeTableName:true,
})
UsersModel.hasMany(OrdersModel,{
  foreignKey:"ref_user"
})
OrdersModel.belongsTo(UsersModel,{
  foreignKey:"ref_user"
})
// UsersModel.hasMany(OrdersModel,{
//   foreignKey:"user_id"
// })
// OrdersModel.belongsTo(UsersModel,{
//   foreignKey:"user_id"
// })
// OrderAddressModel.belongsTo(UsersModel,{
//   foreignKey:"ref_user"
// })
// 1 ta userni bir nechta orderi bor har bitta orderni order addressi bor

export{
  UsersModel
}