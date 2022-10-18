const React = require('react')
const NavBar = require('../components/Navbar')  

class Show extends React.Component {
    render(){
        const {blog} = this.props
        return(
            <div>
                <h1>MY Blog</h1>
                <head>
                    <link rel="stylesheet" href="/CSS/app.css" />
                </head>

                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
                <img src={blog.image} width="350px" />
                <h6>Liked by {blog.likes}</h6>
                <h5>Written by: {blog.author}</h5>
            </div>
        )
    }
}

module.exports = Show