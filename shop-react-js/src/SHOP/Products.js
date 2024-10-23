import Card from "./Card"
import { productData } from "./dataPr";

const Products = () => {
    let counter = 0
    const products = JSON.parse(productData);
    //нужно фетчить данные РАЗОБРАТЬСЯ!!!!!

    return (<div>
        <header className="header">
            <div className="buttons">
                <button className="button"><img src={require("./style/Images/Group 2.png")} alt=""></img>
                </button>
                <button className="buttons1"><img src={require("./style/Images/Forma 1.svg")} alt=""></img></button>

            </div>
            <div className="buts">
                <div className="burger">
                    <label for="but1"><img src={require("./style/Images/Forma 1.png")} alt=""></img>
                    </label>
                    <input type="checkbox" id="but1"></input>
                    <nav className="nav">
                        <ul>
                            <li><a href="#">man</a></li>
                            <li><a href="#">woman</a></li>
                            <li><a href="#">boy</a></li>
                            <li><a href="#">girl</a></li>
                        </ul>
                    </nav>
                </div>
                <button className="but2"><img src={require("./style/Images/Forma 1 (1).png")} alt=""></img></button>

                <div className="piu">
                    <button className="but3"><img src={require("./style/Images/Forma 1 (3).png")} alt=""></img></button>
                    <button className="button2">5</button>
                </div>
            </div>

        </header>
        <div className="texts_1">
            <div className="texts_o">NEW ARRIVALS</div>
            <div className="texts_i">HOME / MEN / <div className="pooooopopop">NEW ARRIVALS</div>
            </div>
        </div>

        <div className="content_catalog">
            <span className="filter__details__span">
                <details className="filter__details">
                    <summary className="filter"><span className="filter__filter">FILTER</span><svg className="hilhilh"
                        width="15.000000" height="10.000000" viewBox="0 0 15 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector"
                            d="M0.833252 10L4.16675 10C4.625 10 5 9.625 5 9.16675C5 8.70825 4.625 8.33325 4.16675 8.33325L0.833252 8.33325C0.375 8.33325 0 8.70825 0 9.16675C0 9.625 0.375 10 0.833252 10ZM0 0.833252C0 1.29175 0.375 1.66675 0.833252 1.66675L14.1667 1.66675C14.625 1.66675 15 1.29175 15 0.833252C15 0.375 14.625 0 14.1667 0L0.833252 0C0.375 0 0 0.375 0 0.833252ZM0.833252 5.83325L9.16675 5.83325C9.625 5.83325 10 5.45825 10 5C10 4.54175 9.625 4.16675 9.16675 4.16675L0.833252 4.16675C0.375 4.16675 0 4.54175 0 5C0 5.45825 0.375 5.83325 0.833252 5.83325Z"
                            fill="#000000" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg></summary>
                    <div className="filter__content">
                        <details className="CATEGORY">
                            <summary className="CATEGORY__sum">CATEGORY</summary>

                            <div className="CATEGORY__links-box">
                                <p className="llllllljklkj">Accessories</p>
                                <p className="llllllljklkj">Denim</p>
                                <p className="llllllljklkj">Hoodies & Sweatshirts</p>
                                <p className="llllllljklkj">Jackets & Coats</p>
                                <p className="llllllljklkj">Polos</p>
                                <p className="llllllljklkj">Shirts</p>
                                <p className="llllllljklkj">Shoes</p>
                                <p className="llllllljklkj">Sweaters & Knits</p>
                                <p className="llllllljklkj">T-Shirts</p>
                                <p className="llllllljklkj">Tanks</p>
                            </div>
                        </details>
                        <details className="CATEGORY">
                            <summary className="CATEGORY__sum">BRAND</summary>
                        </details>
                        <details className="CATEGORY">
                            <summary className="CATEGORY__sum">DESIGNER</summary>
                        </details>
                    </div>
                </details>
            </span>

            <div className="filter3">
                <details>
                    <summary className="fil3"><span className="filter_filter3">Trending Now</span></summary>
                </details>
                <details className="details_label_sizes">

                    <summary className="fil3"><span className="filter_filter3">Size</span></summary>
                    <span className="label_sizes">
                        <div className="label_sizes_more">
                            <label><input type="checkbox"></input>XS</label>
                            <label><input type="checkbox"></input>S</label>
                            <label><input type="checkbox"></input>M</label>
                            <label><input type="checkbox"></input>L</label>
                        </div>
                    </span>

                </details>

                <details>
                    <summary className="fil3"><span className="filter_filter3">Price</span></summary>
                </details>
            </div>
        </div>
        {products.map((product, count) => {
            return <Card name={product.name} desc={product.desc} price={product.parse} img={product.img} key={count += (counter += 1)} />
        })}
        <button className="lastB">
            Browse All Product
        </button>
    </div>)

}
export default Products