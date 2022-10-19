const React = require("react");
const NavBar = require('../components/Navbar')

class Blogs extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props;
    console.log('image', blogs);
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />
        
        <h1>Blogs</h1>

        <section className="blog-section">
          {blogs.map((blog) => (
            <div className="card">
              <div className="img">
                {
                  blog.image ?
                  <img src={blog.image} /> :
                  <div style={{ height: 140, width: '100%', background: 'black', display: 'flex',
                  justifyContent: 'center', alignItems: 'center'}}>
                    <h1 style={{ margin: 0, color: 'white'}}>No Image Supplied</h1>
                  </div>
                }
              </div>
              <div style={{ padding: 10 }}>
                <a href={`/blog/${blog._id}`} style={{ fontSize: 18, justifyContent:'center', padding: 0}}>
                  {" "}
                  <h2>{blog.title}</h2>
                </a>
                <div>
                    <p>{blog.body}</p>
                </div>
                <h6>Written by: {blog.author}</h6>
                {blog.author === loggedInUser ? (
                <div style={{display: 'flex', gap: 10, width: '100%'}}>
                  <form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                    <div className="parent-input-div">
                      <input type='submit' value='Delete' className="delete-button"/>
                    </div>
                  </form>
                  <div className="parent-input-div percent-100">
                    <a href={`/blog/edit/${blog._id}`} className="edit-button">Edit</a>
                  </div>
                </div> 
                  ) : null}
                </div>
            </div>
          ))}
        </section>

      </div>
    );
  }
}


module.exports = Blogs;