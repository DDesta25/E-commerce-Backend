const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{
      model: Product,

    }]
    
  }).then((categoriesData)=>{
    res.status(200).json(categoriesData)
  }).catch((err)=>{
   res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id,{
    include: [{
      model: Product,
    }]
  }).then(categoryData=>{
    res.status(200).json(categoryData)
  }).catch((err)=>{
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(categoryData=>{
    res.status(200).json(categoryData)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body)
  .then(categoryData=>{
    res.status(200).json(categoryData)
  }).catch((err)=> {
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete(req.body)
  .then(categoryData=>{
    res.status(200).json(categoryData)
  }).catch((err)=>{
    res.status(500).json(err)
  })
});

module.exports = router;