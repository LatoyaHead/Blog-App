const React = require('react')
const NavBar = require('../components/Navbar')   


class Edit extends React.Component{
    render(){
        const {BlogModel} = this.props
        return(
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css"/>    
                </head>
                
                <NavBar/> 
                <h1>Edit</h1>
                <form action={`/blog/${BlogModel._id}?_method=PUT`} method='POST'>
                     Title: <input type='text' name='title' defaultValue={BlogModel.title}/> 
                     <br />        
                     Body: <textarea name="body" defaultValue={BlogModel.body}  rows="20" cols="150"/>
                     <br />
                     Upload Image:
                     <br />
                     <input type="url" id="myFile" name="image" defaultValue={BlogModel.image} placeholder='Insert Image URL'/>
                     <br />
                     <input type='submit' value='Edit Post'/>
                </form>
            </div>
        )
    }
}


module.exports = Edit