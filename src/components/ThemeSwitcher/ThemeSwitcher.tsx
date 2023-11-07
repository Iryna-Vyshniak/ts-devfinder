import { useEffect, useState } from 'react';
import MoonIcon from '../../assets/icon-moon.svg?react';
import SunIcon from '../../assets/icon-sun.svg?react';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(true);
  const textTheme = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <div className={styles.switcher} onClick={toggleTheme}>
      <span>{textTheme}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
