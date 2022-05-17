import React, { useState } from "react";
import { useCart } from "../../context";
import { getCartDetails } from "../../utils/get-cart-details";

export const CartDetails = () => {
  const {
    cartState: { cart },
  } = useCart();

  const cartItemDetails = getCartDetails(cart);
  const { totalPrice, totalItems, discount, delivery } = cartItemDetails;
  const totalAmount = totalPrice - discount + delivery;
  const totalSave = totalPrice - totalAmount;

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-title">PRICE DETAILS</div>
        </div>
        <div className="card-body">
          <div className="py-1 space-between">
            <span>
              Price ({totalItems} {totalItems < 2 ? "item" : "items"})
            </span>
            <span>Rs. {totalPrice}</span>
          </div>
          <div className="py-1 space-between">
            <span>Discount</span>
            <span>- Rs. {discount}</span>
          </div>
          <div className="py-1 space-between">
            <span>Delivery charges</span>
            <span>Rs. {delivery}</span>
          </div>
          <div className="total-price py-1 space-between">
            <span>Total Amount</span>
            <span>Rs. {totalAmount}</span>
          </div>
          <p className="py-2">You will save Rs. {totalSave} on this order</p>
        </div>
        <button className="btn primary-solid-btn">PLACE ORDER</button>
      </div>
    </>
  );
};
