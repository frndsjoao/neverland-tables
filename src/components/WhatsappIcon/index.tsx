import { ImWhatsapp } from 'react-icons/im'
import styles from './styles.module.scss'

export default function WhatsappIcon() {
  return (
    <div className={styles.container}>
      <a
        href="https://api.whatsapp.com/send?1=pt_BR&phone=5512988130420&text=Olá Bruno! Gostaria de solicitar um orçamento por favor."
        target="_blank" rel="noreferrer"
      >
        <ImWhatsapp />
      </a>
    </div>
  )
}