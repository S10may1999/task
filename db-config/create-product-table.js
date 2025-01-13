const db=require("../db-config/sql-config");

const createProductTable=async()=>{
    const query ='create table if not exists product(product_id varchar(120) primary key,product_name varchar(20), category_id varchar(120), foreign key(category_id) references category(category_id) on update CASCADE);';
    try {
        await db.query(query);
        console.log("product table ready to use !!");
    } catch (error) {
        console.log(error.toString());
    }
}
module.exports=createProductTable;