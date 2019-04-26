/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  state = {
    expandMenu: false
  }

  handleClick = () => {
    this.setState({expandMenu: !this.state.expandMenu})
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="/android-chrome-192x192.png" alt="Pair Logo"></img>
              <strong className="is-size-4-desktop margin-left">PAIR</strong>
            </Link>

            <Link className="navbar-item" to="/programs">
              Programs
            </Link>

            <Link className="navbar-item" to="/users">
              Users
            </Link>

            <a className={`navbar-burger burger ${this.state.expandMenu ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" onClick={this.handleClick}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>
          <div className={`navbar-menu ${this.state.expandMenu ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/login">
                Log In
              </Link>

              <Link className="navbar-item" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
        <style jsx="true">{`
          .margin-left {
            margin-left: 0.50rem;
          }
          `}</style>
      </nav>
    )
  }
}

export default Navbar