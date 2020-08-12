import React from 'react'
import Card from './Card';
import Section from './Section';

function JustForYou() {
    const products = [
        {
            title:"Coke 2.25 ltr",
            imageUrl: "https://static-01.daraz.com.np/p/02eb31ed3eb7d688c7780ac008f84ec4.jpg_200x200q90-product.jpg",
            prices:{
                price: "210"
            },
            rating: {
                value: 5,
                reviews:39
            }
        },
        {
            title:"Nature's Essence Lavender Essential Oil 6Ml",
            imageUrl: "https://static-01.daraz.com.np/p/821cf9a56195bd8cae8c12b35a5933b3.jpg_200x200q90-product.jpg",
            prices:{
                price: "350"
            },
            rating: {
                value: 4,
                reviews:57
            }
        },
        {
            title:"SKMEI 1389 Watch",
            imageUrl: "https://static-01.daraz.com.np/p/ca186faf850f8b2eea6bcf714a1d9c0b.jpg_200x200q90-product.jpg",
            prices:{
                price: "3,450"
            },
            rating: {
                value: 5,
                reviews:1
            }
        },
        {
            title:"King Sized Double Bed-sheet with Pillow Cover",
            imageUrl: "https://static-01.daraz.com.np/p/a03f7c8a8a1ebbb2e17882cabf1ab341.jpg_200x200q90-product.jpg",
            prices:{
                price: "1,119",
                actualPrice:"1,599",
                discount: 25
            },
            rating: {
                value: 3,
                reviews:2
            } 
        },
        {
            title:"5Pcs Plastic Shield Safety Face",
            imageUrl: "https://static-01.daraz.com.np/p/c8fcaab02e1cf7dd95d5f9db87be4b3e.jpg_200x200q90-product.jpg",
            prices:{
                price: "747"
            },
            rating: {
                value: 5,
                reviews:1
            }
        },
        {
            title:"Table fan",
            imageUrl: "https://static-01.daraz.com.np/p/3fafee5e67911933397420275d5b66f2.jpg_200x200q90-product.jpg",
            prices:{
                price: "680",
                actualPrice: "685",
                discount: 1
            },
            rating: {
                value: 5,
                reviews:1
            }
        },
    ]

    return (
        <Section title="Just For You">
            <div className="section_products">
                {products.map(product=> (
                    <Card prices={product.prices} title={product.title} imageUrl={product.imageUrl} rating={product.rating} key={product.title}/>
                ))}
            </div>
            <div className="center">
                <button className="load_button">
                    Load More
                </button>
            </div>
        </Section>
    )
}

export default JustForYou
