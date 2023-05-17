import { customError } from "../../exception/customError.js";
import { OrderAddressModel } from "../orderAddress/model.js";
import { UsersModel } from "../users/model.js";
import { ProductsModel } from "../products/model.js";
import { OrdersModel } from "./model.js";

const allOrders = async (req, res, next) => {
  try {
    const{id}=req.params
    if(id){
      const order = await OrdersModel.findByPk(id,{
        include: [UsersModel, OrderAddressModel],
      });
      const products = await ProductsModel.findAll();
    const groupedProducts = {};
    if (order && products.length > 0 ) {
      const data = Object.assign(order, groupedProducts);
      for (let item of data) {
        for (let product_item of products) {
          for (let j of item.product) {
            if (j[0] == product_item.product_id) {
              j[0] = product_item;
            }
          }
        }
      }
      res.status(200).json({
        message: "orders",
        data,
      });
    }
    else{
      res.status(404).json({
        message: "order not found",
        data:{},
      });
    }
    }
    else{
      const orders = await OrdersModel.findAll({
        include: [UsersModel, OrderAddressModel],
      });
      const products = await ProductsModel.findAll();
      const groupedProducts = {};
      if (orders.length > 0 && products.length > 0 ) {
        const data = Object.assign(orders, groupedProducts);
        for (let item of data) {
          for (let product_item of products) {
            for (let j of item.product) {
              if (j[0] == product_item.product_id) {
                j[0] = product_item;
              }
            }
          }
        }
        res.status(200).json({
          message: "orders",
          data,
        });
      } else {
        res.status(404).json({
          message: "orders not found",
          data: [],
        });
      }
    }
    
  } catch (error) {
    console.log(error);
    next(new customError(500, "internal error"));
  }
};

const addOrder = async (req, res, next) => {
  try {
    const { total, count, product, ref_user, ref_address, isActive } = req.body;
    const order = await OrdersModel.create(
      { total, count, product, ref_user, ref_address, isActive },
      { returning: true }
    );
    if (order) {
      res.status(201).json({
        message: "order created",
        data: order,
      });
    } else {
      res.status(400).json({
        message: "order not created",
        data: {},
      });
    }
  } catch (error) {
    next(new customError(500, "internal error"));
  }
};
const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { total, count, product, ref_user, isActive } = req.body;
    const order = await OrdersModel.update(
      { total, count, product, ref_user, isActive },
      {
        where: {
          order_id: id,
        },
      },
      { returning: true }
    );
    if (order[0] == 1) {
      res.status(201).json({
        message: "order updated",
        data: order,
      });
    } else {
      res.status(400).json({
        message: "order not updated",
        data: {},
      });
    }
  } catch (error) {
    next(new customError(500, "internal error"));
  }
};
const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await OrdersModel.destroy({
      where: {
        order_id: id,
      },
    });
    if (order == 1) {
      res.status(201).json({
        message: "order deleted",
        data: true,
      });
    } else {
      res.status(400).json({
        message: "order not deleted",
        data: false,
      });
    }
  } catch (error) {
    next(new customError(500, "internal error"));
  }
};
export { allOrders, addOrder, updateOrder, deleteOrder };
