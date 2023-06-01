'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

// Icons
import IconLogo from '../../../public/assets/icons/logo.svg';
import IconMenu from '../../../public/assets/icons/menu.svg';

// Components
import { Button } from '@/components/button';

// Styles
import styles from './styles.module.scss';

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const showMobileNavBar = useCallback(() => {
    setShowMobileNav(!showMobileNav);
    console.log(showMobileNav);
  }, [showMobileNav]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={IconLogo} alt="logo" priority />
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li className={styles.navItem}>
            <a href="/">Home</a>
          </li>
          <li>
            <Button text={'Open on GitHub'} href={''} />
          </li>
          <li>
            <a
              onClick={showMobileNavBar}
              href="#"
              className={styles.btn_mobile}
            >
              <Image
                src={IconMenu}
                alt="menu mobile"
                priority
                width={35}
                height={35}
              />
            </a>
          </li>
        </ul>

        <ul
          className={`${styles.navbar_mobile} ${
            showMobileNav
              ? styles.navbar_mobile_visible
              : styles.navbar_mobile_hide
          }`}
        >
          <li className={styles.navItem}>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
