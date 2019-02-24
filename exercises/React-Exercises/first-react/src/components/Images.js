import React from "react";

const images = [
    "https://m.media-amazon.com/images/G/01/zappos/landing/pages/homepage/2019/february/SP-Hero-WomensClothing-Athleisure-1440._CB454539124_SX1024_.jpg"
]

let mappedImages = images.map((pic)=>{
    return (
        <div>
            <img src={pic} alt=""/>
        </div>
    )
})  

const Images = () => {
    return (
        <div>
            {mappedImages}
        </div>
    )
}

export default Images;