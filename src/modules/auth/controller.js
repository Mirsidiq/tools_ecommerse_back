import { sign, verify } from "../../utils/jwt.js";
import { UsersModel } from "../users/model.js";
import { customError } from "../../exception/customError.js";
const login = async (req, res, next) => {
 try{
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
    res.status(401).json({
      message: "unauthorized",
      token:"",
    });
    }
 }catch(err){
  next(new customError(500,"internal error"));
 }
};
const register = async (req, res, next) => {
  const { firstname,email, password,role } = req.body;
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
    const addUser=await UsersModel.create({firstname,email,password,role});
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
