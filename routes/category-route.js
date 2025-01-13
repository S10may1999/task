const express=require('express');
const {categoryAdd,categoryList, categoryUpdate, categoryDelete, updatPageController, deletePageController}=require("../controller/category-controller")

const route=express.Router();

route.get("/",categoryList);
route.post("/category-add",categoryAdd);
route.post("/category-update",categoryUpdate);
route.post("/category-delete",categoryDelete);
route.get("/category-update",updatPageController);
route.get("/category-delete",deletePageController);


module.exports=route;