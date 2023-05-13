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
export {
  checkId,
  UserLoginBody,
  UserRegisterBody
};
