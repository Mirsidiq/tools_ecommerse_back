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
  role:Joi.string().valid("admin","user")
});
const ContactBody = Joi.object({
  phone: Joi.string().regex(/^\+?[1-9][0-9]{7,11}$/).required(),
  email: Joi.string().max(64).required(),
  address: Joi.string().max(64).required(),
});
const SubcategoryBody = Joi.object({
  name: Joi.string().max(64).required(),
  ref_category:Joi.number().integer().required(),
});
const ProductBody = Joi.object({
  name: Joi.string().max(64).required(),
  description: Joi.string(),
  price: Joi.number().required(),
  total_count: Joi.number().required(),
  thumbnail: Joi.string(),
  brand: Joi.string().valid("rasulov","stroyka","destroy","rollers").required(),
  ref_subcategory: Joi.number().required(),
});

const OrderAddressBody = Joi.object({
  mail_index: Joi.number(),
  region: Joi.string().valid("toshkent","samarqand","buxoro","xorazm","navoiy","qashqadaryo","jizzax","surxandaryo","navoiy","namangan","toshkent viloyati","qoraqalpog'iston"),
  district: Joi.string().max(64).required(),
  street: Joi.string().max(64).required(),
  home: Joi.number().required(),
  phone: Joi.string().regex(/^\+?[1-9][0-9]{7,11}$/).required(),
  ref_user: Joi.number().required(),
});
export {
  checkId,
  UserLoginBody,
  UserRegisterBody,
  SubcategoryBody,
  ContactBody,
  ProductBody,
  OrderAddressBody
};
