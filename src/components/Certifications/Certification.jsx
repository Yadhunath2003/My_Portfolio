import React from "react";
import styles from "./Certification.module.css";
import certs from "../../Data/certifications.json";
import awards from "../../Data/awards.json";

const Icon = ({ name }) => {
  // tiny inline icon set (no external libs)
  switch (name) {
    case "shield":
      return <svg viewBox="0 0 24 24"><path fill="Red" d="M3 20h3v-4H3zM8 20h3v-8H8zM13 20h3v-12h-3zM18 20h3v-16h-3z"/></svg>;
    case "aws":
      return <svg viewBox="0 0 24 24"><path fill="#8b5cf6" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 8.69 4 5.86 6.64 5.36 9.86 3.35 10.28 2 11.99 2 14c0 2.21 1.79 4 4 4h12c1.66 0 3-1.34 3-3 0-1.64-1.27-2.96-2.89-2.96-.22 0-.43.02-.64.06z"/></svg>;
      //return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.1 9.5c.2-1.2 1.4-2.2 3-2.2 2 0 3.2 1.5 3.2 3.6v5.1h-1.8V11c0-1.2-.6-2-1.7-2s-1.9.9-1.9 2.1v5h-1.8v-6.1zm12.1 7.7c-1.7 1.2-4.2 2.3-6.2 2.8-2.6.7-5.2.9-7.9.6-2.7-.3-5.6-1.1-7.6-2.1-.3-.2-.4-.5-.2-.8.2-.3.6-.4.9-.2 1.9 1 4.7 1.8 7.3 2.1 2.6.3 5.1.1 7.6-.6 1.9-.5 4.3-1.5 5.9-2.6.3-.2.7-.1.9.2.2.3.1.6-.1.8zM19.8 14c-1.4 1-3.6 2-5.4 2.5-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 1.7-.5 3.8-1.4 5.1-2.3.3-.2.7-.1.8.2.1.3 0 .6-.2.7z"/></svg>;
    case "user-secret":
      //return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a4 4 0 014 4v1h-8V6a4 4 0 014-4zm-6 8h12l-1 10H7L6 10zm2 2l.5 6h7l.5-6H8z"/></svg>;
      return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h12v3H6z M10 7h4v10h-4z M6 17h12v3H6z"/></svg>;
    case "lock":
      return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 116 0v3H9z"/></svg>;
    case "trophy":
      return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M18 3V2H6v1H2v3a4 4 0 004 4 6 6 0 004 2.7V15H8v2h8v-2h-2V12.7A6 6 0 0018 10a4 4 0 004-4V3h-4zM4 6V5h2v2a2 2 0 01-2-1zM20 5v1a2 2 0 01-2 1V5h2z"/></svg>;
    case "medal":
      return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l3 6h5l-4 4 1 6-5-3-5 3 1-6-4-4h5l3-6z"/></svg>;
    case "award":
      return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a6 6 0 016 6 6 6 0 01-4 5.65V22l-2-1-2 1v-8.35A6 6 0 016 8a6 6 0 016-6z"/></svg>;
    case "star":
      return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.86L18.18 22 12 18.56 5.82 22 7 14.13l-5-4.86 6.91-1.01L12 2z"/></svg>;
    default:
      return null;
  }
};

export const Certification = () => {
  return (
    <section className={styles.section} id="certifications">
      <div className={styles.container}>
        {/* Certifications header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            My <span className={styles.gradientText}>Certifications</span>
          </h2>
          <div className={styles.underline} />
          <p className={styles.subtitle}>
            Professional certifications that validate my expertise in cybersecurity and development
          </p>
        </div>

        {/* Certification cards */}
        <div className={styles.grid}>
          {certs.slice(0, 4).map((c, i) => (
            <article
              key={i}
              className={`${styles.certCard} ${styles["accent" + c.accent]}`}
            >
              <div className={styles.certBody}>
                <div className={styles.iconRow}>
                  <div className={styles.iconWrap}>
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <h3 className={styles.certTitle}>{c.title}</h3>
                    <p className={styles.issuer}>{c.issuer}</p>
                  </div>
                </div>

                <p className={styles.certDesc}>{c.description}</p>

                <div className={styles.certFooter}>
                  <span className={styles.issued}>Issued: {c.issued}</span>
                  {c.link && (
                    <a
                      className={styles.credLink}
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Awards header */}
        <div className={styles.awardsHeader}>
          <h2 className={styles.title}>
            Awards & <span className={styles.gradientText}>Achievements</span>
          </h2>
          <div className={styles.underline} />
        </div>

        {/* Awards grid */}
        <div className={styles.awardsGrid}>
          {awards.slice(0, 4).map((a, i) => (
            <article
              key={i}
              className={`${styles.awardCard} ${styles["border" + a.accent]}`}
            >
              <div className={styles.awardRow}>
                <div className={styles.awardIcon}>
                  <Icon name={a.icon} />
                </div>
                <div>
                  <h3 className={styles.awardTitle}>{a.title}</h3>
                  <p className={styles.awardOrg}>{a.org}</p>
                  <p className={styles.awardDesc}>{a.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

