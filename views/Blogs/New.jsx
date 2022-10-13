const React = require('react')

class New extends React.Component {
  render(){
    return(
      <div>
        <h1>Add New Blog</h1>

        <form action="/blog" method="POST">
         Name: <textarea type="textarea" name="body" rows="25" cols="25" required maxLength={333}/>
          <br />
         Author: <input type="text" name="author" />
          <br />
          Title: <input type="text" name="title" />
          <br />
          <input type="submit" value="Create new Blog" />
        </form>
      </div>
    )
  }
}

module.exports = New;