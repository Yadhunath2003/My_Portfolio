import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:yadhunath2003@email.com">yadhunath2003@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/yadhunath-t">linkedin.com/in/yadhunath-t</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Yadhunath2003">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};