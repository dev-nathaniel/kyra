import { campaigns } from '@/data'
import styles from './CampaignSection.module.css'
import Campaign from '../campaign/Campaign'

const pills = [
    'ebay',
    'linkedin',
    'lancome',
    'colourpop',
    'vita coco'
]

const Pill = ({text}) => {
    return (
        <a href={`#${text}`} className={styles.pill}>
            <p>{text}</p>
        </a>
    )
}

const CampaignSection = () => {
    return (
        <div className={styles.campaignSection}>
            <div className={styles.campaignSectionCont}>
                <div className={styles.campaignHead}>
                    <p className={styles.campaignHeadP}>unlock your creative marketing potential: connect with creators and drive impactful results.</p>
                    <div className={styles.campaignPills}>
                    {pills.map((pillText, index) => (
                        <Pill text={pillText} />
                    ))}
                    </div>
                </div>
                <div className={styles.campaignsCont}>
                    {campaigns.map((campaign, index)=> (
                        <Campaign {...campaign} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CampaignSection;