const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

//Add privacy to this router
//middleware function
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/signin')
  }
})

//GET ALL BLOGS
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogModel.find({})
    res.render('Blogs/Blogs', {blogs: blogs, loggedInUser: req.session.username})
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot get')
  }
})

router.get('/new', (req, res) => {
  res.render('Blogs/New');
});

router.get('/edit/:id', async (req, res) => {
  const blog = await BlogModel.findById(req.params.id)
  res.render('Blogs/Edit', {BlogModel: blog});
});

//GET BLOG BY ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id)
    res.render('Blogs/Show', {blog: blog})
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot get')
  }
})



//POST: CREATE A NEW BLOG
router.post('/', async (req, res) => {
  console.log(req.body);
  try{
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    //set the author to the loggedIn user
    req.body.author = req.session.username
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
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
    res.redirect('/blog')
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot put')
  }
  
})

//DELETE: Remove by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
    console.log(deletedBlog);
    res.redirect('/blog')
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot put')
  }
  
})

    

module.exports = router;