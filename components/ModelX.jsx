import React from 'react'
import styles from '../styles/Home.module.css'

const ModelX = () => {
  return (
    <secton className={styles.section}>
            <div className={styles.textsArea}>
                <h3>Module X</h3>
                <p>Order online for <span className={styles.touchless}>Touchless delivery</span></p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>custom order</a>
                </div>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>existing inventory</a>
                </div>
            </div>
      
    </secton>
  )
}

export default ModelX
