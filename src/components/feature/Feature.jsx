import {AiOutlinePlus} from 'react-icons/ai'
import styles from './Feature.module.css'

const Feature = ({text}) => {
    return (
        <div className={styles.feature}>
            <div className={styles.featureCont}>
                <p>{text}</p>
                <AiOutlinePlus />
            </div>
        </div>
    );
}

export default Feature;