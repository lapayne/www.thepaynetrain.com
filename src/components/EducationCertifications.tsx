import React from "react";
import { resumeData } from "../data/resume";
import styles from "./EducationCertifications.module.css";

export default function EducationCertifications() {
  return (
    <section id="education" className={`${styles.eduCertSection} section`}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* Education Column */}
          <div className={styles.column}>
            <h2 className={`${styles.title} section-title`}>Education</h2>
            <div className={styles.list}>
              {resumeData.education.map((edu, index) => (
                <div key={index} className={`${styles.eduCard} glass-card`}>
                  <span className={styles.period}>{edu.period}</span>
                  <h3 className={styles.degree}>{edu.degree} in {edu.fieldOfStudy}</h3>
                  <div className={styles.institutionRow}>
                    <span className={styles.institution}>{edu.institution}</span>
                    <span className={styles.location}>&bull; {edu.location}</span>
                  </div>
                  
                  {edu.details && edu.details.length > 0 && (
                    <ul className={styles.detailsList}>
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className={styles.detailItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="3" className={styles.bulletIcon}>
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className={styles.column}>
            <h2 className={`${styles.title} section-title`}>Certifications</h2>
            <div className={styles.list}>
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className={`${styles.certCard} glass-card`}>
                  <div className={styles.certHeader}>
                    <div>
                      <span className={styles.certDate}>{cert.date}</span>
                      <h3 className={styles.certName}>{cert.name}</h3>
                      <span className={styles.certIssuer}>{cert.issuer}</span>
                    </div>

                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.verifyLink}
                        aria-label={`Verify ${cert.name}`}
                        title="Verify Credential"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {cert.credentialId && (
                    <div className={styles.credentialRow}>
                      <span className={styles.credLabel}>ID:</span>
                      <code className={styles.credId}>{cert.credentialId}</code>
                    </div>
                  )}
                </div>
              ))}

              {/* Professional Bodies */}
              {resumeData.professionalBodies && (
                <div className={`${styles.certCard} glass-card`} style={{ marginTop: '1.5rem', borderLeft: '3px solid var(--accent-secondary)' }}>
                  <h3 className={styles.certName} style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', fontSize: '1.15rem' }}>Professional Memberships</h3>
                  <ul className={styles.detailsList}>
                    {resumeData.professionalBodies.map((body, bIdx) => (
                      <li key={bIdx} className={styles.detailItem}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" className={styles.bulletIcon} style={{ marginTop: '0.2rem' }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{body}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
