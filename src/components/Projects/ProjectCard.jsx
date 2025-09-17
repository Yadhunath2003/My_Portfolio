import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className={styles.tagRow}>
          {/* show the first skill as a small tag, purely presentational */}
          {skills?.length ? <span className={styles.tag}>{skills[0]}</span> : null}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skillChips}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.chip}>{skill}</li>
          ))}
        </ul>

        <div className={styles.links}>
  <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
    View Details
  </a>

  {source && (
    <a
      href={source}
      className={styles.iconLink}
      aria-label="GitHub repository"
      title="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* GitHub mark */}
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path fill="currentColor" d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.761-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.842 1.234 1.912 1.234 3.222 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.593 24 12.296c0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
  )}
</div>

      </div>
    </article>
  );
};