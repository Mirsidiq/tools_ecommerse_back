import { sign, verify } from "../../utils/jwt.js";
import { UsersModel } from "../users/model.js";
import { customError } from "../../exception/customError.js";
const login = async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await UsersModel.findOne({
    where: {
      email,
      password,
    },
  });
  if (findUser) {
    const token = sign(findUser.user_id, process.env.JWT_SECRET);
    res.status(200).json({
      message: "success",
      token,
    });
  }
  else {
      next(new customError("Invalid Credentials", 401));
    }
};
export {  login };
