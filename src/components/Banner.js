import React, { useState } from 'react';
import { Carousel,  } from 'antd';
import './Banner.css';
import { usePalette } from 'react-palette'

function Banner() {
    const imgSrc = [
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1FctaRlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1nwbpdmslXu8jSZFuXXXg7FXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1U0cjeMgP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB12msueMgP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg",
        "https://laz-img-cdn.alicdn.com/images/ims-web/TB1nxzpdmslXu8jSZFuXXXg7FXa.png_1200x1200Q100.jpg"
    ]
    const [index,setIndex] = useState(0);
    const [color,setColor] = useState();
    // eslint-disable-next-line no-unused-vars
    const { data, loading, error } = usePalette(imgSrc[index])

    function onChange(ind) {
        setIndex(ind);
        setColor(data.lightVibrant)
    }

    return (
        <div className="banner" style={{backgroundColor:color}}>
            <div className="container">
                <Carousel afterChange={onChange} autoplay effect="fade">
                    {imgSrc.map((src,i)=> (
                        <img src={src} key={i} alt={src}/>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Banner
