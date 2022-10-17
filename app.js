const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config()
const path = require('path')
const BlogModel = require('./models/BlogSchema')

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
  resave: false,
  saveUninitialized: true
}))

// App settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))


app.get('/', (req, res) => {
    res.render('pages/HomePage')
})

app.get('/blog/new', (req, res) => {
  console.log('REQ BODY', req.body);
  console.log('----------------------------------------------');
  res.render('blogs/New');
});

app.post('/blog', async (req, res) => {
  try{
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    console.log('redirect');
    const newBlog = await BlogModel.create(req.body)
    res.redirect('/blog')
  } catch (error) {
      console.log(error);
      res.status(403).send('Cannot create')
  }
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

    // connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      // confirm that we have a connection to MongoDB
      mongoose.connection.once("open", () => {
        console.log("connected to mongo");
      });
})

app.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findOneAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
    res.redirect('/blog')
  } catch (error) {
    console.log(error);
    res.status(403).send('Cannot put')
  }
  
})













