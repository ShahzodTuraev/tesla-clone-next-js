import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../styles/Order.module.css'
import Image from 'next/image';
import {data} from '../components/orderData'
const Order_module = () => {
    console.log(data[2].type);
  return (
    <div>
      <Head>
        <title>Order</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar/>
        <div className={styles.main}>
            <Image src = {data[1].src[0]} alt='model' width={1000}  />
            <div className={styles.textBox}>
                <h2 className={styles.title}>Model Y</h2>
                <p className={styles.deadline}>Est. Delivery: Jun – Jul 2023</p>
                <hr />
                <div className={styles.featureBox}>
                    <div>
                        <p className={styles.feature}>123<span>mi</span></p>
                        <p className={styles.index}>Range</p>
                    </div>
                    <div>
                        <p className={styles.feature}>123<span>mph</span></p>
                        <p className={styles.index}>Top Speed</p>
                    </div>
                    <div>
                        <p className={styles.feature}>123<span>sec</span></p>
                        <p className={styles.index}>0-60 mph</p>
                    </div>
                </div>
                <h4>Dual Motor All-Wheel Drive</h4>
                {
                    data[0].type.map((base)=>{
                        return(
                            <div className={styles.typeBox} key={base.id}>
                                <p className={styles.type}>{base.name}</p>
                                <p className={styles.type}>{base.price}</p>
                            </div>
                        )
                    })
                }
                
            <p>All prices are shown without potential incentives or gas savings of $15,500.</p>
            <button>Continue to Payment</button>
            </div>

        </div>
      <Footer/>
    </div>
  )
}

export default Order_module
