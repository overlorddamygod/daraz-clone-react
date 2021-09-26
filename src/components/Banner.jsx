import React, { useState } from "react";
import { Carousel, Menu } from "antd";
import "./Banner.css";

const { SubMenu } = Menu;

function Banner() {
  const images = [
    {
      url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1FctaRlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg",
      color: "#203E8C",
    },
    {
      url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1nwbpdmslXu8jSZFuXXXg7FXa.jpg_1200x1200Q100.jpg",
      color: "#FF0046",
    },
    {
      url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1U0cjeMgP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg",
      color: "#45198A",
    },
    {
      url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB12msueMgP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg",
      color: "#441788",
    },
    {
      url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1nxzpdmslXu8jSZFuXXXg7FXa.png_1200x1200Q100.jpg",
      color: "#F8B900",
    },
  ];

  const menus = [
    "Electronic Devices",
    "Electronic Accessories",
    "TV & Home Appliances",
    "Health & Beauty",
    "Babies & Toys",
    "Groceries & Pets",
    "Home & Lifestyle",
    "Women's Fashion",
    "Men's Fashion",
    "Watches & Accessories",
    "Sports & Outdoor",
    "Automotive & Motorbike",
  ];
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(images[0].color);

  function onChange(ind) {
    setIndex(ind);
    setColor(images[ind].color);
  }
  function handleClick(e) {
    console.log("click", e);
  }

  return (
    <div
      className="banner"
      style={{ backgroundColor: color, transition: "background 0.1s" }}
    >
      <div
        className="container"
        style={{ position: "relative", paddingLeft: "200px" }}
      >
        <Carousel afterChange={onChange} autoplay effect="fade">
          {images.map((_img, i) => (
            <img src={_img.url} key={i} alt={""} />
          ))}
        </Carousel>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%" }}>
          <Menu
            onClick={handleClick}
            style={{
              width: 200,
              fontSize: "0.7rem",
              height: "100%",
              padding: "2px 0",
            }}
            mode="vertical"
          >
            {menus.map((menu) => (
              <SubMenu
                key={menu}
                title={menu}
                style={{ height: "28px", padding: "0" }}
              >
                {/* <Menu.Item key="1" >Mobile</Menu.Item> */}
                {/* <Menu.Item key="2">Tablets</Menu.Item> */}
                {/* <Menu.Item key="3">Laptops</Menu.Item> */}
                {/* <Menu.Item key="4">Desktops</Menu.Item> */}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Banner;
