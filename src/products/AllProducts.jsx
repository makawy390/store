import {useState , useEffect} from 'react'
import axios from 'axios';
import './product.css'
import {  Container, Grid, Typography } from '@mui/material';
import Categories from '../category/Categories';
import Cart from '../cart/Cart';
const AllProducts = () => {
    const [products , setProducts] = useState([]);
    function allProduct() {
      axios.get(`https://dummyjson.com/products?limit=100`)
      .then((res)=> setProducts(res.data))
      .catch((error)=> console.log(error))
    }
    useEffect(()=>{
      allProduct();
    },[])

    const resultAll = products?.products?.map((products)=>(
          <Grid item xs={12} md={3} key={products.id} >
      <Cart img={products?.images[0]} 
      products={products} title={products.title} 
      iconCondition='cart' learnMore='cart'
      price={products.price} id={products.id} />
      </Grid>
    ))
  return (
    <div className='all'>
        <Container fixed>
        <Typography variant='h4' component='h3' textAlign='center' >Shopping All Cart</Typography>
        <Categories />
        <div className='all-products'>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {resultAll}
          
            </Grid>
        </div>
        </Container>
    </div>
  )
}
export default AllProducts;