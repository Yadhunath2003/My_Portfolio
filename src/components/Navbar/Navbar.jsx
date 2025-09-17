import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from '../../utils';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={isMenuOpen ? getImageUrl("closeIcon.png") : getImageUrl("menuIcon.png")}
          alt="menu button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <li><a className={styles.link} href="#about">About</a></li>
          <li><a className={styles.link} href="#experience">Experience</a></li>
          <li><a className={styles.link} href="#projects">Projects</a></li>
          <li><a className={styles.link} href="#certifications">Certifications</a></li>
          <li><a className={styles.link} href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
};

