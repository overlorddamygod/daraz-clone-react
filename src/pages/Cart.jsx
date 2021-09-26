import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  changeQty,
  removeItem,
} from "../store/features/cart/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      {items.map((item) => (
        <div
          style={{
            ...flexCenter,
            gap: "2rem",
            margin: "0.5rem 0",
            transition: "all 1s",
            transitionTimingFunction: "ease-in-out",
          }}
          key={item.id}
        >
          <div>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ height: "4rem", width: "4rem" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>
          </div>
          <div
            style={{
              ...flexCenter,
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <div style={{ ...flexCenter }}>
              <div
                style={incDecButton}
                onClick={() => dispatch(decrementQty({ id: item.id }))}
              >
                -
              </div>
              <input
                value={item.quantity}
                style={{ ...square(), textAlign: "center", border: 0 }}
                onChange={(event) => {
                  dispatch(
                    changeQty({ id: item.id, quantity: +event.target.value })
                  );
                }}
              />
              <div
                style={incDecButton}
                onClick={() => dispatch(incrementQty({ id: item.id }))}
              >
                +
              </div>
            </div>
            <h4
              style={{
                minWidth: "5rem",
                ...flexCenter,
                justifyContent: "center",
              }}
            >
              {item.price * item.quantity}
            </h4>
            <button
              style={{
                backgroundColor: "#f57224",
                border: 0,
                color: "white",
                padding: "0.5rem 1rem",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              onClick={() => dispatch(removeItem({ id: item.id }))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div>
        Total:{" "}
        {items.reduce((t, item) => {
          return t + item.price * item.quantity;
        }, 0)}
      </div>
    </div>
  );
};

const flexCenter = {
  display: "flex",
  alignItems: "center",
};

const square = (size = 2) => ({
  width: `${size}rem`,
  height: `${size}rem`,
});

const incDecButton = {
  ...square(),
  textAlign: "center",
  backgroundColor: "lightgray",
  ...flexCenter,
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
};

export default Cart;
