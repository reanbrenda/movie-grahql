'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../app/styles/NavBar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/" className={styles.brandLink}>
          Movie List App
        </Link>
      </div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
