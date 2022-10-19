const React = require("react");
const Navbar = require("../components/Navbar");
const TextBackground = require('../components/TextBackground')
class Signup extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
    
        <div className="center">
        <TextBackground style={{width:300}} title="CREATE A NEW ACCOUNT">
        <form action="/user/signup" method="post">
          <fieldset>
           <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" required style={{width:"100%"}} />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required style={{width:"100%"}} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required style={{width:"100%"}} />
            <br />
            <div className="btn">
            <input type="submit" value="Signup" />
            </div>
          </fieldset>
        </form>
        

        <div className="signin">
          <p>
            Already have an Account?<a className="signin1" href="/user/signin">SIGN IN</a>{" "}
          </p>
        </div>
        </TextBackground>
        </div>
      </div>
    );
  }
}

module.exports = Signup;