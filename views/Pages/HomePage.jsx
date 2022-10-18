const React = require("react");
const NavBar = require('../components/Navbar')

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />

        <section>
          <h1>Beauty Blog App</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            ea molestias, adipisci, nihil qui quisquam rem a assumenda tempora
            nemo eius delectus placeat! Cum saepe doloribus eius repellendus ea
            reprehenderit.
          </p>
        </section>

        <section className="margin-section">
          <h1>Bio</h1>
          <div classname="intro">
            <img src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="me" />
            <div>
              <h2>Developer</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus odit qui enim tempora rerum neque, repellendus
                debitis. Dicta modi expedita aliquam officiis neque laudantium
                asperiores at perferendis maiores, eos iure. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Necessitatibus odit qui
                enim tempora rerum neque, repellendus debitis. Dicta modi
                expedita aliquam officiis neque laudantium asperiores at
                perferendis maiores, eos iure. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Necessitatibus odit qui enim
                tempora rerum neque, repellendus debitis. Dicta modi expedita
                aliquam officiis neque laudantium asperiores at perferendis
                maiores, eos iure.
              </p>
            </div>
          </div>
        </section>

        <section className="margin-section">
          <div>
            <h1>Feature Blog</h1>
            <div>
              <h3>Intro to JS</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                nisi maiores nulla saepe, dolore ex atque assumenda obcaecati
                consequuntur quo possimus maxime exercitationem tempore error
                architecto. Dolorem consequuntur cumque unde! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa nisi maiores nulla
                saepe, dolore ex atque assumenda obcaecati consequuntur quo
                possimus maxime exercitationem tempore error architecto. Dolorem
                consequuntur cumque unde!
              </p>
              <span>Author: Bill</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


module.exports = HomePage;
