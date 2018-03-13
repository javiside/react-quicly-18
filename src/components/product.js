import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { PRODUCTS } from '../store/db';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleBuy = this.handleBuy.bind(this);
    
  }
  handleBuy() {
    return this.props.addToCart(+this.props.match.params.id);
  }
  render() {
    let selected = this.props.match.params.id;
    return (
      <div>
        <img
          src={'../' + PRODUCTS[selected].src}
          style={{ height: '80%' }}
          alt={PRODUCTS[selected].title}
        />
        <p>{PRODUCTS[selected].title}</p>
        <Link
          onClick={this.handleBuy} to={'/cart'}
          className="btn btn-primary"
        >
          Buy
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch({ type: 'addToCart', item: item })
  };
};

export default connect(null, mapDispatchToProps)(Product);
