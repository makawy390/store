import { Button,  Container, Grid, Typography } from '@mui/material';
import {useSelector , useDispatch} from 'react-redux'
import { clearAllCart } from '../rtk/cartSlice';
import { AiTwotoneDelete } from 'react-icons/ai'; 
import Cart from '../cart/Cart';
const Shopping = () => {
    const productAdd = useSelector(state => state.product.cartAdd);
    const dispatch = useDispatch()

    const shoppingProduct = productAdd.map(( products)=>(
        <Grid item xs={12} md={3} key={products.id} >
<Cart img={products?.images[0]}  Icon={AiTwotoneDelete}
      products={products.title} title={products.title} 
      iconCondition='del' learnMore='cart'
      price={products.price} id={products.id} />
      </Grid>
    ))
  return (
    <div className='shopping'>
        <Container>
            <Typography variant='h4' component='h3' textAlign='center' >Shopping Cart</Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            {shoppingProduct}
            </Grid>
        <Button className='clear' variant="contained" onClick={()=> dispatch(clearAllCart()) }>Clear All</Button>
        </Container>
    </div>
  )
}

export default Shopping;