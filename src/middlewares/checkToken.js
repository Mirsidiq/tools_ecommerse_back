import { customError } from "../exception/customError.js";
import { UsersModel } from "../modules/users/model.js";
import { verify } from "../utils/jwt.js";

const checkAdminToken = async (req, _, next) => {
  const token = req.headers?.token;
  const decode = await verify(token).catch((err) =>
    next(new customError(400, err.message))
  );
  if(decode?.id){
    const user = await UsersModel.findByPk(decode.id);
    if(user.role === "admin"){
      req.admin=decode
      next();
    }
    else{
      next(new customError(401, "you have no permissions"));
    }
  }
};
const checkUserToken = async (req, _, next) => {
  const token = req.headers?.token;
  const decode = await verify(token).catch((err) =>
    next(new customError(400, err.message))
  );
  if(decode?.id){
    const user = await UsersModel.findByPk(decode.id);
    if(user.role === "user"){
      req.user=decode
      next();
    }
    else{
      next(new customError(401, "you have no permissions"));
    }
  }
};

export { checkAdminToken,checkUserToken };
