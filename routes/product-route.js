const express=require("express");
const {productAdd, productList, productUpdatPageController, productUpdate, productDeletePageController, productDelete}=require("../controller/product-controller");

const route=express.Router();

route.get("/",productList);
route.post("/product-add",productAdd);
route.get("/product-update",productUpdatPageController);
route.post("/product-update",productUpdate);
route.get("/product-delete",productDeletePageController);
route.post("/product-delete",productDelete);
module.exports=route;