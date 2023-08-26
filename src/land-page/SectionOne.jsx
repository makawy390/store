import { Button, Grid, Typography } from '@mui/material'
// import img from '../assets/gift.png' 
import {useNavigate} from 'react-router-dom'
const SectionOne = () => {
  const navigate = useNavigate();
  return (
    <div className='section-one'>
         <Grid  container>
        <Grid className='back' item xs={12} md={12}>
          <div className='content'>
          <Typography variant='h5' component='h4'>Great products with best deals</Typography>
          <Typography variant='subtitle2' component='p'>No matter how far along you are in your sophistication
           as an amateur astronomer, there is always one.</Typography>
           <Button className='btn' onClick={()=> navigate('/cart')} variant="contained" size="small">View Mor</Button>

          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SectionOne