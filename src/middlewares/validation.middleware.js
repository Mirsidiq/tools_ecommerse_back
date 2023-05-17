import { customError } from "../exception/customError.js";
import {
  checkId,
  ContactBody,
  OrderAddressBody,
  OrderBody,
  ProductBody,
  SubcategoryBody,
  UserLoginBody,
  UserRegisterBody,
  validateImage,
} from "../validation/validate.js";
const checkIsValid =(validation,reqMethod)=>{
  const {error,__}=validation.validate(reqMethod);
  return new Promise((resolve,reject)=>{
    !error ? resolve("valid"): reject(error.message.replaceAll('"', ""));
  });
}

const checkParamsId = async(req, _, next) => {
 await checkIsValid(checkId,req.params).catch(err=>next(new customError(400, err)));
  next()
};
const UserLoginBodyMiddleware =async (req, _, next) => {
  await checkIsValid(UserLoginBody,req.body).catch(err=>next(new customError(400, err)));
  next();
};
const UserRegisterBodyMiddleware = async(req, _, next) => {
  await checkIsValid(UserRegisterBody,req.body).catch(err=>next(new customError(400, err)));
  next();
};
const SubcategoryBodyMiddleware =async (req, _, next) => {
  await checkIsValid(SubcategoryBody,req.body).catch(err=>next(new customError(400, err)));
  next();
};
const ContactBodyMiddleware = async(req, _, next) => {
  await checkIsValid(ContactBody,req.body).catch(err=>next(new customError(400, err)));
  next();
};
const ProductBodyMiddleware = async(req, _, next) => {
  await checkIsValid(ProductBody,req.body).catch(err=>next(new customError(400, err)));
  next();
};
const ValidateImageMiddleware = async(req, _, next) => {
  await checkIsValid(validateImage,req.file).catch(err=>next(new customError(400, err)));
  next();
}
const OrderAddressBodyMiddleware = async(req, _, next) => {
  await checkIsValid(OrderAddressBody,req.body).catch(err=>next(new customError(400, err)));
  next();
};
const OrderBodyMiddleware = async(req, _, next) => {
  await checkIsValid(OrderBody,req.body).catch(err=>next(new customError(400, err)));
  next();
};
export {
  checkParamsId,
  UserLoginBodyMiddleware,
  UserRegisterBodyMiddleware,
  SubcategoryBodyMiddleware,
  ContactBodyMiddleware,
  ProductBodyMiddleware,
  OrderAddressBodyMiddleware,
  OrderBodyMiddleware
}
