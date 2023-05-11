import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head';
import src1 from '../public/images/shop/pet.avif'
import src2 from '../public/images/shop/wall.avif'
import src3 from '../public/images/shop/all.avif'
import src4 from '../public/images/shop/glass.avif'
import src5 from '../public/images/shop/air.avif'
import src6 from '../public/images/shop/charging.avif'
import src7 from '../public/images/shop/key.avif'
import src8 from '../public/images/shop/mud.avif'
import styles from '../styles/Shop.module.css'
import Image from 'next/image';
const Shop = () => {
  const items = [
    {id: 1, src: src1, title: 'Model S/3/Y Pet Liner'},
    {id: 2, src: src2, title: 'Wall Connector'},
    {id: 3, src: src3, title: 'Model 3 All-Weather Interior Liners'},
    {id: 4, src: src4, title: 'Model Y Glass Roof Sunshade'},
    {id: 5, src: src5, title: 'Model 3/Y Air Filter'},
    {id: 6, src: src6, title: 'SAE J1772 Charging Adapter'},
    {id: 7, src: src7, title: 'Model 3/Y Key Fob'},
    {id: 8, src: src8, title: 'Model Y Mud Flaps'},
  ];
  const onClick = () =>{
    window.open('https://shop.tesla.com/', '_blank')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Shop | Tesla Clone</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar/>
      <div className={styles.main}>
        {
          items.map((item)=>{
            return(
              <div onClick={onClick} key={item.id} className={styles.box}>
                  <Image src={item.src} width = {300} alt='pict'/>
                  <h4>{item.title}</h4>
              </div>
            )
          })
        }
      </div>
      
      
      <Footer/>
    </div>
  )
}

export default Shop
