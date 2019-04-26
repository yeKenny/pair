import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './components/Hero'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hero} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
