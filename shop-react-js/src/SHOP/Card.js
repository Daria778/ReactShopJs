import { useDispatch, useSelector, useState } from "react-redux"
import './style/StylesFor.css'
import { adding, AddProductToCart } from "./store/CardSlicer";
const Card = ({ name, desc, price, pic, c, size }) => {
    const dispatch = useDispatch();
    const AddProduct = () => {
        adding(price)
        dispatch(AddProductToCart(name, desc, price, pic, size))
    }

    return (
        <div className="product">
            <div className="img">
                <div className="y" onClick={AddProduct}>
                    <div className="z">
                        <img src={pic} alt=""></img>
                        <button className="i">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="lastSeen" key={c}>
                <p className="lastH">{name}</p>
                <p className="lastP">{desc}</p>
                <p className="lastS">${price}</p>
            </div>


        </div>
    )
}
export default Card