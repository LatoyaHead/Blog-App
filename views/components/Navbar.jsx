const React = require('react')

class Navbar extends React.Component {
  render() {
    return(
      <div>
      <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

      <nav className="container">
        <a href="/">Home</a>
        <a href="/blog">Blogs</a>
        <a href="/blog/new">Create New Blog</a>
        <a href="/user/signup">Sign In/SignUp</a>
        <a href="/user/signout">Sign Out</a>
      </nav>
      </div>
    )
  }
}


module.exports = Navbar



