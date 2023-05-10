import React from 'react'
import styles from '../styles/Home.module.css'

const SolarRoof = () => {
  return (
    <secton id='solar_roof' className={styles.section}>
            <div className={styles.textsArea}>
                <h3>Solar Roof</h3>
                <p>Produce Clean Energy From Your Roof</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="/sign_in" className={styles.btn}>order now</a>
                </div>
                <div className={styles.btnMain}>
                    <a href="/solar_roof" className={styles.btn}>learn more</a>
                </div>
            </div>
    </secton>
  )
}

export default SolarRoof
