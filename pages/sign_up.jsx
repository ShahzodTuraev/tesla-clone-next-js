import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/authUserContext';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Auth.module.css'

const Register = () => {
  const [email, setEmail] = useState('')  //state for email
  const [passwordOne, setPasswordOne] = useState('') //state for the first password
  const [passwordTwo, setPasswordTwo] = useState('') //state for the confirm password
  const [error, setError] = useState(null) //state for catching errors
  const router = useRouter()

  const {createUserWithEmailAndPassword} =useAuth()

  const onSubmit = event =>{
    setError(null)
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        router.push('/teslaaccount') //direct to the profile
      })
      .catch(error =>{
        setError(error.message)
      })
    else
      setError('Passwords donot match')
      event.preventDefault()
  }

  return (
    <>
    <Head>
      <title>Sign Up | Tesla Clone</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    <div className={styles.login}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.signInText}>Sign Up</h2>
        {error && <h4 className={styles.errorText}>{error}</h4>}
        <label htmlFor='email'>Email Address</label>
        <input type="email" value={email} name='email' onChange={(event)=>setEmail(event.target.value)} className={styles.input}/>
        <label htmlFor='passwordOne'>Password</label>
        <input type="password" value={passwordOne} name='passwordOne' onChange={(event)=>setPasswordOne(event.target.value)} className={styles.input}/>
        <label htmlFor='passwordTwo'>Confirm Password</label>
        <input type="password" name='passwordTwo' value={passwordTwo} onChange={(event)=>setPasswordTwo(event.target.value)} className={styles.input}/>
        <button className={styles.loginBtn}>Create Account</button>
      </form>
      <hr className={styles.line} />
      <div className={styles.signUpArea}>
        <Link href={{pathname: 'sign_in'}}>
          <button className={styles.createAccount}>Sign In</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Register
