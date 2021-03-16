// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
foreignKey: 'category_id',
through: {
  model: Category,
  unique: false
  },
  as: 'product'
})

// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: 'product_id',
through: {
  model: Product,
  unique: false,
  },
  as: 'category'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  foreignKey: 'productTag_id',
  through: {
    model: ProductTag,
    unique: true,
  },
  as: 'product_tag'

})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'productTag_id',
through: {
  model: Tag,
  unique: true,
},
as: 'tag_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


// Traveller.belongsToMany(Location, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'planned_trips'
// });

// Location.belongsToMany(Traveller, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'location_travellers'
// });