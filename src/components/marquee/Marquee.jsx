import styles from './Marquee.module.css'

const Marquee = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.marqueeCont}>
                <div className={styles.marquee_inner} aria-hidden='true'>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    <span>scroll</span>
                    {/* <span>WORKS</span> */}
                </div>
            </div>
        </div>
    );
}

export default Marquee;