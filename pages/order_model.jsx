import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../styles/Order.module.css'
import Image from 'next/image';
import {data} from '../components/orderData'
import { useRouter } from 'next/router';
import Link from 'next/link';

const order_model = () => {
    // Catching Model Id
    const router =useRouter()
    const {query: {dataId}} = router
    const prop = {dataId}
    const point =prop.dataId?prop.dataId:0
    // Feature Id State
    const [fId, setFId] = useState()
    // Image Prev & Next Buttons' Function
    const [img, setImg] = useState(0)
    const [visible, setVisible] = useState('')
    const onLeft= () => {
        if(img === 0)setImg(2)
        if(img === 1)setImg(0)
        if(img === 2)setImg(1)
    }
    const onRight= () => {
        if(img === 0)setImg(1)
        if(img === 1)setImg(2)
        if(img === 2)setImg(0)
    }
    const mouseEnter = () => {
        setVisible('block')
    }
    const mouseLeave = () => {
        setVisible('none')
    }
  return (
    <div>
      <Head>
        <title>Order | Tesla Clone</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar/>
        <div className={styles.main}>
            <div className={styles.image}>
                <Image onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}  src = {data[point].src[img]} alt='model' className={styles.images} width={800}  />
                <img onMouseEnter={mouseEnter} style={{display: visible}} onClick={onLeft} className={styles.left} src="/icons/left-dir.svg" alt="left" />
                <img onMouseEnter={mouseEnter} style={{display: visible}} onClick={onRight} className={styles.right} src="/icons/right-dir.svg" alt="right" />
            </div>
            <div className={styles.textBox}>
                <h2 className={styles.title}>{data[point].name}</h2>
                <p className={styles.deadline}>Est. Delivery: Jun – Jul 2023</p>
            
            <div className={styles.imageMobile}>
                <Image onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}  src = {data[point].src[img]} alt='model' className={styles.images} width={800}  />
                <img onMouseEnter={mouseEnter} style={{display: visible}} onClick={onLeft} className={styles.left} src="/icons/left-dir.svg" alt="left" />
                <img onMouseEnter={mouseEnter} style={{display: visible}} onClick={onRight} className={styles.right} src="/icons/right-dir.svg" alt="right" />
            </div>
            
                <hr />
                <div className={styles.featureBox}>
                    <div>
                        <p className={styles.feature}>{data[point].type[fId?fId-1:0].mi}<span>mi</span></p>
                        <p className={styles.index}>Range</p>
                    </div>
                    <div>
                        <p className={styles.feature}>{data[point].type[fId?fId-1:0].mph}<span>mph</span></p>
                        <p className={styles.index}>Top Speed</p>
                    </div>
                    <div>
                        <p className={styles.feature}>{data[point].type[fId?fId-1:0].sec}<span>sec</span></p>
                        <p className={styles.index}>0-60 mph</p>
                    </div>
                </div>
                <h4>Dual Motor All-Wheel Drive</h4>
                {
                    data[point].type.map((base)=>{
                        return(
                            <div className={styles.typeBox}
                            style={fId === base.id ? {border: '3px solid #3e6ae1'}:{borderWidth: '1px'}}
                            key={base.id}
                            onClick={()=>{setFId(base.id)}}>
                                <p className={styles.type}>{base.name}</p>
                                <p className={styles.type}>{base.price}</p>
                            </div>
                        )
                    })
                }
                
            <p className={styles.index}>All prices are shown without potential incentives or gas savings of $15,500.</p>
            <Link href='sign_in'><button>Continue to Payment</button></Link>
            </div>

        </div>
      <Footer/>
    </div>
  )
}

export default order_model
