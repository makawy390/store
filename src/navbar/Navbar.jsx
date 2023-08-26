import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useSelector } from 'react-redux';
import {Container, Typography} from '@mui/material'
import './nav.css'
import {AiOutlineClose , AiOutlineHeart} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImLinkedin} from 'react-icons/im'
import { PiWhatsappLogoDuotone} from 'react-icons/pi'
import {BiLogoGmail} from 'react-icons/bi'
import { FaShoppingCart  } from 'react-icons/fa';
// import { formAuth } from '../rtk/login';
const Navbar = () => {
  const arr = [
    {name : 'Home' , link : '/'},
    {name : 'All Cart' , link : '/cart'},
  ];

  const amountItem = useSelector (state => state.product.amountItem);
  const wishlist = useSelector (state => state.wishlist.wishlist);
  const [active , setActive] = useState(false)
  const handlerActive = ()=>{
    setActive(!active);
  }
  const listNav = arr.map(({name , link},id)=>(
    <li key={id}><NavLink to={link}>{name}</NavLink> </li>
  ))
  return (
    <>
    <div className='nav-bar'>
      <Container>
        
       <div className='toggle'>
       {active? 
      <AiOutlineClose  onClick={()=> handlerActive()} />
        :
      <GiHamburgerMenu  onClick={()=> handlerActive()} />
      }
       </div>
        <section className={`navigate ${active? 'active' : ''} `}>
        <Typography variant="h6" component="h5"> Store <FaShoppingCart /> </Typography>
        <ul className='list'>    
   {listNav}
   <li className='cart' ><NavLink to='/shopping'>Cart <FaShoppingCart /> </NavLink> </li>
   <li ><NavLink to='/wishlist'>Wishlist<AiOutlineHeart /> </NavLink> </li>

    <li><Link to='https://www.linkedin.com/in/mohamed-makawy-5b6b0723a' target='_blank'> <ImLinkedin />  </Link> </li>
        <li><Link to='tel:155-524-5948' target='_blank'> <PiWhatsappLogoDuotone /> </Link> </li>
        <li><Link to='mailto:moohesham83@gmail.com?subject=Contact' target='_blank'> <BiLogoGmail /> </Link> </li>
        <li><section className='count'>{amountItem}</section></li>
          <li>
   <section className='count-two'>{wishlist}</section>
   </li>
        </ul>
        </section>
      </Container>
      </div>
    </>
  )
}
export default Navbar