import { customError } from "../exception/customError.js";
import {
  checkId,
  ContactBody,
  OrderAddressBody,
  ProductBody,
  SubcategoryBody,
  UserLoginBody,
  UserRegisterBody,
} from "../validation/validate.js";

const checkParamsId = (req, _, next) => {
  const { error, __ } = checkId.validate(req.params);
  if (error) next(new customError(400, error.message.replaceAll('"', "")));
  next();
};
const UserLoginBodyMiddleware = (req, _, next) => {
  const { error, __ } = UserLoginBody.validate(req.body);
  if (error) next(new customError(400, error.message.replaceAll('"', "")));
  next();
};
const UserRegisterBodyMiddleware = (req, _, next) => {
  const { error, __ } =UserRegisterBody.validate(req.body);
  if (error) next(new customError(400, error.message.replaceAll('"', "")));
  next();
};
const SubcategoryBodyMiddleware = (req, _, next) => {
  const { error, __ } =SubcategoryBody.validate(req.body);
  if (error) next(new customError(400, error.message.replaceAll('"', "")));
  next();
};
const ContactBodyMiddleware = (req, _, next) => {
  const { error, __ } =ContactBody.validate(req.body);
  if (error) next(new customError(400, error.message.replaceAll('"', "")));
  next();
};
const ProductBodyMiddleware = (req, _, next) => {
  const { error, __ } =ProductBody.validate(req.body);
  if (error) next(new customError(400, error.message.replaceAll('"', "")));
  next();
};
const OrderAddressBodyMiddleware = (req, _, next) => {
  const { error, __ } =OrderAddressBody.validate(req.body);
  if (error) next(new customError(400, error.message.replaceAll('"', "")));
  next();
};
export {
  checkParamsId,
  UserLoginBodyMiddleware,
  UserRegisterBodyMiddleware,
  SubcategoryBodyMiddleware,
  ContactBodyMiddleware,
  ProductBodyMiddleware,
  OrderAddressBodyMiddleware
}
