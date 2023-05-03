import React from 'react'
import styles from '../styles/Home.module.css'
import {Reveal} from 'react-reveal'

const ModelS = () => {
  return (
    <secton className={styles.section}>
         <Reveal effect='fadeInUp'>
            <div className={styles.textsArea}>
                <h3>Module S</h3>
                <p>Order online for <span className={styles.touchless}>Touchless delivery</span></p>
            </div>
         </Reveal>
         <Reveal effect='fadeInUp2'>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>custom order</a>
                </div>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>existing inventory</a>
                </div>
            </div>
         </Reveal>
    </secton>
  )
}

export default ModelS
