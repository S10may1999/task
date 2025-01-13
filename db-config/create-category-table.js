const db=require("../db-config/sql-config");

const createCategoryTable=async()=>{
    const query ='create table if not exists category(category_id varchar(120) primary key,category_name varchar(20))';
    try {
        await db.query(query);
        console.log("category table ready to use !!");
    } catch (error) {
        console.log(error.toString());
    }
}
module.exports=createCategoryTable;