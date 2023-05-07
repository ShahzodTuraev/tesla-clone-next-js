import React from 'react'
import styles from '../styles/Home.module.css'
import Footer from './Footer'

const Accessories = () => {
  return (
    <secton className={styles.section}>
          <div className={styles.textsArea}>
              <h3>Accessories</h3>
          </div>
        <div className={styles.buttons}>
            <div className={styles.btnMain}>
                <a href="#" className={styles.btn}>shop now</a>
            </div>
        </div>
        <Footer/>
    </secton>
  )
}

export default Accessories
