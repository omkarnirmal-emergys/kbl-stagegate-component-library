import styles from './Button.module.sass'
type ButtonProps = {
    children: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button}>{props.children}</button>
  )
}