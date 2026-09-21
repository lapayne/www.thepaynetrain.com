"use client";

import React, { useEffect, useState } from "react";
import type { Quote } from "../lib/quotes";
import styles from "./QuoteSection.module.css";

const fallbackQuote: Quote = {
  text: "Make it simple, but significant.",
  author: "Don Draper",
};

function parseQuotes(content: string): Quote[] {
  return content
    .split(";;")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const dashIndex = entry.lastIndexOf(" - ");

      if (dashIndex === -1) {
        return { text: entry, author: "Unknown" };
      }

      return {
        text: entry.slice(0, dashIndex).trim(),
        author: entry.slice(dashIndex + 3).trim(),
      };
    });
}

function pickRandomQuote(quotes: Quote[]): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function QuoteSection() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quote, setQuote] = useState<Quote>(fallbackQuote);
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    fetch("/quotes.txt")
      .then((response) => response.text())
      .then((content) => {
        const loadedQuotes = parseQuotes(content);

        if (loadedQuotes.length > 0) {
          setQuotes(loadedQuotes);
          setQuote(pickRandomQuote(loadedQuotes));
        }
      })
      .catch((error) => console.error("Failed to load quotes:", error));
  }, []);

  const fetchNewQuote = () => {
    if (quotes.length === 0) return;
    if (loading) return;
    setLoading(true);
    setFade(false); // Trigger fade out

    setTimeout(() => {
      setQuote(pickRandomQuote(quotes));
      setFade(true); // Trigger fade in
      setLoading(false);
    }, 300); // Wait for fade out animation
  };

  return (
    <section className={`${styles.quoteSection} section`}>
      <div className="container">
        <div className={`${styles.quoteCard} glass-card`}>
          <div className={styles.quoteIcon}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.svgQuote}
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div
            className={`${styles.quoteTextContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}
          >
            <blockquote className={styles.quoteText}>
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <cite className={styles.quoteAuthor}>&mdash; {quote.author}</cite>
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
