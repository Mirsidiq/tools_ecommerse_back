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
    console.log("mirsidiq");
      next(new customError(401, "unauthorized"));
    }
};
const register = async (req, res, next) => {
  const { firstname,email, password } = req.body;
  const findUser = await UsersModel.findOne({
    where: {
      firstname,
      email,
      password,
    },
  });
  if (findUser) {
    res.status(409).json({
      message: "user is exist",
      token:"",
    });
  }
  else {
    const addUser=await UsersModel.create({firstname,email,password});
    if(addUser){
      res.status(201).json({
        message: "user registered",
        token:sign(addUser.user_id, process.env.JWT_SECRET),
      });
    }
    else{
      next(new customError(401,"user not registered"));
    }
    }
};
export {  login ,register};
