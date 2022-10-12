const express = require('express')
const UserModel = require('../models/UserSchema')

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

router.post("/", async (req, res) => {
  try {
    // check if user exist
    const userAlreadyExist = await UserModel.find({ email: req.body.email });
    // const userNameExist = await UserModel.find({username: req.body.username})

    // if there is a object inside of the array
    if (userAlreadyExist[0]) {
      return res.send("User Already exist!");
    }
    // if (userNameExist[0]) {
    //   return res.send('User already exist!')
    // }

    // Create a new user
    const user = await UserModel.create(req.body);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot POST");
  }
});

//Find user by id
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
router.put('/', async(req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : 'after'})
    res.send(updatedUser)
  }catch (error) {
    console.log(error);
    res.status(403).send('Cannot PUT user by id')
  }
})


//DELETE USER
router.delete('/', async(req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
    res.send(deletedUser)
  }catch (error) {
    console.log(error);
    res.status(403).send('Cannot DELETE user by id')
  }
})

module.exports = router





