import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerCont}>
                <div className={styles.footerTop}>
                    <div className={styles.footerLinks}>
                        <p>privacy policy</p>
                        <p>terms and conditions</p>
                        <p>press</p>
                        <p>support</p>
                    </div>
                    <div className={styles.footerRight}>
                        <p>2022 Kyra. All right reserved.</p>
                    </div>
                </div>
                <div className={styles.footerLogo}></div>
            </div>
        </div>
    );
}

export default Footer;