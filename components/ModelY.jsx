import React from 'react'
import styles from '../styles/Home.module.css'

const ModelY = () => {
  return (
    <secton id='model_y' className={styles.section}>
            <div className={styles.textsArea}>
                <h3>Module Y</h3>
                <p>Order online for <span className={styles.touchless}>Touchless delivery</span></p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.btn}>order now</a>
                </div>
                <div className={styles.btnMain}>
                    <a href="/drive" className={styles.btn}>demo drive</a>
                </div>
            </div>
    </secton>
  )
}

export default ModelY
