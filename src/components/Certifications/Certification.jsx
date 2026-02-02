import React from "react";
import styles from "./Certification.module.css";
import certs from "../../Data/certifications.json";
import awards from "../../Data/awards.json";
import googleAnalyticsPDF from "../../../assets/Google_cert.pdf";
import ibmPDF from "../../../assets/IBM-Cert.pdf";
import { getImageUrl } from "../../utils";

const pdfMap = {
  googleAnalytics: googleAnalyticsPDF,
  ibmDataEng: ibmPDF
};

const Icon = ({ name }) => {
  // tiny inline icon set (no external libs)
  switch (name) {
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
            Professional certifications that validate my expertise in Data Science and development
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
                  <img
                    src={getImageUrl(c.icon)}
                    alt={`${c.title} icon`}
                    className={styles.iconImg}
                  />
                  </div>
                  <div>
                    <h3 className={styles.certTitle}>{c.title}</h3>
                    <p className={styles.issuer}>{c.issuer}</p>
                  </div>
                </div>

                <p className={styles.certDesc}>{c.description}</p>

                <div className={styles.certFooter}>
                  <span className={styles.issued}>Issued: {c.issued}</span>
                  {c.pdf && pdfMap[c.pdf] && (
                    <a
                      className={styles.credLink}
                      href={pdfMap[c.pdf]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
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

