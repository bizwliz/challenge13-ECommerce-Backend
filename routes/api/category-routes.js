const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//http://localhost:3001/api/categories
//GET - READ
router.get('/', async (req, res) => {
  try{
    const categoryData=await Category.findAll({
      include:[(Product)]
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//http://localhost:3001/api/categories/1
router.get('/:id', async (req, res) => {
  try{
    const id=req.params.id
    const categoryData=await Category.findByPk(id ,{
      include:[Product]
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//http://localhost:3001/api/categories
router.post('/', async (req, res) => {
  try{
    const categoryData=await Category.create(req.body)
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//http://localhost:3001/api/categories/1 (update)
router.put('/:id', async (req, res) => {
  try{
    const categoryData=await Category.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//http://localhost:3001/api/categories/1 (delete)
router.delete('/:id', async (req, res) => {
  try{
    const categoryData=await Category.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
