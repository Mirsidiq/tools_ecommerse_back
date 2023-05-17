import { customError } from "../../exception/customError.js";
import { SubcategoriesModel } from "../subcategories/model.js";
import { ProductsModel } from "./model.js";

const allProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {price,brand}=req.query
    if (id) {
      const product = await ProductsModel.findByPk(id);
      if (product) {
        res.status(200).json({
          message: "product",
          data: product,
        });
      } else {
        res.status(404).json({
          message: "product not found",
          data: {},
        });
      }
    }
    else if (brand && price) {
      const foundedProduct = ProductsModel.findAll({
        where: {
          brand,
          price,
        },
      });
      if (foundedProduct.length > 0) {
        res.status(200).json({
          message: "founded products",
          data: foundedProduct,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: [],
        });
      }
    }
    else if(brand){
      const foundedProduct=ProductsModel.findAll({where: {brand}})
      if(foundedProduct.length > 0){
        res.status(200).json({
          message:"founded products",
          data: foundedProduct
        })
      }
      else{
        res.status(404).json({
          message:"not found",
          data: []
        })
      }
    }
    else if(price){
      const foundedProduct=ProductsModel.findAll({where: {price}})
      if(foundedProduct.length > 0){
        res.status(200).json({
          message:"founded products",
          data: foundedProduct
        })
      }
      else{
        res.status(404).json({
          message:"not found",
          data: []
        })
      }
    } 
    else {
      const products = await ProductsModel.findAll();
      if (products.length > 0) {
        res.status(200).json({
          message: "products",
          data: products,
        });
      } else {
        res.status(404).json({
          message: "products not found",
          data: [],
        });
      }
    }
  } catch (error) {
    next(new customError(500, "internal error"));
  }
};

const productsAndSubcategory = async (req, res, next) => {
  try {
    const products = await ProductsModel.findAll({
      order: [["product_id", "ASC"]],
      include: [SubcategoriesModel],
    });
    if (products.length > 0) {
      res.status(200).json({
        message: "products",
        data: products,
      });
    } else {
      res.status(404).json({
        message: "products not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    next(new customError(500, "internal error"));
  }
};
const addProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      total_count,
      thumbnail,
      brand,
      ref_subcategory,
    } = req.body;
    const product = await ProductsModel.create(
      {
        name,
        description,
        price,
        total_count,
        thumbnail,
        brand,
        ref_subcategory,
      },
      { returning: true }
    );
    if (product) {
      res.status(201).json({
        message: "product created",
        data: product,
      });
    } else {
      res.status(400).json({
        message: "product not created",
        data: {},
      });
    }
  } catch (error) {
    next(new customError(500, "internal error"));
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      total_count,
      thumbnail,
      brand,
      ref_subcategory,
    } = req.body;
    const product = await ProductsModel.update(
      {
        name,
        description,
        price,
        total_count,
        thumbnail,
        brand,
        ref_subcategory,
      },
      {
        where: {
          product_id: id,
        },
      },
      { returning: true }
    );
    if (product[0] == 1) {
      res.status(201).json({
        message: "product updated",
        data: product,
      });
    } else {
      res.status(400).json({
        message: "product not updated",
        data: {},
      });
    }
  } catch (error) {
    next(new customError(500, "internal error"));
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductsModel.destroy({
      where: {
        product_id: id,
      },
    });
    if (product == 1) {
      res.status(201).json({
        message: "product deleted",
        data: true,
      });
    } else {
      res.status(400).json({
        message: "product not deleted",
        data: false,
      });
    }
  } catch (error) {
    next(new customError(500, "internal error"));
  }
};
export {
  productsAndSubcategory,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
