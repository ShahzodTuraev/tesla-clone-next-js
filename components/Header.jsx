import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Router from 'next/router'

const Header = () => {
    const dataId = 0
    function sentProp(){
        Router.push({
            pathname: 'order_model',
            query: {dataId}
        })
    }
    const onScroll =()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
  return (
    <secton className={styles.section}>
            <Navbar/>
        <div className='fadeInUp'>
            <div className={styles.textsArea}>
                <h3>Module 3 </h3>
                <p>Order online for <span className={styles.touchless}>Touchless delivery</span></p>
            </div>
        </div>
        <div className='fadeInUp2'>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <p onClick={()=>sentProp()} className={styles.btn}>order now</p>
                </div>
                <div className={styles.btnMain}>
                    <a href="/drive" className={styles.btn}>demo drive</a>
                </div>
            </div>
        </div>
            <img src="/images/down-arrow.svg" className={styles.downIcon} alt="down icon" />
            <div onClick={onScroll} className={styles.topIcon}>
                <img src="/icons/top-direct.svg" alt="top icon" />
            </div>
      
    </secton>
  )
}

export default Header
