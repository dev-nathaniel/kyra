import styles from './CallToAction.module.css'

const CallToAction = () => {
    return (
        <div className={styles.CTA}>
            <div className={styles.CTACont}>
                <div style={{fontStyle: 'italic'}} className={styles.CTAHeader}><p>want to start making an impact?</p></div>
                <div className={styles.CTADesc}><p>The world's best brands trust Kyra. Whether it's activating your 
                    next big launch, creating authentic content to fuel your 
                    performance markerting, or reacting to the latest brand-relevant trend, Kyra for Brands makes it possible.
                </p></div>
                <div className={styles.CTAButton}>
                    <p>sign up today</p>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;