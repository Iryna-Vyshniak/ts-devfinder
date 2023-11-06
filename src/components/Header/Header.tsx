import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>
        Dev<span>Finder</span>
      </p>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
