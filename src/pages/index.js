import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import settingsImg from '../assets/images/settings.png'
import AppStore from '../components/AppStore'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Pandoras: Devil's Drinking Game" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>
                    Choose how DIRTY you want to play, and adjust to Guys, Girls
                    or Mixed mode!
                  </h2>
                </header>
                <p>
                  Break the ice, get to know each other, laugh, cry and take the
                  party to a whole new level with this party booster of a
                  drinking game!
                </p>
              </div>
              <span className="image">
                <img src={settingsImg} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <ul className="features">
              <li>
                <h3>SIMPLE</h3>
                <p>
                  Press play, and you’re flying already! Choose a moderator who
                  reads the cards, and draw a new card for each player.
                </p>
              </li>
              <li>
                <h3>QUALITY</h3>
                <p>
                  Pandoras contains over 600 cards with truth and dares of a
                  whole new level. Each card is carefully selected and designed
                  for the perfect party drinking game.
                </p>
              </li>
              <li>
                <h3>CUSTOMIZE</h3>
                <p>
                  Adjust how dirty you want it, and choose whether your party
                  consists of girls, guys or both. Fantastic, huh? Want to get
                  really drunk? Set the game to drinking game mode, to make each
                  card have drinking consequences.
                </p>
              </li>
              <li>
                <h3>TIPS AND RULES</h3>
                <p>
                  Connect TV for full attention to the game.
                  <br />
                  Refuse to follow the card’s command? Insert penalties like
                  «Remove a clothing item» or «Finish your Drink»
                </p>
              </li>
              <li>
                <h3>FULL ACCESS</h3>
                <p>
                  To have full access to all 600 cards, Devilish Mode and
                  Drinking Game Mode, unlock full version of one of the most
                  popular drinking games out there for only 1,99$.
                </p>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <p>
                Play it as a beer game, or as a basic Truth or Dare / Would You
                Rather / Never Have I Ever. Choose yourselves if you want to
                play dirty, kinky or sweet and harmless, and if you want it for
                the pre party, after party or the actual event. Especially if
                you like dirty games, you're gonna love this one.
              </p>
              <p>Enjoy our beloved drinking game, and have a blast!</p>
              <p>Cheers!</p>
            </header>
            <footer className="major">
              <AppStore />
            </footer>
            <a href="https://www.idehub.com/privacy.html">Privacy Policy</a>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
