import { features } from "@/data";
import Feature from "../feature/Feature";
import styles from './FeaturesSection.module.css'

const FeaturesSection = () => {
    return (
        <div className={styles.featuresSection}>
            <div className={styles.featuresSectionCont}>
                <p className={styles.featuresHead}>our new creator platform</p>
                <div className={styles.featuresContent}>
                    <div className={styles.contentLeft}>
                        <p className={styles.contentHead}>solving your creator marketing issues all at once</p>
                        <div className={styles.featuresCont}>
                            {features.map((feature, index) => (
                                <Feature {...feature} />
                            ))}
                        </div>
                        <div className={styles.featuresButton}>
                            <p>request a demo</p>
                        </div>
                    </div>
                    <div className={styles.contentRight}>
                        <div className={styles.rightImg}>
                        <img src="/features.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;