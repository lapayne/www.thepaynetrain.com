import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import QuoteSection from "../components/QuoteSection";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import EducationCertifications from "../components/EducationCertifications";
import ContactForm from "../components/ContactForm";
import { getRandomQuote } from "../lib/quotes";
import { resumeData } from "../data/resume";
import styles from "./page.module.css";

// Force Next.js to not cache page.tsx so the quote changes on hard reload
export const revalidate = 0;

export default function Home() {
  const initialQuote = getRandomQuote();

  return (
    <div className={styles.appContainer}>
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className={`${styles.aboutSection} section`}>
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className={styles.aboutGrid}>
              <div className={`${styles.aboutCard} glass-card`}>
                <h3 className={styles.aboutCardTitle}>My Philosophy</h3>
                <p className={styles.aboutText}>
                  I am a strategic IT and engineering leader focused on guiding
                  high-performing consulting, development, and SRE teams. I
                  specialize in cloud migrations, platform modernization, cost
                  optimizations, and building secure, resilient operational
                  structures.
                </p>
                <p className={styles.aboutText}>
                  My leadership style is pragmatic and people-first. I believe
                  in establishing clear growth frameworks for engineering
                  practices, building cross-functional alignment, and delivering
                  measurable business value for client organizations.
                </p>

                {/* Hobbies & Interests */}
                {resumeData.hobbies && (
                  <div
                    style={{
                      marginTop: "1.5rem",
                      paddingTop: "1.25rem",
                      borderTop: "1px solid var(--border-color)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Interests & Hobbies
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {resumeData.hobbies.join(" ")}
                    </p>
                  </div>
                )}
              </div>

              <div className={styles.metricsGrid}>
                <div className={`${styles.metricCard} glass-card`}>
                  <span className={styles.metricVal}>12+</span>
                  <span className={styles.metricLabel}>Years Leadership</span>
                </div>
                <div className={`${styles.metricCard} glass-card`}>
                  <span className={styles.metricVal}>93%</span>
                  <span className={styles.metricLabel}>IaC Speedup</span>
                </div>
                <div className={`${styles.metricCard} glass-card`}>
                  <span className={styles.metricVal}>76%</span>
                  <span className={styles.metricLabel}>Cloud Cost Cuts</span>
                </div>
                <div className={`${styles.metricCard} glass-card`}>
                  <span className={styles.metricVal}>70%</span>
                  <span className={styles.metricLabel}>
                    Security Vulnerability Reduc.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote of the Day Section */}
        <QuoteSection initialQuote={initialQuote} />

        {/* Experience Timeline */}
        <Timeline />

        {/* Skills Matrix */}
        <Skills />

        {/* Education & Certs */}
        <EducationCertifications />

        {/* Contact Section */}
        <section id="contact" className={`${styles.contactSection} section`}>
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className={styles.contactCard}>
              <div className={`${styles.contactInfo} glass-card`}>
                <h3>Contact Information</h3>
                <p>
                  Feel free to reach out for collaborations, project inquiries,
                  or just to say hi!
                </p>

                <div className={styles.contactList}>
                  <a
                    href={`mailto:${resumeData.email}`}
                    className={styles.contactItem}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>{resumeData.email}</span>
                  </a>

                  <a
                    href={`tel:${resumeData.phone}`}
                    className={styles.contactItem}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{resumeData.phone}</span>
                  </a>

                  <div className={styles.contactItem}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{resumeData.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <p>
              &copy; {new Date().getFullYear()} {resumeData.name}. All Rights
              Reserved.
            </p>
            <div className={styles.footerLinks}>
              {resumeData.socials.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
