import { reviews } from "@/data";
import Review from "../review/Review";
import styles from './ReviewSection.module.css'

const ReviewSection = () => {
    return (
        <div className={styles.reviewSection}>
            <div className={styles.reviewSectionCont}>
                <div style={{fontStyle: 'italic', fontWeight: '500'}} className={styles.reviewSectionHead}><p>trusted by world's top brands</p></div>
                {/* <div className={styles.reviewSectionCompanies}>
                    <div>
                        <img />
                    </div>
                    <div>
                        <img />
                    </div>
                    <div>
                        <img />
                    </div>
                    <div>
                        <img />
                    </div>
                </div> */}
                <div className={styles.reviews}>
                    {reviews.map((review, index) => (
                        <Review {...review} />
                    ))}
                </div>
                <div className={styles.reviewsButtonCont}>
                    <div className={styles.reviewsButton}>
                        <p>sign up today</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewSection;