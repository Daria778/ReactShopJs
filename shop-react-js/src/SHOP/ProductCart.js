import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const ProductCart = () => {
    const productStore = useSelector((state) => state)
    const y = () => {
        console.log(productStore[0].price);
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


        </div>
    )
}
export default ProductCart