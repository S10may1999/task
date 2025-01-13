const db=require("../db-config/sql-config");
const {addCategory,deleteCategory,updateCategoryName,getCategory, categoryGet}=require("../queries/category-query");

const categoryList=async(req,res)=>{
    const categories=await db.query(getCategory);
    return res.render("category/index",{
        categories:categories[0],
        message:req.query.message
    });
}

const categoryAdd=async(req,res)=>{
    const {categoryName}=req.body;
    const category_id=Date.now().toString();
    await db.query(addCategory,[category_id,categoryName]).then((result) => {
        if(result){
            res.redirect("/category?message=Category%20Added%20successfully!!");
        }
    }).catch((err) => {
        res.redirect("/category?message=Something%20went%20wrong!!");
    });

}

const updatPageController=async(req,res)=>{
    const {categoryId}=req.query;
    const categoryList=await db.query(categoryGet,[categoryId]);
    const category=categoryList[0]; 

    return res.render("category/update", {category:category})
}

const categoryUpdate=async(req,res)=>{
    const {categoryId,categoryName}=req.body;
    
    console.log(categoryId,categoryName);
    await db.query(updateCategoryName,[categoryName,categoryId]).then((result) => {
        console.log(result);
         return res.redirect("/category");
    }).catch((err) => {
        console.log(err);
        return res.redirect("/category");
    });
    
}

const deletePageController=async(req,res)=>{
    const {categoryId}=req.query;
    const categoryList=await db.query(categoryGet,[categoryId]);
    const category=categoryList[0][0]; 

    return res.render("category/delete", {category:category})
}
const categoryDelete=async(req,res)=>{
    const {categoryId}=req.body;

    await db.query(deleteCategory,[categoryId]).then((result) => {
        res.redirect("/category");
    }).catch((err) => {
        console.log(err);
        res.redirect("/category");       
    });
}

module.exports={categoryList,categoryAdd,categoryUpdate,categoryDelete,updatPageController,deletePageController};