// Styles
import styles from './styles.module.scss';

interface ButtonProps {
  text: string;
  href: string;
}
function Button({ text, href }: ButtonProps) {
  return (
    <a href={href} className={styles.button}>
      {text}
    </a>
  );
}

export { Button };
