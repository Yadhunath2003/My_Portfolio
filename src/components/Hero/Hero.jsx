import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yadhunath</h1>
        <p className={styles.description}>
          Computer Science major at the University of Kansas with a passion for 
          building innovative and scalable solutions. My experience spans full-stack development, data engineering, 
          and analytics, where I’ve worked on projects that combine backend systems, cloud platforms, and data pipelines 
          to deliver real-world impact.
        </p>
        <a href="mailto:yadhunath2003@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("data_engr.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};