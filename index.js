const express=require('express');
const methodOverriding=require("method-override");
const bodyParser=require("body-parser");
const productTableCreate=require("./db-config/create-product-table");
const categoryTableCreate=require("./db-config/create-category-table");
const productRoute=require("./routes/product-route");
const categoryRoute=require("./routes/category-route");
const path=require("path");



require("dotenv").config()


productTableCreate();
categoryTableCreate();

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverriding("_method"));
app.use("/",productRoute);
app.use("/category",categoryRoute);

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"./view"));


app.listen(process.env.DEFAULT_PORT || 8000,()=>{
    console.log(`server is running on port ${process.env.DEFAULT_PORT || 8000}`);
})