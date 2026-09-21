"use client";

import React from "react";
import { resumeData } from "../data/resume";
import styles from "./Hero.module.css";

// Helper function to return SVG paths for each social link icon
const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "github":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "blog":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "vr":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Custom VR Headset SVG */}
          <path d="M3 10h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z" />
          <path d="M21 10a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4" />
          <circle cx="7.5" cy="14" r="1.5" />
          <circle cx="16.5" cy="14" r="1.5" />
          <path d="M10 10l2 2 2-2" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
};

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          
          {/* Main Hero Copy */}
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgePulse}></span>
              Available for Opportunities
            </div>
            
            <h1 className={styles.title}>
              Hi, I&apos;m <span className="gradient-text">{resumeData.name}</span>
            </h1>
            
            <h2 className={styles.subtitle}>
              {resumeData.title}
            </h2>
            
            <p className={styles.tagline}>
              {resumeData.tagline}
            </p>
            
            {/* CTA Buttons */}
            <div className={styles.actions}>
              <a href="#experience" className="btn btn-primary">
                View My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href={resumeData.resumeUrl} download className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Icons Links */}
            <div className={styles.socialsContainer}>
              <span className={styles.socialsLabel}>Connect:</span>
              <div className={styles.socialsList}>
                {resumeData.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.socialBtn}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {getSocialIcon(social.icon)}
                    <span className={styles.socialBtnLabel}>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Interactive Cards Side */}
          <div className={styles.heroVisual}>
            <div className={`${styles.glowingOrb} floating-element`}></div>
            
            {/* Advisory KPIs Dashboard */}
            <div className={`${styles.dashboardCard} glass-card`}>
              <div className={styles.dashboardHeader}>
                <div className={styles.pulseIndicatorContainer}>
                  <span className={styles.activePulseIndicator}></span>
                  <span className={styles.dashboardTitle}>PRACTICE PERFORMANCE DIRECTORY</span>
                </div>
                <span className={styles.dashboardDate}>Q2 ACTIVE STATUS</span>
              </div>
              <div className={styles.dashboardBody}>
                <div className={styles.metricItem}>
                  <div className={styles.metricLabelRow}>
                    <span>Cloud Cost Optimization</span>
                    <span className={styles.metricHighlight}>76% Savings</span>
                  </div>
                  <div className={styles.metricProgressBg}>
                    <div className={styles.metricProgressFill} style={{ width: '76%' }}></div>
                  </div>
                </div>

                <div className={styles.metricItem}>
                  <div className={styles.metricLabelRow}>
                    <span>Infrastructure IaC Build</span>
                    <span className={styles.metricHighlight}>93% Speedup</span>
                  </div>
                  <div className={styles.metricProgressBg}>
                    <div className={styles.metricProgressFill} style={{ width: '93%', background: 'linear-gradient(90deg, var(--accent-secondary) 0%, #0d9488 100%)' }}></div>
                  </div>
                </div>

                <div className={styles.metricItem}>
                  <div className={styles.metricLabelRow}>
                    <span>Engineering Leadership</span>
                    <span className={styles.metricHighlight}>13+ Team Size</span>
                  </div>
                  <div className={styles.metricProgressBg}>
                    <div className={styles.metricProgressFill} style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className={styles.metricItem}>
                  <div className={styles.metricLabelRow}>
                    <span>Out-of-Hours Callouts</span>
                    <span className={styles.metricHighlight}>90% Reduction</span>
                  </div>
                  <div className={styles.metricProgressBg}>
                    <div className={styles.metricProgressFill} style={{ width: '90%', background: 'linear-gradient(90deg, var(--accent-secondary) 0%, #0d9488 100%)' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            <div className={`${styles.pillarsCard} glass-card`}>
              <div className={styles.pillarsTitle}>Core Advisory Pillars</div>
              <div className={styles.pillarsGrid}>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div>
                    <h4>IT Strategy</h4>
                    <p>Aligning tech stack capabilities with corporate P&L goals.</p>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <h4>Enterprise Arch</h4>
                    <p>Building scalable, cloud-native microservices solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
