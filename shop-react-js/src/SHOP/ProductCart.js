import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { count, totalPrice } from "./store/CardSlicer"
import CardCart from "./CardCart"
const ProductCart = () => {
    let countInd = 0;
    const productStore = useSelector((state) => state)
    const y = () => {
        console.log(productStore);
    }

    return (
        <div>
            <header className="header">
                <div className="buttons">
                    <Link to={"/"} className="button"><img src={require("./style/Images/Group 2.png")} alt=""></img>
                    </Link>
                    <button className="buttons1"><img src={require("./style/Images/Forma 1.svg")} alt=""></img></button>

                </div>
                <div className="buts">
                    <div className="burger">
                        <label htmlFor="but1"><img src={require("./style/Images/Forma 1.png")} alt=""></img>
                        </label>
                        <input type="checkbox" id="but1"></input>
                        <nav className="nav">
                            <ul>
                                <li><a href="#" onClick={y}>man</a></li>
                                <li><a href="#">woman</a></li>
                                <li><a href="#">boy</a></li>
                                <li><a href="#">girl</a></li>
                            </ul>
                        </nav>
                    </div>
                    <button className="but2"><img src={require("./style/Images/Forma 1 (1).png")} alt=""></img></button>

                    <div className="piu">
                        <button className="but3"><img src={require("./style/Images/Forma 1 (3).png")} alt=""></img></button>
                        <button className="button2"></button>
                    </div>
                </div>

            </header>
            <div className="shoppingcartlflf">
                <p className="Reg">SHOPPING CART</p>
            </div>

            <div className="shoping_cart">
                <div className="shoping_cart_content">
                    {productStore.map((pr, count) => {
                        return <CardCart name={pr.name} price={pr.price} size={pr.size} pic={pr.pic} key={count += (countInd += 2)} />
                    })}
                    <button className="krestic" ><img src={"./style/Images/krestic.svg"}></img></button>
                </div>
                <div className="shopingcartbuttons">
                    <button className="shoppingcartbuttonCART">CLEAR SHOPPING CART</button>
                    <button className="shoppingcartbuttonCART"><Link to={"/"}>CONTINUE SHOPPING </Link></button>
                </div>
            </div>
            <div className="Forms">
                <div className="formsDiv">
                    <p className="SHOPPINGADRRES">SHOPPING ADRESS</p>
                    <input className="formsInput" type="text" name="username" placeholder="Country"></input>
                    <input className="formsInput" type="text" name="username" placeholder="State"></input>
                    <input className="formsInput" type="text" name="username" placeholder="Post Code/Zip"></input>
                    <input className="formsInput" type="text" name="username" placeholder="GET A QUOTE"></input>

                </div>

                <div className="checkmoney">

                    <p className="totalAmount">SUB TOTAL {totalPrice}</p>
                    <p className="GrandTotal">GRAND TOTAL <span className="firstProductTextPRICECorrect">${totalPrice}</span></p>

                    <img src="../Figma_Adaptiv_Seminar/Images/lineshop.svg" alt=""></img>
                    <button className="ProceedTo">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>

    )
}
export default ProductCart