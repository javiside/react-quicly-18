import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './layout';
import { Modal } from './components/modal';
import Cart from './components/cart';
import Checkout from './components/checkout';

export const routes = (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products/:id" component={Modal} />
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  </Router>
);
