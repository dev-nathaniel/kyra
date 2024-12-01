import { useState } from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const buttonClick = () => {
        setMenu(!menu)
    }
    return (
        <>
        {menu ? <div className={styles.menu}>
                        <div className={styles.menuCont}>
                            <p>brands</p>
                            <p>creators</p>
                            <p>careers</p>
                        </div>
                    </div> : null}
        <div className={styles.navbar}>
            
            <div className={styles.navbarCont}>
                <div className={styles.navLogo}>
                    <img src='/logo.svg' />
                </div>
                <div className={styles.navLinks}>
                    <span>brands</span>
                    <span>creators</span>
                    <span>careers</span>
                </div>
                    <div onClick={buttonClick} className={`${styles.menuButton} ${menu ? styles.menuExit : null}`}>
                        {menu ? 
                        <>
                        <div></div>
                        <div></div>
                        </>
                        :
                        <>
                        <div></div>
                        <div></div>
                        <div></div>
                        </>}
                    </div>
                    
            </div>
        </div>
        </>
    );
}

export default Navbar;