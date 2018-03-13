import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCTS } from '../store/db';

class Checkout extends Component {
  render() {
    let items = Object.entries(this.props.myCart).filter(el => el[1] > 0);
    let count = 0;
    return (
      <div>
        <h1>Invoice</h1>
        <table className="table table-bordered">
          <tbody>
            {items.map((item, index, list) => {
              count += items[index][1];
              return (
                <tr key={index}>
                  <td>{PRODUCTS[items[index][0]].title}</td>
                  <td><strong>{items[index][1]}</strong></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Total: {count}</p>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    myCart: store
  };
};
export default connect(mapStateToProps)(Checkout);
