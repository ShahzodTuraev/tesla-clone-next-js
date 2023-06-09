import React from 'react'
import styles from '../styles/Home.module.css'

const SolarPanels = () => {
  return (
    <secton id='solar_panels' className={styles.section}>
            <div className={styles.textsArea}>
                <h3>Solar Panels</h3>
                <p>Lowest Cost Solar Panels in America</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="/sign_in" className={styles.btn}>order now</a>
                </div>
                <div className={styles.btnMain}>
                    <a href="/solar_panels" className={styles.btn}>learn more</a>
                </div>
            </div>
    </secton>
  )
}

export default SolarPanels
