
import React from 'react'
import {MdLocalShipping} from 'react-icons/md'
import {Grid, Typography} from '@mui/material'
import {FaAward} from 'react-icons/fa'
import {GiTrophy} from 'react-icons/gi'
const SectionTwo = () => {
    const section = [
        {icon : <MdLocalShipping /> , text : "Free Shipping & Returns" },
        {icon : <FaAward /> , text : "Lowest Price Guarantee" },
        {icon : <GiTrophy /> , text : "Longest Warranties Offer" }

    ]
  return (
    <div className='section-2'>
        <Grid container>
          {section.map(({icon , text} , id)=> (
              <Grid item md={4} xs={12} spacing={2} key={id}>
                <div className='content'>
                {icon} <Typography variant='h6' component='span'>{text}</Typography>

                </div>
              </Grid>
  
          ))}
        </Grid>
    </div>
  )
}

export default SectionTwo