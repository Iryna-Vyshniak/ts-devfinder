import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
