import React from 'react'
import { Link } from 'react-router-dom'

const cartItems = ['a', 'b', 'c']

export default class Cart extends React.Component {
    render() {
      console.dir(this.props)
      return <div>
        {(cartItems.length === 0) ? <p>Your cart is empty</p> : '' }
         <ul>
          {cartItems.map((item, index, list)=>{
            return <li key={item}> {item}</li>
          })}
        </ul>
        <Link to="/checkout" className="btn btn-primary">Checkout</Link>
        <Link to="/" className="btn btn-info">Home</Link>
      </div>
    }
  }