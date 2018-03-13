import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PRODUCTS } from '../store/db';

class Cart extends React.Component {
  render() {
   let items = Object.entries(this.props.myCart).filter(el => el[1] > 0);
    return (
      <div>
        {(items.length === 0) ? <p><strong>Your cart is empty</strong></p> : '' }
        <ul>
          {items.map((item, index, list) => {
            return <li key={index}> {PRODUCTS[item[0]].title} - {item[1]}</li>;
          })}
        </ul>
        <Link to="/checkout" className="btn btn-primary">
          Checkout
        </Link>
        <Link to="/" className="btn btn-info">
          Home
        </Link>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    myCart: store
  };
};
export default connect(mapStateToProps)(Cart);
