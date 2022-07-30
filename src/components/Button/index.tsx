import styles from './styles.module.scss'

interface ButtonProps {
  title: string;
  outline?: boolean;
  size?: 'sm' | 'md' | 'lg'
  [x: string]: any;
}

export default function Button({ title, outline, size, ...rest }: ButtonProps) {


  return (
    <button
      className={`
        ${styles.button} 
        ${outline ? styles.buttonOutline : ''}
        ${size === 'lg' ? styles.buttonLarge : ''}
      `}
      {...rest}
    >
      {title}
    </button>
  )
}