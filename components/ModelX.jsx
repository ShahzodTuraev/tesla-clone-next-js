import React from 'react'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
const ModelX = () => {
  const dataId = 2
    function sentProp(){
        Router.push({
            pathname: 'order_model',
            query: {dataId}
        })
    }
  return (
    <secton id='model_x' className={styles.section}>
            <div className={styles.textsArea}>
                <h3>Module X</h3>
                <p>Order online for <span className={styles.touchless}>Touchless delivery</span></p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <p onClick={()=>sentProp()} className={styles.btn}>order now</p>
                </div>
                <div className={styles.btnMain}>
                    <a href="/drive" className={styles.btn}>demo drive</a>
                </div>
            </div>
      
    </secton>
  )
}

export default ModelX
