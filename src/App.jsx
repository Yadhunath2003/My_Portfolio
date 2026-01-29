import { useEffect } from 'react';
import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contacts/Contact';
import { Certification } from './components/Certifications/Certification';  


function App() {

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  
    sections.forEach(section => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className={styles.App}>
      <Navbar />
  
      <section className="section show">
        <Hero />
      </section>
  
      <section className="section">
        <About />
      </section>
  
      <section className="section">
        <Experience />
      </section>
  
      <section className="section">
        <Projects />
      </section>
  
      <section className="section">
        <Certification />
      </section>
  
      <section className="section">
        <Contact />
      </section>
    </div>
  );
  
}

export default App;
