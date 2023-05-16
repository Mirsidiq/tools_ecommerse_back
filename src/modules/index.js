import auth from "./auth/router.js";
import users from "./users/router.js";
import categories from "./categories/router.js";
import subcategories from "./subcategories/router.js";
import contact from "./contacts/router.js";
import brands from "./brands/router.js";
import products from "./products/router.js";
import orderAddress from "./orderAddress/router.js"
import orders from "./orders/router.js"
export default [
  auth,
  users,
  categories,
  subcategories,
  contact,
  brands,
  products,
  orderAddress,
  orders
];
