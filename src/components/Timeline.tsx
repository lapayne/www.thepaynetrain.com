"use client";

import React, { useState } from "react";
import { resumeData } from "../data/resume";
import styles from "./Timeline.module.css";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"work" | "volunteer">("work");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className={`${styles.timelineSection} section`}>
      <div className="container">
        <h2 className="section-title">Experience & Projects</h2>
        
        {/* Tab Controls */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabBtn} ${activeTab === "work" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("work")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Professional Experience
          </button>
          
          <button 
            className={`${styles.tabBtn} ${activeTab === "volunteer" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("volunteer")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Volunteering
          </button>
        </div>

        {/* Timeline Content */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          {activeTab === "work" ? (
            resumeData.experiences.map((exp, index) => {
              const id = `work-${index}`;
              const isExpanded = expandedItems[id] ?? index === 0; // First item expanded by default
              
              return (
                <div key={index} className={styles.timelineItem}>
                  {/* Timeline node */}
                  <div className={`${styles.timelineNode} ${isExpanded ? styles.activeNode : ""}`}></div>

                  <div className={`${styles.timelineContent} glass-card`} onClick={() => toggleExpand(id)}>
                    <div className={styles.cardHeader}>
                      <div>
                        <span className={styles.period}>{exp.period}</span>
                        <h3 className={styles.role}>{exp.role}</h3>
                        <div className={styles.companyRow}>
                          <span className={styles.company}>{exp.company}</span>
                          <span className={styles.location}>&bull; {exp.location}</span>
                        </div>
                      </div>
                      
                      <button className={styles.expandBtn} aria-label={isExpanded ? "Collapse details" : "Expand details"}>
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5"
                          className={`${styles.chevron} ${isExpanded ? styles.rotated : ""}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>

                    <p className={styles.description}>{exp.description}</p>

                    {/* Expandable Details */}
                    <div className={`${styles.details} ${isExpanded ? styles.showDetails : ""}`}>
                      <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                      <ul className={styles.achievementsList}>
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className={styles.achievementItem}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.bulletCheck}>
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.skills && exp.skills.length > 0 && (
                        <div className={styles.skillsWrapper}>
                          <span className={styles.skillsLabel}>Technologies:</span>
                          <div className={styles.skillsList}>
                            {exp.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="tech-tag">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            resumeData.volunteering.map((vol, index) => {
              const id = `vol-${index}`;
              const isExpanded = expandedItems[id] ?? index === 0; // First item expanded by default
              
              return (
                <div key={index} className={styles.timelineItem}>
                  <div className={`${styles.timelineNode} ${isExpanded ? styles.activeNode : ""}`}></div>

                  <div className={`${styles.timelineContent} glass-card`} onClick={() => toggleExpand(id)}>
                    <div className={styles.cardHeader}>
                      <div>
                        <span className={styles.period}>{vol.period}</span>
                        <h3 className={styles.role}>{vol.role}</h3>
                        <span className={styles.company}>{vol.organization}</span>
                      </div>
                      
                      <button className={styles.expandBtn}>
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5"
                          className={`${styles.chevron} ${isExpanded ? styles.rotated : ""}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>

                    <p className={styles.description}>{vol.description}</p>

                    <div className={`${styles.details} ${isExpanded ? styles.showDetails : ""}`}>
                      <h4 className={styles.achievementsTitle}>Contributions & Impact:</h4>
                      <ul className={styles.achievementsList}>
                        {vol.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className={styles.achievementItem}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.bulletCheck}>
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
