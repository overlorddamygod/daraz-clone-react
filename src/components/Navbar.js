import React from 'react';
import './Navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

const Navbar = () => {
    
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
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png" alt="daraz-logo"/>
                    <div className="search">
                        <Search placeholder="Search in Daraz" onSearch={value => console.log(value)} enterButton size="large" bordered={false}/>
                    </div>
                    <div className="navbar_bottom_right">
                        <ShoppingCartOutlined style={{cursor:"pointer"}}/>
                        <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB10hDTOBr0gK0jSZFnXXbRRXXa.jpg" alt="offers"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
