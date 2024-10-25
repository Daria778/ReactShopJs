import { useDispatch, useSelector, useState } from "react-redux"

const CardCart = ({ name, size, price, pic, c }) => {

    return (
        <div className="firstProuct" key={c}>
            <img className="ooooomaaan" src={pic} alt=""></img>
            <div className="firstProductText">
                <p className="firstProductTextMango">{name}<br></br></p>
                <p className="firstProductTextPRICE">Price: <span className="firstProductTextPRICECorrect">${price}</span> <br></br>
                    Size: {size} <br></br>
                </p>
            </div>
            <button className="krestic"><img src="./style/Images/krestic.svg"></img></button>
        </div>
    )
}
export default CardCart