import Navbar from "../navbar/Navbar";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Navbar />
            <div className={styles.headerCont}>
                    <img className={styles.headerBg} src="/headerImg.png" />
                <div className={styles.headerP}>
                    <p style={{fontWeight: '100'}}>authentically</p>
                    <p style={{fontStyle: 'italic', fontWeight: '500'}}>connect</p>
                    <p style={{fontWeight: '100'}}>with the next</p>
                    <p style={{fontStyle: 'italic', fontWeight: '500'}}>generation</p>
                </div>
                <a className={styles.headerButton}>
                    sign up today
                </a>
            </div>
        </div>
    );
}

export default Header;