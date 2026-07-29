"use client";

import React, { useState } from "react";
import { Quote } from "../lib/quotes";
import styles from "./QuoteSection.module.css";

interface QuoteSectionProps {
  initialQuote: Quote;
}

export default function QuoteSection({ initialQuote }: QuoteSectionProps) {
  const [quote, setQuote] = useState<Quote>(initialQuote);
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(true);

  const fetchNewQuote = async () => {
    if (loading) return;
    setLoading(true);
    setFade(false); // Trigger fade out

    setTimeout(async () => {
      try {
        const response = await fetch("/api/quote");
        if (response.ok) {
          const data = await response.json();
          setQuote(data);
        }
      } catch (error) {
        console.error("Failed to load new quote:", error);
      } finally {
        setFade(true); // Trigger fade in
        setLoading(false);
      }
    }, 300); // Wait for fade out animation
  };

  return (
    <section className={`${styles.quoteSection} section`}>
      <div className="container">
        <div className={`${styles.quoteCard} glass-card`}>
          <div className={styles.quoteIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className={styles.svgQuote}>
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <div className={`${styles.quoteTextContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}>
            <blockquote className={styles.quoteText}>
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <cite className={styles.quoteAuthor}>
              &mdash; {quote.author}
            </cite>
          </div>

          <button 
            onClick={fetchNewQuote} 
            className={`${styles.refreshBtn} ${loading ? styles.spinning : ""}`}
            aria-label="Load another quote"
            title="Roll Quote of the Day"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
            <span>Roll Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
}
