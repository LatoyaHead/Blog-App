const React = require("react");
const Navbar = require("../components/Navbar");
const TextBackground = require('../components/TextBackground')
class Signin extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

      <div className="center">
        <TextBackground style={{width:300}} title="SIGN INTO ACCOUNT">
        <form action="/user/signin" method="post">
          <fieldset>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required style={{width:"100%", boxSizing: 'border-box'}}/>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required style={{width:"100%", boxSizing: 'border-box'}} />
            <br />
            <div className="btn">
            <input type="submit" value="SIGN IN" />
            </div>
          </fieldset>
        </form>
        </TextBackground>
      </div>
      </div>
    );
  }
}

module.exports = Signin;