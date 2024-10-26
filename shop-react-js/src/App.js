import logo from './logo.svg';
import { fetchingProducts } from './SHOP/store/CardSlicer';
import Products from './SHOP/Products';
import { productData } from './SHOP/dataPr';
import { Provider } from 'react-redux';
import { store } from './SHOP/store/store';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductCart from './SHOP/ProductCart';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Provider store={store}><Products /></Provider>} />
          <Route path='/productCart' element={<Provider store={store}><ProductCart /></Provider>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
