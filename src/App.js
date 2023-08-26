import './App.css';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import AllProducts from './products/AllProducts';
import NotFound from './not-found/NotFound';
import Landing from './land-page/Landing';
import ShowProduct from './products/ShowProduct';
import Shopping from './products/Shopping';
import Category from './category/Category';
import WishList from './wishlist/WishList';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route  path='/' Component={Landing} /> 
      <Route  path='/cart' Component={AllProducts} />
      <Route  path='/cart/:id' Component={ShowProduct} /> 

      <Route  path='/shopping' Component={Shopping} />
      <Route  path='/wishlist' Component={WishList} />

      <Route  path='/categories/:id' Component={Category} />  


      <Route  path='*' Component={NotFound} />   
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
