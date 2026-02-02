import React from "react";

import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";

// near the top of the file
const resolveImg = (path) =>
  /^https?:\/\//i.test(path) ? path : getImageUrl(path);

export const Experience = () => {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            My <span className={styles.gradientText}>Experience</span>
          </h2>
          <div className={styles.underline} />
        </div>

        {/* ——— Top: Tech Stack ——— */}
        <div className={styles.block}>
          <h3 className={styles.subTitle}>Tech Stack</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, idx) => (
              <div key={idx} className={styles.skillCard}>
                <img
                  src={resolveImg(skill.imageSrc)}
                  alt={skill.title}
                  className={styles.skillIcon}
                />
                <span className={styles.skillLabel}>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ——— Bottom: Work History ——— */}
        <div className={styles.block}>
          <h3 className={styles.subTitle}>Work History</h3>
          <div className={styles.historyList}>
            {history.map((item, idx) => (
              <article key={idx} className={styles.historyCard}>
                <div className={styles.historyHeader}>
                  <h4 className={styles.role}>{item.role}</h4>
                  <span className={styles.datePill}>
                    {item.startDate} {item.endDate}
                  </span>
                </div>

                <div className={styles.orgRow}>
                  <img
                    src={getImageUrl(item.imageSrc)}
                    alt={`${item.organisation} logo`}
                    className={styles.orgLogo}
                  />
                  <span className={styles.orgName}>{item.organisation}</span>
                </div>

                <ul className={styles.bullets}>
                  {item.experiences.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
