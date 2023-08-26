import React from 'react'
import './landing.css'
import {  Container } from '@mui/material'

import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionProducts from './SectionProducts'
const Landing = () => {
  
  return (
    <div className='landing'>
      <Container fixed>
        <SectionOne />
        <SectionTwo />
        <SectionProducts />
      </Container>
    </div>
  )
}

export default Landing