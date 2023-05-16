import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
import { OrdersModel } from "../orders/model.js";
const regions=["toshkent","samarqand","buxoro","xorazm","navoiy","qashqadaryo","jizzax","surxandaryo","namangan","toshkent viloyati","qoraqalpog'iston"]
const OrderAddressModel=sequelize.define("order_address",{
  address_id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  autoIncrement:true,
  primaryKey:true,
  unique:true
 },
 mail_index:{
  type:DataTypes.BIGINT,
 },
 region:{
  type:DataTypes.ENUM(...regions),
  defaultValue:"toshkent",
  allowNull:false
 },
 district:{
  type:DataTypes.STRING(64),
  allowNull:false
 },
 street:{
  type:DataTypes.STRING(64),
  allowNull:false
 },
 home:{
  type:DataTypes.BIGINT,
    allowNull:false
 },
 phone:{
  type:DataTypes.STRING(15),
  allowNull:false,
  validate:{
    is:/^\+?[1-9][0-9]{7,11}$/
  }
 },
 other_data:{
  type:DataTypes.TEXT,
 },
  ref_user:{
  type:DataTypes.BIGINT,
  allowNull:false
 }
},
{
  timestamps:false,
  freezeTableName:true,
})
OrderAddressModel.hasOne(OrdersModel,{
  foreignKey:"ref_address",
})
OrdersModel.belongsTo(OrderAddressModel,{
  foreignKey:"ref_address",
})
// IncomesModel.belongsTo(OrderAddressModel,{
//   foreignKey:"user_ref_id"
// })

export{
  OrderAddressModel
}