import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

import Login from './components/Login'
import NotFound from './components/NotFound'
import Register from './components/Register'
import AllUsers from './components/AllUsers'
import SingleUser from './components/SingleUser';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/users/:id" component={SingleUser} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Hero} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;