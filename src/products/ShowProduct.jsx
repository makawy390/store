import { Box, Button, ButtonGroup, Container, Grid, Rating, Typography } from '@mui/material'
import {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios  from 'axios'
import Swal from 'sweetalert2'
import { useDispatch , useSelector } from 'react-redux';
import { addCart, decreaseQuantity, increaseQuantity } from '../rtk/cartSlice'

const ShowProduct = () => {   
      const {id} = useParams();
const [product,setProduct] = useState([]);
const quantity = useSelector(state => state.product.quantity)

console.log(quantity);
useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then((res)=> setProduct(res.data))
    .catch(error => console.log(error))
},[])
const dispatch = useDispatch()
const handlerAddCart = (products)=>{
  dispatch(addCart(products));
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Add Cart successfully'
  })
      }
      
  return (
    <div className='product-show'>
        <Container>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}  md={6}>
        <img src={product?.images?.[0]} className='image img-fluid' />
        </Grid>
        <Grid item xs={12} md={6}  >
          <Typography variant='h5' component='h6'> {product.title}</Typography>
          <Rating name="size-medium" size="small"  defaultValue={product?.rating?.rate} />
          <Typography variant='subtitle1' component='h6'> {product.description}</Typography>
          <Typography variant='h6' component='h6'>$ {product.price}</Typography>
          <ButtonGroup variant="outlined" aria-label="text button group">
            <Typography variant='h6' component='span' paddingRight={2}> Quantity   </Typography>
  <Button onClick={()=> dispatch(increaseQuantity()) }>+</Button>
  <Button>{quantity}</Button>
  <Button onClick={()=> dispatch(decreaseQuantity())}>-</Button>
</ButtonGroup><br/>
<Typography variant='h6' component='span' paddingRight={2}> Total Price :   $ {`${product.price * quantity}`}   </Typography>

          <Grid container spacing={4} mt={0}>
            <Grid item xs={4}>
                <button className='add' onClick={()=> handlerAddCart(product)}>Add Cart</button>
            </Grid>
            <Grid item xs={4}>
                <button className='buy'>Buy Now</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>  

        </Container>
    </div>
  )
}

export default ShowProduct