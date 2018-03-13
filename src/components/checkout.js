import React from 'react'

const cartItems = [1,1,2]

export default class Checkout extends React.Component {
    render() {
      let count = 0
      return <div><h1>Invoice</h1><table className="table table-bordered"><tbody>
        {cartItems.map((item, index, list)=>{
          count += cartItems[item]
          return <tr key={index}>
            <td>{cartItems[item]}</td>
          </tr>
        })}
      </tbody></table><p>Total: {count}</p></div>
    }
  }