const React = require('react')
const NavBar = require('../components/Navbar')
class New extends React.Component {
  render(){
    return(
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />
       
        <h1>Create New Blog</h1>

        <form action="/blog" method="POST" >
         Title: 
         <br />
         <input type="text" name="title" placeholder='Title of Blog' />
          <br />
         Body: 
         <br />
         <textarea type="text" name="body" placeholder="Insert text here.." rows="10" cols="80" />
          <br />
          Upload Image:
          <br />
          <input type="url" id="myFile" name="image" placeholder='Insert Image URL'/>
          <br />
          <input type="submit" value="Create New Blog Post!" />
          <br />
        </form>
      </div>
    )
  }
}

module.exports = New;