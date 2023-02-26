const router = require('express').Router();
const { Category, Product } = require('../../models');
const sequelize = require('../../config/connection');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {

  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll(
      {include: [{ model: Product }],} 
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
  const getIdTable = await Category.findOne({ where: { id: `${req.params.id}` } });
  res.status(200).json(getIdTable);} catch (err) { res.status(500).json(err)}
});

router.post('/', async (req, res) => {
  // create a new category
  try{
  const getIdTable = await Category.create(req.body);
  const categoryData = await Category.findAll()
  res.status(200).send(categoryData); } catch (err) { res.status(500).json(err)}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const getIdTable = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: { id: req.params.id },
      })

    const categoryData = await Category.findAll()
    res.status(200).send(categoryData); } 
    
    catch (err) { res.status(500).json(err)}
  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{

    const categoryData = await Category.destroy({
      where: { id: req.params.id },
    })

    // const test1 = await categoryData.destroy();
    const allData = await Category.findAll()
    
    res.send(allData); 
  } 
    
    catch (err) { res.status(500).json(err)}

});

module.exports = router;
