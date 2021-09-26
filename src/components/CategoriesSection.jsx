import React from 'react'
import CardCat from './CardCat';
import Section from './Section';

function JustForYou() {
    const products = [
        {
            title:"Digestive Care",
            imageUrl: "https://static-01.daraz.com.np/p/eb2585795f37661fc9ba5bc2a5f98107.jpg",
        },
        {
            title:"Sneakers",
            imageUrl: "https://static-01.daraz.com.np/p/d362851e38c90f610ad51d1c905e879d.jpg",
        },
        {
            title:"Casual",
            imageUrl: "https://static-01.daraz.com.np/original/f5ff231baf635e4f51e9b63268190ee4.jpg",
        },
        {
            title:"Routers",
            imageUrl: "https://static-01.daraz.com.np/p/6c1e2c0d0d1e454bfd443f2ea31388e8.jpg",
        },
        {
            title:"Projectors",
            imageUrl: "https://static-01.daraz.com.np/p/8f0efb1853cdfb83a6b356a54d934ee6.jpg",
        },
        {
            title:"Wardrobe Organizers",
            imageUrl: "https://static-01.daraz.com.np/p/1dc064b45e6299bf22475d49c549d7a3.jpg",
        },
        {
            title:"Stevetop Pressure Cookers",
            imageUrl: "https://static-01.daraz.com.np/original/05a629f23c2f3597925f7504795f8398.jpg",
        },
        {
            title:"Air Coolers",
            imageUrl: "https://static-01.daraz.com.np/p/f4cb59513fc452b645c51b33a132d8d4.jpg",
        },
    ]

    return (
        <Section title="Categories">
            <div className="products" style={{display:"flex"}}>
                {products.map(product=> (
                    <CardCat title={product.title} imageUrl={product.imageUrl}key={product.title}/>
                ))}
            </div>
        </Section>
    )
}

export default JustForYou
