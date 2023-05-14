import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
const CompanyAddressModel=sequelize.define("company_address",{
  id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  autoIncrement:true,
  primaryKey:true,
  unique:true
 },
 address:{
  type:DataTypes.STRING(64),
  allowNull:false,
  unique:true
 },
 email:{
  type:DataTypes.STRING(64),
  allowNull:false,
  unique:true
 },
 phone:{
  type:DataTypes.STRING(64),
  allowNull:false,
  unique:true,
  validate:{
    is:/^\+?[1-9][0-9]{7,11}$/
  }
 },
},
{
  timestamps:false,
  freezeTableName:true,
})
// CompanyAddressModel.hasMany(IncomesModel,{
//   foreignKey:"user_ref_id"
// })
// IncomesModel.belongsTo(CompanyAddressModel,{
//   foreignKey:"user_ref_id"
// })

export{
  CompanyAddressModel
}