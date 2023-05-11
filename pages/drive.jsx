import React, { useState } from 'react'
import Head from 'next/head';
import styles from '../styles/Drive.module.css'
import Image from 'next/image';
import model_3 from '../public/images/drive page/model 3.jpg'
import model_s from '../public/images/drive page/model S.jpg'
import model_x from '../public/images/drive page/model X.jpg'
import model_y from '../public/images/drive page/model Y.jpg'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const data = [
  {id: 1, name: 'Model S', src: model_s, function: 'onClick2'},
  {id: 2, name: 'Model 3', src: model_3, function: 'onClick1'},
  {id: 3, name: 'Model X', src: model_x, function: 'onClick3'},
  {id: 4, name: 'Model Y', src: model_y, function: 'onClick4'},
]

const Drive = () => {
  const [id, setId] = useState()
  return (
    <>
    <Head>
      <title>Demo Drive | Tesla Clone</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    <div className={styles.container}>
      <h2 className={styles.title}>Schedule a Demo Drive</h2>
      <p className={styles.text}>Demo Drive a Tesla at a store near you. Drivers must have a valid U.S. driver's license and be 18 years of age or older.</p>
      <div className={styles.actionBox}>
        <div className={styles.btnBox}>
        {
          data.map((model)=>(
            <div 
              key={model.id}
              style={id=== model.id? {border: '2px solid #3e6ae1', color: '#171a20', fontWeight: '600'}: {background:'none'}}
              className={styles.btn} 
              onClick={()=>{setId(model.id)}}
            >
              {model.name}
              </div>
          ))
        }
        </div>
        <Image className={styles.image} src={data[id? id-1 : 0 ].src} width={644} alt="tesla" loading='lazy'/>
      </div>
        <h3 className={styles.contactTitle}>Contact Information</h3>
        <form className={styles.contactForm}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name='first-name' />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name='last-name' />
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" name='phone' />
          <label htmlFor="email">Email Address</label>
          <input type="email" name='email' />
          <label htmlFor="zip">Zip Code</label>
          <input type="number" name='zip' />
          <p className={styles.note}>By clicking "Submit and Continue", I authorize Tesla to contact me about this request via the contact information I provide. I understand calls or texts may use automatic or computer-assisted dialing or pre-recorded messages. Normal message and data rates apply. I can opt out at any time in the Tesla app or by unsubscribing. This consent is not required to complete your request. Submit and Continue</p>
          <button >Submit and Continue</button>
        </form>
        </div>
        <Footer/>
    </>
  )
}

export default Drive
