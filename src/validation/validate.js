import Joi from "joi";
const checkId = Joi.object({
  id: Joi.number().integer().required(),
});

const UserLoginBody = Joi.object({
  email: Joi.string().max(64).required(),
  password: Joi.string().max(64).required(),
});

const UserRegisterBody = Joi.object({
  firstname: Joi.string().max(64).required(),
  email: Joi.string().max(64).required(),
  password: Joi.string().max(64).required(),
});
const ContactBody = Joi.object({
  phone: Joi.string().regex(/^\+?[1-9][0-9]{7,11}$/).required(),
  email: Joi.string().max(64).required(),
  address: Joi.string().max(64).required(),
});
const SubcategoryBody = Joi.object({
  name: Joi.string().max(64).required(),
});
export {
  checkId,
  UserLoginBody,
  UserRegisterBody,
  SubcategoryBody,
  ContactBody
};
