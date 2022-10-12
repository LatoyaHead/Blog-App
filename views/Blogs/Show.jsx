const React = require('react')

class Show extends React.Component {
  render () {
    //receive data from blogs.js
    const blogs = this.props.blogs
    const presentDate = this.props.date

    const sayHello = () => console.log('hello')
    
        return(
          <div style={{backgroundColor:'royalblue' }}>
          <h1> Show Page!!!! </h1>

          <h3>The blog name is {blogs.name} and the color is {blogs.color}</h3>

          <h4>{blogs.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this'}</h4>
          
          <h6>Year:{presentDate} {sayHello()}</h6>
          </div>
          );
         }
       }
      module.exports  = Show;