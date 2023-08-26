import Swal from 'sweetalert2'
import { CardActions,Button ,CardContent, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { addCart } from '../rtk/cartSlice';
import './category.css'
import Cart from '../cart/Cart';
const Category = () => {
    const {id} = useParams();
    const [product , setProduct] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    },[id])
    const resultProductFromCategory = product?.products?.map(( products)=>(
        <Grid item xs={12} md={3} key={products.id} >
            <Cart img={products?.images[0]} 
      products={products} title={products.title} 
      iconCondition='cart' learnMore= 'cart'
      price={products.price} id={products.id} />  
          </Grid>

    ))
  return (
    <div className='category'>
        <Container>
            <Typography variant='h3' component='h4'>{id}</Typography>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            {resultProductFromCategory}
            </Grid>
        </Container>
    </div>
  )
}

export default Category;