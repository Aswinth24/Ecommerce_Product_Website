import React, { useState } from "react";

import CartCard from "./CartCard";
function Header() {
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [totalcount] = useState(() => {
    return 3;
  });

  return (
    <React.Fragment>
      <div
        className={"body-overlay" + (flag1 === false ? "" : " visible")}
      ></div>
      <header className="header">
        <button
          className="menu-bar"
          onClick={() => {
            setFlag1(flag1 === false ? true : false);
          }}
        >
          <img src="images/icon-menu.svg" alt="" />
        </button>

        <div className="nav-cont">
          <div className="logo">
            <h2>sneakers</h2>
          </div>
          <nav className={"navbar" + (flag1 === false ? "" : " visible")}>
            <ul>
              <li className="navbar-close">
                <button
                  onClick={() => {
                    setFlag1(!flag1);
                  }}
                >
                  <img src="images/icon-close.svg" alt="" />
                </button>
              </li>
              <li>
                <a href="##">Collections</a>
              </li>
              <li>
                <a href="##">Men</a>
              </li>
              <li>
                <a href="##">Women</a>
              </li>
              <li>
                <a href="##">About</a>
              </li>
              <li>
                <a href="##">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="profile-cont">
          <div
            onClick={() => {
              setFlag(flag === false ? true : false);
            }}
          >
            <img src="images/icon-cart.svg" alt="" className="cart" />
            <div
              className={
                "cart-added-counts" + (totalcount === 0 ? " hidden" : "")
              }
            >
              {totalcount}
            </div>
          </div>

          <img src="images/image-avatar.png" alt="" className="profile" />
        </div>
      </header>
      {flag && <CartCard></CartCard>}
    </React.Fragment>
  );
}
export default Header;
