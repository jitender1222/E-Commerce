import './App.css';

import {BrowserRouter,Route,Routes } from "react-router-dom";

import Home from './Component/Routes/Home';
import About from './Component/Routes/About';
import Product from './Component/Routes/Product';
import Cart from './Component/Routes/Cart';
import SingleProdcut from './Component/Routes/SingleProduct'
import Contact from './Component/Routes/Contact';
import Error from './Component/Routes/Error';
import Header from './Component/Header/Header';

// import { GlobalStyle } from './Component/Routes/StylesComponent/GlobalStyle';
// import { ThemeProvider } from 'styled-components';

function App() {

  // const theme={
  //   colors:{
  //     bg:"#000"
  //   }
  // }
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/about' element={<About />} ></Route>
    <Route path='/product' element={<Product/>} ></Route>
    <Route path='/contact' element={<Contact />} ></Route>
    <Route path='/singleproduct:id' element={<SingleProdcut />} ></Route>
    <Route path='/cart' element={<Cart />} ></Route>
    <Route path='*' element={<Error />} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
