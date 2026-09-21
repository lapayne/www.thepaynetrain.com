"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendError("");
    setSendSuccess(false);

    try {
      const response = await fetch(
        "https://us-central1-thepaynetrain-com.cloudfunctions.net/sendContactEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              email: email,
              message: message,
            },
          }),
        },
      );

      if (response.ok) {
        setSendSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSendSuccess(false), 2000);
      } else {
        const errorData = await response.json();
        setSendError(
          errorData?.error || "Failed to send email. Please try again.",
        );
      }
    } catch (error) {
      setSendError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className={`${styles.contactForm} glass-card`}
      onSubmit={handleSubmit}
    >
      <h3>Send a Message</h3>

      {sendSuccess && (
        <div className={styles.successMessage}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent-secondary)"
            strokeWidth="2.5"
            className={styles.successIcon}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p className={styles.successTitle}>Thank You!</p>
          <p>
            Your message has been sent successfully. I will get back to you
            shortly.
          </p>
        </div>
      )}

      {sendError && <div className={styles.errorMessage}>{sendError}</div>}

      {!sendSuccess && (
        <>
          <div className={styles.formGroup}>
            <label htmlFor="form-name">Name</label>
            <input
              type="text"
              id="form-name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSending}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="form-email">Email</label>
            <input
              type="email"
              id="form-email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSending}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="form-message">Message</label>
            <textarea
              id="form-message"
              rows={4}
              placeholder="Hey Alex, let's connect!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isSending}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            disabled={isSending}
          >
            {isSending ? (
              <span className={styles.sendingContainer}>
                <svg
                  className={styles.spinner}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    strokeDasharray="60"
                    strokeDashoffset="20"
                  ></circle>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </>
      )}
    </form>
  );
}
