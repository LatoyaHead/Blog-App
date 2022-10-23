const React = require('react')
const NavBar = require('../components/Navbar')
const TextBackground = require('../components/TextBackground')
class New extends React.Component {
  render(){
    return(
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />
       
       <div className="center">
        <TextBackground style={{width:300}} title="CREATE NEW BLOG POST">
        <form action="/blog" method="POST" >
         Title: 
         <br />
         <input type="text" name="title" placeholder='Title of Blog' style={{width:'100%', boxSizing: 'border-box' }} required />
          <br />
         Body: 
         <br />
         <textarea type="text" name="body" placeholder="Insert text here.." rows="10" style={{width:'100%', boxSizing: 'border-box'}} required />
          <br />
          Upload Image:
          <br />
          <input type="url" id="myFile" name="image" placeholder='Insert Image URL' style={{width:'100%', boxSizing: 'border-box'}}/>
          <br />
          <input type="submit" value="Create New Blog Post!" />
          <br />
        </form>
        </TextBackground>
        </div>
      </div>
     
    )
  }
}

module.exports = New;