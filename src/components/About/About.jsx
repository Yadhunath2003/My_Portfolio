import React from 'react';
import './About.module.css';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("Profile_pic.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Development</h3>
              <br/>
              <p>
              I enjoy building end-to-end applications using frameworks like Django, React, and Node.js, with a focus on 
              creating seamless user experiences backed by efficient APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineering</h3>
              <br/>
              <p>
                I’m passionate about designing pipelines and databases that keep data flowing reliably. 
                I’ve worked with Apache Airflow, Kafka, PostgreSQL, and AWS to handle real-time processing and scalable systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analytics</h3>
              <br/>
              <p>
              I like turning raw data into actionable insights. Using Python, SQL, and R, 
              I’ve analyzed large datasets, created dashboards, and developed visualizations that support smarter decisions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};