import React, { Component } from 'react';
import './App.css';
import '@shopify/polaris/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/home';
import Config from './routes/config';
import Help from './routes/help';
import Products from './routes/products';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/config" component={Config} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/help" component={Help} />
        </div>
      </Router>
    );
  }
}

export default App;



