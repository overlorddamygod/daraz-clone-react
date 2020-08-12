import React, { useState } from 'react';
import { Carousel,Menu  } from 'antd';
import './Banner.css';
import { usePalette } from 'react-palette'

const { SubMenu } = Menu;

function Banner() {
    const imgSrc = [
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1FctaRlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1nwbpdmslXu8jSZFuXXXg7FXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1U0cjeMgP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB12msueMgP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1nxzpdmslXu8jSZFuXXXg7FXa.png_1200x1200Q100.jpg"
    ]

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
    ]
    const [index,setIndex] = useState(0);
    const [color,setColor] = useState();
    // eslint-disable-next-line no-unused-vars
    const { data, loading, error } = usePalette(imgSrc[index])

    function onChange(ind) {
        setIndex(ind);
        setColor(data.lightVibrant)
    }
    function handleClick(e) {
        console.log('click', e);
      }

    return (
        <div className="banner" style={{backgroundColor:color}}>
            <div className="container" style={{position:"relative",paddingLeft:"200px"}}>
                <Carousel afterChange={onChange} autoplay effect="fade">
                    {imgSrc.map((src,i)=> (
                        <img src={src} key={i} alt={src}/>
                    ))}
                </Carousel>
                <div style={{position:"absolute",left:0,top:0,height:"100%"}}>
                    <Menu onClick={handleClick} style={{ width: 200,fontSize:"0.7rem",height:"100%",padding:"2px 0"}} mode="vertical">
                        {menus.map(menu=>(
                        <SubMenu key={menu} title={menu} style={{height:"29px",padding:"0"}}>
                            <Menu.Item key="1" >Mobile</Menu.Item>
                            <Menu.Item key="2">Tablets</Menu.Item>
                            <Menu.Item key="3">Laptops</Menu.Item>
                            <Menu.Item key="4">Desktops</Menu.Item>
                        </SubMenu>
                        ))}
                    </Menu>   
                </div>
            </div>
        </div>
    )
}

export default Banner
