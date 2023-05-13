import { customError } from "../../exception/customError.js";
import { UsersModel } from "./model.js";

const users = async (req, res, next) => {
  try {
  const user=await UsersModel.findAll()
  if(user.length>0){
    res.status(200).json({
      message: "success",
      data: user,
    });
  }
  else{
    res.status(200).json({
      message: "not found",
      data: [],
    });
  }
} catch (error) {
  next( new customError(500,"internal error"))
}
};
const usersById=async(req,res,next)=>{
  try {
    const {id}=req.user;
    const user=await UsersModel.findByPk(id)
    if(user){
      res.status(200).json({
        message: "success",
        data: user,
      });
    }
    else{
      res.status(200).json({
        message: "not found",
        data: {},
      });
    }
  } catch (error) {
    next( new customError(500,"internal error"))
  }
}
const addUser = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      contact,
      email,
      password,
      role
    } = req.body;
    const newUser = await UsersModel.create({
      firstname,
      lastname,
      contact,
      email,
      password,
      role
    },{
      returning:true,
    });
    newUser
      ? res.status(201).json({
          message: "created",
          data: newUser,
        })
      : res.status(400).json({
          message: "not created",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      firstname,
      lastname,
      contact,
      email,
      password,
    } = req.body;
    const newUser = await UsersModel.update(
      {
        firstname,
        lastname,
        contact,
        email,
        password,
      },
      {
        where: {
          user_id: id,
        },
        returning: true,
      }
    );
    newUser[0] == 1
      ? res.status(201).json({
          message: "updated",
          data: newUser[1],
        })
      : res.status(400).json({
          message: "not updated",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UsersModel.destroy({
      where: {
        user_id: id,
      },
    });
    user == 1
      ? res.status(201).json({
          message: "deleted",
        })
      : res.status(400).json({
          message: "not deleted",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};

export { users, addUser,usersById, updateUser, deleteUser };
