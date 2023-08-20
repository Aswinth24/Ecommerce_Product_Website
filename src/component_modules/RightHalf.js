import React, { useState } from "react";

const RightHalf = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count >= 1) setCount(count - 1);
  };

  return (
    <div className="right_half">
      <div className="right-container">
        <span className="company"> Sneaker Company</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price-info">
          <div className="pric-tag">
            <h2>$125.00</h2>
            <span>50%</span>
          </div>
          <div className="price-prec">
            <span>$250.00</span>
          </div>
        </div>
        <div className="cart-cont">
          <div className="cart-count">
            <div>
              <button
                onClick={() => {
                  decrement();
                }}
              >
                &#8722;
              </button>
              <span>{count}</span>
              <button
                onClick={() => {
                  increment();
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="add-cart">
            <button
              onClick={() => {
                setCount(0);
              }}
            >
              <img src="images/icon-cart1.svg" alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightHalf;
