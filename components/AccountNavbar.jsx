import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import logo from '../public/images/logo.svg'
import Image from 'next/image';
import { Sidebar } from './Sidebar';
import CloseIcon from '@mui/icons-material/Close'
const AccountNavbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <nav className={styles.navbar}>
        <Link href='/'>
              <Image src={logo} width={130} alt="tesla logo" loading='lazy'/>
        </Link>
        <ul className={styles.navbarNav}>
            <li className={styles.items}>
                <a href='#' className={styles.itemsLink}>Model S</a>
            </li>
            <li className={styles.items}>
                <a href='#' className={styles.itemsLink}>Model 3</a>
            </li>
            <li className={styles.items}>
                <a href='#' className={styles.itemsLink}>Model X</a>
            </li>
            <li className={styles.items}>
                <a href='#' className={styles.itemsLink}>Model Y</a>
            </li>
            <li className={styles.items}>
                <a href='#' className={styles.itemsLink}>Solar Roof</a>
            </li>
            <li className={styles.items}>
                <a href='#' className={styles.itemsLink}>Solar Panels</a>
            </li>
        </ul>
        <div className={styles.menu}>
            <li className={styles.items}>
                <a href='#' className={styles.itemsLink}>Shop</a>
            </li>
            <li className={styles.items}>
                <Link href={'/teslaaccount'}>Account</Link>
            </li>
            <li onClick={showSidebar} className={styles.items}>
                Menu
            </li>
        </div>

        <div className={sidebar ? 'side-menu active' : 'side-menu'}>
            <CloseIcon className='closeIcon' onClick={showSidebar}/>
            <ul className='sideBarNav'>
                {Sidebar.map((item, index)=>{
                    return(
                        <li key={index} className='hamburgerLinks'>
                            <Link href={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default AccountNavbar
