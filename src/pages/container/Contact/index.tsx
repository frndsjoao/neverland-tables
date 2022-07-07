import styles from './styles.module.scss'

export default function Contact() {
  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.contactBg} />

      <div className={styles.contactContent}>
        <div className={styles.contactMail}>
        </div>

        <div className={styles.contactContent}>
        </div>
      </div>
    </div>
  )
}