import React from "react";
import { Card as C, Rate } from "antd";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/features/cart/cartSlice";

function Card({ id, prices, title, imageUrl, rating }) {
  const dispatch = useDispatch();

  return (
    <C
      hoverable
      style={{ width: 190, height: "300px" }}
      cover={<img alt={title} src={imageUrl} />}
      onClick={() => {
        dispatch(
          addItem({
            id,
            title,
            imageUrl,
            prices,
            price: +prices.price.replace(",", ""),
            rating,
          })
        );
      }}
    >
      <div className="description">
        <C.Meta title={title} className="card_title" />
        {prices && <div className="price">Rs.{prices.price}</div>}
        {prices?.actualPrice && (
          <div className="actual_price">
            <span>Rs.{prices.actualPrice}</span> -{prices.discount}%
          </div>
        )}
        {rating && (
          <span>
            <Rate
              value={rating.value}
              style={{ fontSize: "0.7rem" }}
              disabled
            />
            <span>({rating.reviews})</span>
          </span>
        )}
      </div>
    </C>
  );
}

export default Card;
