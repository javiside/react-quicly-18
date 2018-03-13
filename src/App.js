import React, { Component } from 'react';
import { routes } from './routes';

const Heading = () => {
  return <h1>Book Store</h1>;
};

export default class App extends Component {
  render() {
    return (
      <div className="well">
        <Heading />
        {routes}
      </div>
    );
  }
}
