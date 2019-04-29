/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {logout} from '../store/reducers/users'

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
            {!this.props.loggedIn ? (
              <div className="navbar-end">
                <Link className="navbar-item" to="/login">
                  Log In
                </Link>

                <Link className="navbar-item" to="/register">
                  Register
                </Link>
              </div>
            ) : (
              <div className="navbar-end">
                <Link className="navbar-item" to="/" onClick={this.props.logout}>
                  Log Out
                </Link>
              </div>
            )}
          </div>
        </div>
        <style jsx="">{`
          .margin-left {
            margin-left: 0.5rem;
          }
          `}</style>
      </nav>
    )
  }
}

const mapState = state => ({
  loggedIn: !!state.users.current.id
})

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Navbar)