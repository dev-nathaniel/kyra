import styles from './Review.module.css'

const Review = ({review, company}) => {
    return (
        <div className={styles.review}>
            <div className={styles.reviewCont}>
                <p>"{review}"</p>
                {/* <img src={company} /> */}
            </div>
        </div>
    );
}

export default Review;