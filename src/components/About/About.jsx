import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            About <span className={styles.gradientText}>Me</span>
          </h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.grid}>
          {/* Left: image card with badge */}
          <div className={styles.leftCol}>
            <div className={styles.photoCard}>
              <img
                src={getImageUrl("Profile_pic.jpg")} /* replace with your asset */
                alt="About"
                className={styles.photo}
              />
              <div className={styles.photoBadge}>
                <div className={styles.photoBadgeInner}>
                  {/* graduation-cap */}
                  <svg viewBox="0 0 24 24" className={styles.iconLg} aria-hidden="true">
                    <path fill="currentColor" d="M12 3l10 4-10 4L2 7l10-4zm6 6.2V12c0 2.2-2.7 4-6 4s-6-1.8-6-4V9.2l6 2.4 6-2.4zM4 14h2c.5 1.8 3 3 6 3s5.5-1.2 6-3h2c-.6 3-4 5-8 5s-7.4-2-8-5z"/>
                  </svg>
                </div>
                <p className={styles.badgeTitle}>Computer Science</p>
                <p className={styles.badgeSub}>University of Kansas</p>
              </div>
            </div>
          </div>

          {/* Right: text content */}
          <div className={styles.rightCol}>
            <h3 className={styles.leadTitle}>
              Data Engineering &amp; Full-Stack Development Enthusiast
            </h3>
            <p className={styles.leadPara}>
              I'm a passionate Computer Science graduate with a certification in Cybersecurity. With over
              3 years of professional experience, I've developed expertise in building secure web applications
              while implementing robust security measures to protect against vulnerabilities.
            </p>

            {/* Two-column bullet features */}
            <div className={styles.pointsGrid}>
              <div>
                <p className={styles.point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg>
                  </span>
                  Full-Stack Development
                </p>
                <p className={styles.point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg>
                  </span>
                  Data Engineering
                </p>
                <p className={styles.point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg>
                  </span>
                  Cloud Computing
                </p>
              </div>
              <div>
                <p className={styles.point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg>
                  </span>
                  Data Analysis
                </p>
                <p className={styles.point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg>
                  </span>
                  Data Warehousing
                </p>
                <p className={styles.point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg>
                  </span>
                  Data Pipeline and Streaming construction.
                </p>
              </div>
            </div>

            {/* Contact info chips */}
            <div className={styles.chips}>
              <div className={styles.chip}>
                <span className={styles.chipIcon} aria-hidden="true">
                  {/* map-marker */}
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.7 2 6 4.7 6 8c0 5.3 6 12 6 12s6-6.7 6-12c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5s2.5 1.1 2.5 2.5S13.4 10.5 12 10.5z"/></svg>
                </span>
                <span>Overland Park, KS</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipIcon} aria-hidden="true">
                  {/* envelope */}
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <span>yadhunath2003@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
