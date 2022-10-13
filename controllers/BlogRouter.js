const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

//GET ALL BLOGS
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogModel.find({})
    res.render('Blogs/Blogs', {blogs: blogs})
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot get')
  }
})


//GET BLOG BY ID
router.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id)
    res.render('Blogs/Show', {blog: blog})
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot get')
  }
})

router.get('/blog/new', (req, res) => {
  console.log('REQ BODY', req.body);
  console.log('----------------------------------------------');
  res.render('/Blogs/New');
});


//CREATE A NEW BLOG
router.post('/blog', async (req, res) => {
  try{
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    const newBlog = await BlogModel.create(req.body)
    res.redirect('/blog')
  } catch (error) {
      console.log(error);
      res.status(403).send('Cannot create')
  }
})


//PUT: UPDATE BY ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findOneAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
    res.redirect('/blog')
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot put')
  }
  
})

//DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findOneAndRemove(req.params.id)
    console.log(deletedBlog);
    res.send('Blog Deleted')
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot put')
  }
  
})

    

module.exports = router;