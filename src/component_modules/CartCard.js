import React from "react";
const CartCard = () => {
  return (
    <div className="cart-card-cont">
      <div className="card-heading">Cart</div>
      <div className="cart-card-main-cont">
        <div className="cart-info">
          <div className="cart-image">
            <img src="images/image-product-1.jpg" alt="" />
          </div>
          <div className="cart-cont">
            <div className="cart-detials">
              <span className="cart-product-name">
                Fall Limited Edition Sneakers
              </span>
              <div className="cart-price">
                <span>$125.00 x 3</span>
                <strong>$375.00</strong>
              </div>
            </div>
            <img src="images/icon-delete.svg" alt="" className="delete" />
          </div>
        </div>

        <div className="check">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CartCard;
