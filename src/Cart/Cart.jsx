import React, { Component } from "react";
import "./Cart.css";
class Cart extends Component {
  render() {
    const CartItems = this.props.cartItem;
    const totalprice= this.props.cartItem.reduce((price,item)=>price+item.qty*item.price,0);
    console.log(totalprice)
    return (
      <section className="cart-items">
        <div className="conatiner d_flex">
          <div className="cart-details">
            {CartItems.length === 0 && (
              <h1 className="no-items product">No Item add in Cart</h1>
            )}
            {CartItems.map((item) => {
              const productQty = item.price * item.qty;
              console.log(productQty);
              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 384 512"
                        >
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button className="incCart"onClick={() => this.props.addToCart(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button className='desCart' onClick={() =>this.props.decreaseQty(item)}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                      </button>
                    </div>
                  </div>
               
                </div>
              
              );
            })}
             </div>
            <div className="cart-total  product">
              <h2>Cart Summary </h2>
              <div className="d_flex">
                <h4>total price:</h4>
                <h3>${totalprice}.00</h3>
              </div>
            </div>
         
        </div>
      </section>
    );
  }
}
export default Cart;
