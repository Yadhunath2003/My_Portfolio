import React from "react";

import styles from "./Projects.module.css";

import projects from "../../Data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            My <span className={styles.gradientText}>Projects</span>
          </h2>
          <div className={styles.underline} />
          <p className={styles.subtitle}>
            Here are some of my projects that showcase my skills in development and cybersecurity.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.slice(0, 4).map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};