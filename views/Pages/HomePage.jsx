const React = require("react");
const NavBar = require('../components/Navbar')
const TextBackground = require('../components/TextBackground')
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />

        <section style={{paddingTop: 50}}>
          <TextBackground title='BEAUTY BLOG APP'>
            <p>
            Beauty is commonly described as a feature of objects that makes these objects pleasurable to perceive. Such objects include landscapes, sunsets, humans and works of art. Beauty, together with art and taste, is the main subject of aesthetics, one of the major branches of philosophy. As a positive aesthetic value, it is contrasted with ugliness as its negative counterpart. Along with truth and goodness it is one of the transcendentals, which are often considered the three fundamental concepts of human understanding.
            <br />
            <br />
            One difficulty in understanding beauty is because it has both objective and subjective aspects: it is seen as a property of things but also as depending on the emotional response of observers. Because of its subjective side, beauty is said to be "in the eye of the beholder". It has been argued that the ability on the side of the subject needed to perceive and judge beauty, sometimes referred to as the "sense of taste", can be trained and that the verdicts of experts coincide in the long run. This would suggest that the standards of validity of judgments of beauty are inter-subjective, i.e. dependent on a group of judges, rather than fully subjective or fully objective.
            <br />
            <br />
            Conceptions of beauty aim to capture what is essential to all beautiful things. Classical conceptions define beauty in terms of the relation between the beautiful object as a whole and its parts: the parts should stand in the right proportion to each other and thus compose an integrated harmonious whole. Hedonist conceptions see a necessary connection between pleasure and beauty, e.g. that for an object to be beautiful is for it to cause disinterested pleasure. Other conceptions include defining beautiful objects in terms of their value, of a loving attitude towards them or of their function. Source: Wikipedia
            </p>
          </TextBackground>
        </section>

      </div>
    );
  }
}


module.exports = HomePage;
