const productAddQuery='insert into product(product_id,product_name,category_id) values(?,?,?)';
const productNameUpdateQuery='update product set product_name=? where product_id = ?';
const productDeleteQuery='delete from product where product_id = ?';
const productCategoryUpdate='update product set category_id = ? where product_id =? or category_id = ?';
const productListQuery = "SELECT product.product_id, product.product_name, category.category_name, category.category_id FROM product AS product INNER JOIN category AS category ON category.category_id = product.category_id LIMIT ? OFFSET ?"
const productGet="select * from product where product_id = ?"

module.exports={productAddQuery,productCategoryUpdate,productDeleteQuery,productNameUpdateQuery,productListQuery,productGet};