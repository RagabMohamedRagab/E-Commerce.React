import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header>
        <div className="container d_flex">
          <div className="categories d_flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M384 96V224H256V96H384zm0 192V416H256V288H384zM192 224H64V96H192V224zM64 288H192V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
            </svg>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlinke">
            <ul className={MobileMenu?"nav-links-MobileMenu":"link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Page</Link>
              </li>
              <li>
                <Link to="/user">User Account</Link>
              </li>
              <li>
                <Link to="/vendor">Vendor Account</Link>
              </li>
              <li>
                <Link to="/vendor">Vendor Account</Link>
              </li>
              <li>
                <Link to="/track">Track My Order</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
               <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="close home-btn" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="open" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
