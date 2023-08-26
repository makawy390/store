import { Button, CardActions, CardContent, Typography } from '@mui/material'
import { AiFillHeart, AiTwotoneDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import './cart.css'
import { addWishList, deleteWishList } from '../rtk/wishlist'
import { addCart, deleteCart } from '../rtk/cartSlice'
import { BsFillCartFill } from 'react-icons/bs'
const Cart = ({id , img , products , title , price  , iconCondition , learnMore}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const funcToast = (item)=>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-start',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mousele ave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: item
          })
    }
      // Add WishList Function handler
      const handlerWishList = (products)=>{
        dispatch(addWishList(products));
        funcToast('Add Cart From WishList ')
            } 
               // Add Cart Function Handler
     const handlerAddCart = (products)=>{
        dispatch(addCart(products));
        funcToast('Add Cart successfully')
            }
            const delCart = (product)=>{
                dispatch(deleteCart(product))
               funcToast('Delete Cart successfully')          
              }
              const delWishlistCart = (product)=>{
                dispatch(deleteWishList(product))
               funcToast('Delete Cart successfully')          
              }

  return (
    <>
    <div className='img'>
<img src={img} className='img-fluid'/> 
      <AiFillHeart onClick={()=> handlerWishList(products)} />
      </div>     
<CardContent>
<Typography gutterBottom variant="body2"  component="h6">
    {title}
  </Typography>
  <div className='flex'>
  <Typography variant="body2" color="text.secondary">
 $ {price}
  </Typography>
  {iconCondition === "cart"? 
  <BsFillCartFill onClick={()=> handlerAddCart(products)} />
  :
  iconCondition === 'del'? 
  <AiTwotoneDelete onClick={()=> delCart(products)} />
  :
  <AiTwotoneDelete onClick={()=> delWishlistCart(products)} />
}
  </div>
</CardContent>
<CardActions>
{learnMore === 'cart'?
  <Button size="small" onClick={()=> navigate(`/cart/${id}`)}>Learn More</Button>
  :
  ''
}
</CardActions>
</>
  )
}
export default Cart;