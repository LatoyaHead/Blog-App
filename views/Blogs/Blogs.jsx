const React = require("react");
const NavBar = require('../components/Navbar')

class Blogs extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props;
    console.log('image', blogs);
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/main.css" />
        </head>

        <NavBar />
        
        <h1>Blogs</h1>

        <section style={styles.container}>
          {blogs.map((blog) => (
            <div style={styles.wrapper} className="card">
              <a href={`/blogs/${blog._id}`}>
                {" "}
                <h2>{blog.title}</h2>
              </a>
              <div>
                <p>{blog.body}</p>
                <img src={blog.image} alt="" />
              </div>
              <h6>Written by: {blog.author}</h6>
              <br />
              {blog.author === loggedInUser ? (
              <form style={styles.delete} action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                  <input type='submit' value='Delete' />
                </form>
                ) : null}
                {blog.author === loggedInUser ? (
                  <a style={styles.edit} href={`/blog/${blog._id}/edit`}><button>Edit</button></a>
                ) : null}
                
            </div>
          ))}
        </section>

      </div>
    );
  }
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  wrapper: {
    padding: "20px",
    margin: "10px",
    width: "300px",
    border: "solid",
    borderWidth: "2px",
    borderColor: "black",
  },
};
module.exports = Blogs;