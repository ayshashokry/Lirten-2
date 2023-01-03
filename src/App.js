// Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Styling
import './App.css';
// Components

import Navb from './components/layout/Navb';
import Home from './components/pages/Home';
import Design from './components/pages/Design';
import Code from './components/pages/Code';
import ContactUs from './components/pages/ContactUs';
import Manage from './components/pages/Manage';
import JoinUs from './components/pages/JoinUs';

import Footer from './components/layout/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navb />
          <Route exact path="/" component={Home} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/manage" component={Manage} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/JoinUs" component={JoinUs} />

          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
