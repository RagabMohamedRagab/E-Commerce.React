import React, { Component } from "react";


class Head extends Component {
  render() {
    return (
      <>
        <section className="head">
          <div className="container d_flex">
            <div className="left row">
              <i className="fa fa-phone"></i>
              <label>+01121237611</label>
              <i className="fa fa-envelope"></i>
              <label>example@gmail.com</label>
            </div>

            <div className="right row RText">
              <label>Theme FAQ'S</label>
              <label>Need Helps</label>
              <label> 💵 USD</label>
              <label> 💸 EGP</label>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Head;
