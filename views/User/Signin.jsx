const React = require("react");
const Navbar = require("../components/Navbar");

class Signin extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>SIGN IN</h1>

        <form action="/user/signin" method="post">
          <fieldset>
            <legend>Sign in to your account</legend>

            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required style={{width:"100%"}}/>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required style={{width:"100%"}} />
            <br />
            <div className="btn">
            <input type="submit" value="SIGN IN" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

module.exports = Signin;