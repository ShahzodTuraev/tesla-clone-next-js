import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
const Header = () => {
  return (
    <secton className={styles.section}>
        <Navbar/>
        <div className='fadeInUp'>
            <div className={styles.textsArea}>
                <h3>Module 3</h3>
                <p>Order online for <span className={styles.touchless}>Touchless delivery</span></p>
            </div>
        </div>
        <div className='fadeInUp2'>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>custom order</a>
                </div>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>existing inventory</a>
                </div>
            </div>
        </div>
            <img src="/images/down-arrow.svg" className={styles.downIcon} alt="down icon" />
      
    </secton>
  )
}

export default Header
