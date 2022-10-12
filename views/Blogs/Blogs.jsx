const React = require("react");


class Blogs extends React.Component {
  render() {
    const {blogs} = this.props
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>New Blog</h1>
        <a style={styles.createFruitBtn} href="/fruits/new">Create New Blog</a>

        <ul style={styles.ulContainer}>
          {blogs.map((blog, idx) => (
            <div style={styles.item}>
              <a href={`/blogs/${blog._id}`}>{blog.title}</a> 
              <br />
              <p>
                {blog.body}
              </p>
              <h6>
              {blog.author}
              </h6>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Blogs;

const styles = {
  container: {
    backgroundColor: 'royalblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: '32px',
    color: '#fff',
  },
  ulContainer: {
    backgroundColor: '#fff',
    padding: '15px'
  },
  createFruitBtn: {
    backgroundColor: '#fff',
    padding: '5px',
    borderRadius: '5px',
    textDecoration: 'none'
  },
  item: {
    padding: '10px',
    listStyleType: 'none'
  },
}













