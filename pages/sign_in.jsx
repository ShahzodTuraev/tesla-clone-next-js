import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/authUserContext';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Auth.module.css'

const Login = () => {
  const [email, setEmail] = useState('')  //state for email
  const [password, setPassword] = useState('') //state for the first password
  const [error, setError] = useState(null) //state for catching errors
  const router = useRouter()

  const {signInWithEmailAndPassword} =useAuth()
// draft 
  const onSubmit = event =>{
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
        router.push('/teslaaccount') //direct to the profile
      })
      .catch(error =>{
        setError(error.message)
      })
      event.preventDefault()
  }

  return (
    <>
    <Head>
      <title>Sign In</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    <div className={styles.login}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.signInText}>Sign In</h2>
        {error && <h4 className={styles.errorText}>{error}</h4>}
        <label htmlFor='email'>Email Address</label>
        <input type="email" value={email} name='email' onChange={(event)=>setEmail(event.target.value)} className={styles.input}/>
        <label htmlFor='password'>Password</label>
        <input type="password" value={password} name='password' onChange={(event)=>setPassword(event.target.value)} className={styles.input}/>
        <button className={styles.loginBtn}>Log In</button>
      </form>
      <hr className={styles.line} />
      <div className={styles.signUpArea}>
        <Link href={{pathname: 'sign_up'}}>
          <button className={styles.createAccount}> create account</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Login
