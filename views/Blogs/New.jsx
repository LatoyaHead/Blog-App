const React = require('react')

class New extends React.Component {
  render(){
    return(
      <div>
        <head>
          <link rel="stylesheet" href="/css/app/css" />
        </head>

        <h1>Create New Blog</h1>

        <form action="/blog" method="POST">
         Title: 
         <br />
         <input type="text" name="title" placeholder='Title of Blog' />
          <br />
         Body: 
         <br />
         <textarea type="text" name="body" placeholder="Insert text here.." rows="10" cols="80" />
          <br />
          {/* Author: 
          <br />
          <input type="text" name="author" />
          <br /> */}
          Upload Image:
          <br />
          <input type="file" id="myFile" name="image" />
          <br />
          <input type="submit" value="Create New Blog Post!" />
          <br />
        </form>
      </div>
    )
  }
}

module.exports = New;