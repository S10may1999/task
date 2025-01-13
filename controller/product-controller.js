const db=require("../db-config/sql-config");
const {productAddQuery,productListQuery, productGet,productNameUpdateQuery,productDeleteQuery}=require("../queries/product-query")
const {getCategory}=require("../queries/category-query");

const productList=async(req,res)=>{
    try {
        
        const limit = parseInt(req.query.limit) || 10; 
        const page = parseInt(req.query.page) || 1;   
    
        const offset = (page - 1) * limit; 
    
        
        const categoryList = await db.query(getCategory);
        const category = categoryList[0];
    
        
        const products = await db.query(productListQuery, [limit, offset]);
        const productList = products[0];
    
        
        const totalProductsQuery = "SELECT COUNT(*) as total FROM product";
        const totalProductsResult = await db.query(totalProductsQuery);
        const totalProducts = totalProductsResult[0][0].total;
        const totalPages = Math.ceil(totalProducts / limit);  
    
       
        return res.render("product/index", {
            productList: productList,
            categories: category,
            currentPage: page,
            totalPages: totalPages
        });
    
    } catch (error) {
        return res.render("product/index", {
            message: error.toString()
        });
    }
    
}

const productAdd=async(req,res)=>{
    const {productName,categoryName}=req.body;
    console.log("this is working !!");
    console.log(productName,categoryName);
    const product_id=Date.now().toString();
    console.log( "product id is :",product_id);
    await db.query(productAddQuery,[product_id,productName,categoryName]).then((result) => {
        return res.redirect("/");
    }).catch((err) => {
        console.log(err);
        return res.redirect("/");
    });

}
const productUpdatPageController=async(req,res)=>{
    const {productId}=req.query;
    const productList=await db.query(productGet,[productId]);
    const product=productList[0]; 
    return res.render("product/update", {product:product})
}

const productUpdate=async(req,res)=>{
    const {productId,productName}=req.body;
    
    console.log(productId,productName);
    await db.query(productNameUpdateQuery,[productName,productId]).then((result) => {
        console.log(result);
         return res.redirect("/");
    }).catch((err) => {
        console.log(err);
        return res.redirect("/");
    });
    
}

const productDeletePageController=async(req,res)=>{
    const {productId}=req.query;
    const productList=await db.query(productGet,[productId]);
    const product=productList[0][0]; 

    return res.render("product/delete", {product:product})
}
const productDelete=async(req,res)=>{
    const {productId}=req.body;
    
    await db.query(productDeleteQuery,[productId]).then((result) => {
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
        res.redirect("/");       
    });
}


module.exports={productAdd,productList,productUpdatPageController,productUpdate,productDeletePageController,productDelete}