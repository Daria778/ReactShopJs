import { useDispatch, useSelector, useState } from "react-redux"
import './style/StylesFor.css'
const Card = ({ name, desc, price, img, c }) => {

    const AddProduct = () => {
        console.log("object");
    }

    return (
        <div className="product">
            <div className="img">
                <div className="y" onClick={AddProduct}>
                    <div className="z">
                        <img src={img} alt="фотка"></img>
                        <button className="i" onClick={AddProduct}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="lastSeen" key={c}>
                <p className="lastH">{name}</p>
                <p className="lastP">{desc}</p>
                <p className="lastS">{price}</p>
            </div>


        </div>
    )
}
export default Card