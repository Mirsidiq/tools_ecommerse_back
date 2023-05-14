import { customError } from "../../exception/customError.js";
import { OrderAddressModel } from "./model.js";

const orderAddress = async (req, res, next) => {
  try {
  const address=await OrderAddressModel.findAll()
  if(address.length>0){
    res.status(200).json({
      message: "success",
      data: address,
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
// const usersById=async(req,res,next)=>{
//   try {
//     const {id}=req.user;
//     const user=await OrderAddressModel.findByPk(id)
//     if(user){
//       res.status(200).json({
//         message: "success",
//         data: user,
//       });
//     }
//     else{
//       res.status(200).json({
//         message: "not found",
//         data: {},
//       });
//     }
//   } catch (error) {
//     next( new customError(500,"internal error"))
//   }
// }
const addOrderAddress = async (req, res, next) => {
  try {
    const {
      mail_index,
      region,
      district,
      street,
      home,
      phone,
      other_data,
      ref_user
    } = req.body;
    const newAddress = await OrderAddressModel.create({
      mail_index,
      region,
      district,
      street,
      home,
      phone,
      other_data,
      ref_user
    },{
      returning:true,
    });
    newAddress
      ? res.status(201).json({
          message: "created",
          data: newAddress,
        })
      : res.status(400).json({
          message: "not created",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const updateAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      mail_index,
      region,
      district,
      street,
      home,
      phone,
      other_data,
      ref_user
    } = req.body;
    const newAddress = await OrderAddressModel.update(
      {
        mail_index,
      region,
      district,
      street,
      home,
      phone,
      other_data,
      ref_user
      },
      {
        where: {
          user_id: id,
        },
        returning: true,
      }
    );
    newAddress[0] == 1
      ? res.status(201).json({
          message: "updated",
          data: newAddress[1],
        })
      : res.status(400).json({
          message: "not updated",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const deleteAddress = async (req, res, next) => {
  const { id } = req.params;
  try {
    const address = await OrderAddressModel.destroy({
      where: {
        address_id: id,
      },
    });
    address == 1
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

export { orderAddress, addOrderAddress, deleteAddress, updateAddress };
