import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

import Login from './components/Login'
import NotFound from './components/NotFound'
import Register from './components/Register'
import AllUsers from './components/AllUsers'
import SingleUser from './components/SingleUser'
import Home from './components/Home'

import {getMe} from './store/reducers/users'

class App extends Component {
  componentDidMount() {
    this.props.getMe()
  }

  render() {
    const {loggedIn} = this.props
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/users/:id" component={SingleUser} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {loggedIn && (
                <Route exact path="/" component={Home} />
            )}
            <Route exact path="/" component={Hero} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

const mapState = state => ({
  loggedIn: !!state.users.current.id
})

const mapDispatch = dispatch => ({
  getMe: () => dispatch(getMe())
})

export default connect(mapState, mapDispatch)(App)
