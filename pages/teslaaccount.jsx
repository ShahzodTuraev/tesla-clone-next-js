import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/authUserContext';
import Head from 'next/head';
import styles from '../styles/Account.module.css'
import AccountNavbar from '@/components/AccountNavbar';
import Footer from '@/components/Footer';

const LoggedIn = () => {
    const {authUser, loading, signOut} = useAuth()
    const router = useRouter()
    useEffect(()=>{
        if(!loading && !authUser) 
        router.push('/sign_in')
    }, [authUser, loading])
  return (
    <>
      {
        loading ?
        <p>Loading...</p>
        :
        <>
            <AccountNavbar/>
            <Head>
                <title>Your Account | Tesla Clone</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div className={styles.logInfo}>
                {authUser && <p>You are logged as <b>{authUser.email}'s</b> email</p>}
                <button className={styles.signOutBtn} onClick={signOut}>
                    Sign Out
                </button>
            </div>
            <div className={styles.carPurchase}>
                <img src="/images/modelX.png" alt="Model X" className={styles.modelX} />
                <h1>Model X</h1>
                <div className={styles.btnMain}>
                    <a href='https://www.tesla.com/modelx' className={styles.btn}>
                        order now
                    </a>
                    <a href='/drive' className={styles.btn}>
                        demo drive
                    </a>
                </div>
            </div>
            <Footer/>
        </>
      }
    </>
  )
}

export default LoggedIn
