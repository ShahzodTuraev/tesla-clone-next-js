import React, {useState, useEffect} from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import logo from '../public/images/logo.svg'
import Image from 'next/image';
import { Sidebar } from './Sidebar';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {



    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <nav className={styles.navbar}>
        <Link href='/'>
              <Image src={logo} width={130} alt="tesla logo" loading='lazy'/>
        </Link>
        <ul className={styles.navbarNav}>
            <li className={styles.items}>
                <Link href='/#model_s' className={styles.itemsLink}>Model S</Link>
            </li>
            <li className={styles.items}>
                <Link href='/'  className={styles.itemsLink}>Model 3</Link>
            </li>
            <li className={styles.items}>
                <Link href='/#model_x'  className={styles.itemsLink}>Model X</Link>
            </li>
            <li className={styles.items}>
                <Link href='/#model_y' className={styles.itemsLink}>Model Y</Link>
            </li>
            <li className={styles.items}>
                <Link href='/#solar_roof' className={styles.itemsLink}>Solar Roof</Link>
            </li>
            <li className={styles.items}>
                <Link href='/#solar_panels' className={styles.itemsLink}>Solar Panels</Link>
            </li>
        </ul>
        <div className={styles.menu}>
            <li className={styles.items}>
                <Link href='/shop' className={styles.itemsLink}>Shop</Link>
            </li>
            <li className={styles.items}>
                <Link href={'/sign_in'}>Account</Link>
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

export default Navbar
