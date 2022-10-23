const React = require('react')
const NavBar = require('../components/Navbar')   
const TextBackground = require('../components/TextBackground')

class Edit extends React.Component{
    render(){
        const {BlogModel} = this.props
        return(
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css"/>    
                </head>
                
                <NavBar/> 
                <div className="center">
                <TextBackground style={{width:300}} title="EDIT BLOG POST">
                <form action={`/blog/${BlogModel._id}?_method=PUT`} method='POST'>
                     Title: <input type='text' name='title' defaultValue={BlogModel.title} style={{width:'100%'}} required /> 
                     <br />        
                     Body: <textarea name="body" defaultValue={BlogModel.body}  rows="10" style={{width:'100%'}} required />
                     <br />
                     Upload Image:
                     <br />
                     <input type="url" id="myFile" name="image" defaultValue={BlogModel.image} placeholder='Insert Image URL'style={{width:'100%'}} />
                     <br />
                     <input type='submit' value='Edit Post'/>
                </form>
                </TextBackground>
                </div>
            </div>
        )
    }
}


module.exports = Edit