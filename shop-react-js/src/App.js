import logo from './logo.svg';
import './App.css';
import { fetchingProducts } from './SHOP/store/CardSlicer';
import Products from './SHOP/Products';
import { productData } from './SHOP/dataPr';


function App() {

  // state = { products: }; []
  // componentDidMount() {
  //   fetch('./products.json')
  //     .then((responce) => responce.json())
  //     .then((data) => this.setState({ products: Object.values(data) }));
  // }
  // render() {
  //   const { products } = this.state;
  //   return (
  //     <main className="container content" >
  //       <Products products={products} />
  //     </main>
  //   );
  // }




  return (
    <div className="App">
      <Products />

    </div>
  );
}

export default App;
