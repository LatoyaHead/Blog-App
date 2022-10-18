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
                <form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                  <div style={{display: 'flex', gap: 10}}>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center'}}>
                      <input type='submit' value='Delete' style={{ width: '100%',fontSize: '1.5em', background: 'salmon', color: 'white', border:'1px solid salmon', fontFamily: "Comfortaa", textShadow: '1px 1px 1px black'}}/>
                    </div>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center'}}>
                      <a href={`/blog/${blog._id}/edit`} style={{ background: 'black', width: '100%', justifyContent: 'center', color: 'white'}}>Edit</a>
                    </div>
                  </div>  
                  </form>
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