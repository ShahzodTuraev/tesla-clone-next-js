import React from 'react'
import styles from '../styles/Solar.module.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import img from '../public/images/roof-dif.jpg'
import Link from 'next/link'
const Solar_panels = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Solar Panels | Tesla Clone</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Navbar/>
        <div className={styles.main}>
            <div className={styles.textBox}>
                <p>Solar Roof</p>
                <h2>Protection Against Outages</h2>
                <Image className={styles.imageMobile} src={img} alt='solar img' width={800}/>
                <p>Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.</p>
                <Link href={'/sign_in'}>
                    <button>Order Now</button>
                </Link>
                <a target='_blank' className={styles.link} href="https://www.tesla.com/solarroof">Learn More</a>
            </div>
            <Image className={styles.image} src={img} alt='solar img' width={800}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Solar_panels
