"use client";

import React, { useState } from "react";
import { resumeData } from "../data/resume";
import styles from "./Skills.module.css";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...resumeData.skills.map(c => c.category)];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const getMeterBars = (level: number) => {
    const totalBars = 5;
    const filledBars = Math.round(level);
    return (
      <div className={styles.meterContainer}>
        {Array.from({ length: totalBars }).map((_, i) => (
          <div 
            key={i} 
            className={`${styles.meterBar} ${i < filledBars ? styles.filledBar : ""}`}
            style={{
              animationDelay: `${i * 0.1}s`,
              background: i < filledBars 
                ? `linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)` 
                : undefined
            }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className={`${styles.skillsSection} section`}>
      <div className="container">
        <h2 className="section-title">Skills Matrix</h2>
        
        {/* Controls */}
        <div className={styles.controls}>
          {/* Search Input */}
          <div className={styles.searchWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input 
              type="text" 
              placeholder="Search skills (e.g. Next.js, Docker, Go)..." 
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search skills"
            />
            {searchTerm && (
              <button className={styles.clearSearch} onClick={() => setSearchTerm("")} aria-label="Clear search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className={styles.filterPills}>
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`${styles.pillBtn} ${selectedCategory === cat ? styles.activePill : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {resumeData.skills
            .filter(catData => selectedCategory === "All" || catData.category === selectedCategory)
            .map((catData, catIdx) => {
              // Filter skills within this category based on search term
              const filteredSkills = catData.skills.filter(skill => 
                skill.name.toLowerCase().includes(searchTerm.toLowerCase())
              );

              if (filteredSkills.length === 0) return null;

              return (
                <div key={catIdx} className={`${styles.categoryCard} glass-card`}>
                  <h3 className={styles.categoryTitle}>{catData.category}</h3>
                  <div className={styles.skillsList}>
                    {filteredSkills.map((skill, skillIdx) => (
                      <div key={skillIdx} className={styles.skillItem}>
                        <div className={styles.skillMeta}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevelLabel}>
                            {skill.level === 5 ? "Expert" : skill.level >= 4 ? "Advanced" : "Intermediate"}
                          </span>
                        </div>
                        {getMeterBars(skill.level)}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
