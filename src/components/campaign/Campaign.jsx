import { useEffect, useState } from 'react';
import styles from './Campaign.module.css'

const Campaign = ({img, engagements, views, logo, tag, desc, reverse, id}) => {
    const [small, setSmall] = useState(false)
    const handleResize = () => {
        if (window.innerWidth <= 700) {
            setSmall(true)
        } else {
            setSmall(false)
        }
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })
    return (
        <div id={id} className={styles.campaign}>
            <div style={{flexDirection: small ? 'column' : reverse ? 'row-reverse' : null}} className={styles.campaignCont}>
                <div className={styles.campaignLeft}>
                    <div className={styles.leftImg}>
                        <img src={img} />
                    </div>
                    <div className={styles.campaignAbsolute1}>
                        <p>{`${views}`}</p>
                    </div>
                    <div className={styles.campaignAbsolute2}>
                        <p>{`${engagements}`}</p>
                    </div>
                </div>
                <div className={styles.campaignRight}>
                    <div className={styles.campaignRightCont}>
                    {/* <div>
                        <img src={logo} />
                    </div> */}
                    <p className={styles.tag}>{tag}</p>
                    <p className={styles.desc}>{desc}</p>
                    <div className={styles.campaignButton}>
                        <div>
                        <p>sign up today</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Campaign;