const express = require('express')
const UserModel = require('../models/UserSchema')
const bcrypt = require('bcryptjs')

const router = express.Router()

//GET ALL BLOGS
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.send(users)
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot get')
  }
})

//render a sign up form
router.get('/signup', (req, res) => {
  res.render('user/signup')
})

//POST: Create a new user
router.post("/signup", async (req, res) => {
  try {
    // check if user exist
    const userAlreadyExist = await UserModel.find({ email: req.body.email });
    const userNameExist = await UserModel.find({username: req.body.username})

    // if there is a object inside of the array
    if (userAlreadyExist[0]) {
      return res.send("User Already exist!");
    }
    if (userNameExist[0]) {
      return res.send('User already exist!')
    }

    // Create a new user
    const SALT = await bcrypt.genSalt(10) //how secure your hash will be
    //reassign the password to the hashed password
    req.body.password = await bcrypt.hash(req.body.password, SALT)
    const user = await UserModel.create(req.body);
    res.redirect('/user/signin');
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot POST");
  }
});

//RENDER SIGN-IN FORM
router.get('/signin', async (req, res) => {
  res.render('user/signin')
})

//Sign-in a user
router.post('/signin', async (req, res) => {
  try {
    //find user by email in db
    const user = await UserModel.findOne({email: req.body.email})
    if (!user) return res.send('Please check your email and password!')
    //check if passwords match
    const decodedPassword = await bcrypt.compare(req.body.password, user.password)
    if(!decodedPassword) return res.send('Please check your email and password!')
    //set the user session
    //create a new username in the session obj using the user info from db
    req.session.username = user.username
    req.session.loggedIn = true
    //redirect to /blog
    res.redirect('/blog')
  } catch (error) {

  }
})

//Sign-out User and destroy session
router.get('/signout', (req, res) => {
  try {
    req.session.destroy()
    res.redirect('/')
  }catch (error) {
    console.log(error);
  }
  
})

//GET: user by id
router.get('/:id', async(req, res) => {
  try {
    const user = await UserModel.findById(req.params.id)
    res.send(user)
  }catch (error) {
    console.log(error);
    res.status(403).send('Cannot GET user by id')
  }
  
})


//PUT update a user
router.put('/:id', async(req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : 'after'})
    res.send(updatedUser)
  }catch (error) {
    console.log(error);
    res.status(403).send('Cannot PUT user by id')
  }
})

//DELETE USER
router.delete('/:id', async(req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
    res.send(deletedUser)
  }catch (error) {
    console.log(error);
    res.status(403).send('Cannot DELETE user by id')
  }
})


module.exports = router





