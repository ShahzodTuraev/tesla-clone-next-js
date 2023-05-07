import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Shop = () => {
  return (
    <>
      <Navbar/>
      
      <Carousel autoplay>
    <div style={contentStyle}>
      <h3 >1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
      <Footer/>
    </>
  )
}

export default Shop
