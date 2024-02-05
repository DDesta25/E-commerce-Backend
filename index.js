// models import

const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./productTag');


//  products belongs to category 

Product.belongsTo (Category, {
    foreignKey: 'category_id'
})
// categories have many products
Catagories.hasMany(Product, {
    foreignKey: 'category_id'
})

// products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
})


// Tags belongToMany Products (through ProductTag)


Tag.belongsToMany(Product, {
    through: ProductTag, 
    foreignKey: 'tag_id'
})

module.exports = {Product, Category, Tag, ProductTag};

