import React from "react";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { Search } = Input;

const Navbar = () => {
  const itemsLength = useSelector((state) => state.cart.items.length);

  return (
    <div className="navbar">
      <div className="navbar_top">
        <div className="container">
          <h5>SAVE MORE ON APP</h5>
          <h5>Sell on Daraz</h5>
          <h5>CUSTOMER CARE</h5>
          <h5>Track my order</h5>
          <h5>login</h5>
          <h5>sign up</h5>
          <h5>भाषा परिवर्तन</h5>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="container">
          <Link to="/">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
              alt="daraz-logo"
            />
          </Link>
          <div className="search">
            <Search
              placeholder="Search in Daraz"
              onSearch={(value) => console.log(value)}
              enterButton
              size="large"
              bordered={false}
            />
          </div>
          <div className="navbar_bottom_right">
            <Link to="/cart" style={{ position: "relative" }}>
              <ShoppingCartOutlined style={{ cursor: "pointer" }} />
            </Link>
            <div
              style={{
                fontSize: "1rem",
              }}
            >
              {itemsLength}
            </div>
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB10hDTOBr0gK0jSZFnXXbRRXXa.jpg"
              alt="offers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
