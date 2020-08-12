import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="left">
                    <h2>Customer Care</h2>
                    <ul>
                        <a href="link"><li>Help Center</li></a>
                        <a href="link"><li>How to Buy</li></a>
                        <a href="link"><li>Track Your Order</li></a>
                        <a href="link"><li>Returns & Refunds</li></a>
                        <a href="link"><li>Contact Us</li></a>
                    </ul>

                    <h2>Earn with Daraz</h2>
                    <ul>
                        <a href="link"><li>Daraz University</li></a>
                        <a href="link"><li>Sell on Daraz</li></a>
                        <a href="link"><li>Code of Conduct</li></a>
                    </ul>
                </div>
                <div className="middle">
                    <h2>Daraz</h2>
                    <ul>
                        <a href="link"><li>About Daraz</li></a>
                        <a href="link"><li>Careers</li></a>
                        <a href="link"><li>Daraz Blog</li></a>
                        <a href="link"><li>Terms & Conditiions</li></a>
                        <a href="link"><li>Privacy Policy</li></a>
                        <a href="link"><li>Digital Payments</li></a>
                        <a href="link"><li>Daraz Customer University</li></a>
                        <a href="link"><li>Daraz Experts</li></a>
                    </ul>
                </div>
                <div className="right">
                    <div className="right_flex">
                        <img className="border qrcode" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png" alt="qrcode"/>
                        <div>
                            <img className="border daraz" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1ECLKv7omBKNjSZFqXXXtqVXa.png" alt="daraz-logo"/>
                            <h4 style={{color:"#EE6F24"}}>Happy Shopping</h4>
                            <h4>Download App</h4>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
