import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={`${styles.title} ${styles.reveal} ${styles.delay1}`}>
        Hi, I'm Yadhunath
      </h1>

      <p className={`${styles.description} ${styles.reveal} ${styles.delay2}`}>
      A first-year Master’s student in Computer Science focused on data engineering and machine learning, 
      and I’m currently seeking internship opportunities. I design and maintain ETL pipelines, work with large-scale datasets, 
      and build predictive models using Python and SQL to support analytics and real-time data systems. 
      Outside of coursework, I enjoy building web development and machine learning projects that turn ideas into practical, working products.
      </p>
        <a href="mailto:yadhunath2003@gmail.com" className={`${styles.contactBtn} ${styles.reveal} ${styles.delay3}`}>
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