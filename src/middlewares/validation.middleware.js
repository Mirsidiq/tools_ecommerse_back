import { customError } from "../exception/customError.js";
import {
  checkId,
  UserLoginBody
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
export {
  checkParamsId,
  UserLoginBodyMiddleware
}
