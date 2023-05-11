import React from 'react'
import styles from '../styles/Solar.module.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import img from '../public/images/solar-dif.jpg'
import Link from 'next/link'
const Solar_panels = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Solar Panels | Tesla Clone</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Navbar/>
        <div className={styles.main}>
            <div className={styles.textBox}>
                <p>Solar Panels</p>
                <h2>Electricity For Less</h2>
                <Image className={styles.imageMobile} src={img} alt='solar img' width={800}/>
                <p>Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Schedule a virtual consultation with a Tesla Advisor to learn more.</p>
                <Link href={'/sign_in'}>
                    <button>Order Now</button>
                </Link>
                <a target='_blank' className={styles.link} href="https://www.tesla.com/solarpanels">Learn More</a>
            </div>
            <Image className={styles.image} src={img} alt='solar img' width={800}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Solar_panels
