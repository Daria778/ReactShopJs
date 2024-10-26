import { useDispatch, useSelector, useState } from "react-redux"
import { deleting } from "./store/CardSlicer";

const CardCart = ({ name, size, price, pic, c, id }) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        dispatch(deleting(id))
        console.log(e);
    };
    return (
        <div className="firstProuct" key={c}>
            <img className="ooooomaaan" src={pic} alt=""></img>
            <div className="firstProductText">
                <p className="firstProductTextMango">{name}<br></br></p>
                <p className="firstProductTextPRICE">Price: <span className="firstProductTextPRICECorrect">${price}</span> <br></br>
                    Size: {size} <br></br>
                </p>
            </div>
            <button className="krestic" onClick={handleDelete}><img src={require("./style/Images/krestic.svg")}></img></button>

        </div>
    )
}
export default CardCart