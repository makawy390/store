import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../cart/Cart';
import './wishlist.css'
import { clearAllWishList } from '../rtk/wishlist';

const WishList = () => {
    const wishlist = useSelector(state => state.wishlist.wishlistCart);
    const dispatch = useDispatch();

    const wishlistProducts = wishlist.map((wishlist)=>(
        <Grid item xs={12} md={3} key={wishlist.id} >
<Cart img={wishlist?.images[0]} iconCondition='wish'
      products={wishlist.title} title={wishlist.title} 
      price={wishlist.price} id={wishlist.id} />
      </Grid>
    ))
  return (
    <div className='wishlist'>
        <Container>
        <Typography variant='h4' component='h3' textAlign='center' >WishList Cart</Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            {wishlistProducts}
            </Grid>
        <Button  className='clear' variant="contained" onClick={()=> dispatch(clearAllWishList()) }>Clear All</Button>
        </Container>
    </div>
  )
}

export default WishList