import styles from './Button.module.scss'

interface ButtonProps {
  title: string
  buttonStyle?: CSSModuleClasses[string]
}

const Button: React.FC<ButtonProps> = ({ title, buttonStyle }) => {
  return (
    <button className={buttonStyle ? styles[buttonStyle] : styles.button}>
      {title}
    </button>
  )
}

export default Button
