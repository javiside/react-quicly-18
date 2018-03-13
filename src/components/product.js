import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../store/db'

export default class Product extends React.Component {
    render() {
      let selected = this.props.match.params.id;
      return (
        <div>
          <img src={'../'+PRODUCTS[selected].src} style={{ height: '80%'}} alt={PRODUCTS[selected].title} />
          <p>{PRODUCTS[selected].title}</p>
          <Link
            to={'/cart'}
            className="btn btn-primary">
            Buy
          </Link>
        </div>
      )
    }
  }