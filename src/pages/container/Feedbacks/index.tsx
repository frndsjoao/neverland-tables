import styles from './styles.module.scss'

import FeedbackCarousel from '../../../components/Carousel';

export default function Feedback() {
  return (
    <div id="feedback" className={styles.feedbackContainer}>
      <div className={styles.feedbackWrapper}>
        <h2>O que falam sobre nós:</h2>

        <FeedbackCarousel />
      </div>
    </div>
  )
}