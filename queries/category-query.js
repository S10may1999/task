const addCategory="insert into category values(?,?)";
const deleteCategory="delete from category where category_id=?";
const updateCategoryName="update category set category_name = ? where category_id = ?";
const getCategory="select * from category";
const categoryGet="select * from category where category_id=?";

module.exports={addCategory,deleteCategory,updateCategoryName,getCategory,categoryGet};