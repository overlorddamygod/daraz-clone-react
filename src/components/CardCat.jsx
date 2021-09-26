import React from 'react'
import { Card as C, } from 'antd';

function CardCat({title,imageUrl}) {
    return (
        <C
        hoverable
        style={{ 
            width: 150,
            padding:2,
            height:150,
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center"
        }}
        >
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems:"center"
            }}>
                <img src={imageUrl} style={{objectFit:"contain",width:"70px"}} alt={title}/>
                <span style={{
                    color:"black",
                    marginTop:"10px",
                    fontWeight:"500",
                    textAlign:"center"
                }}>{title}</span>
            </div>
        </C>
    )
}

export default CardCat;
