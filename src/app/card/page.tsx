import type { Metadata } from "next";
import Link from "next/link";
import { resumeData } from "../../data/resume";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Contact Card | ${resumeData.name}`,
  description: `Save ${resumeData.name}'s contact details to your mobile device.`,
};

export default function ContactCardPage() {
  const linkedIn = resumeData.socials.find(
    (social) => social.label === "LinkedIn",
  );

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Link href="/" className={styles.backLink}>
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
            <path d="M20 12H9" />
          </svg>
          Back to the main site
        </Link>

        <section className={styles.content} aria-labelledby="page-title">
          <div className={styles.intro}>
            <span className={styles.eyebrow}>
              <span className={styles.statusDot} />
              A little easier to keep in touch
            </span>
            <h1 id="page-title">
              Let&apos;s <span className="gradient-text-alt">connect.</span>
            </h1>
            <p className={styles.description}>
              Save my contact card to your phone or address book. It includes my
              phone, email, and professional profile, ready whenever you need
              them.
            </p>
          </div>

          <article className={`${styles.contactCard} glass-card`}>
            <div className={styles.cardIdentity}>
              <div className={styles.avatar} aria-hidden="true">
                LP
              </div>
              <div>
                <h2>{resumeData.name}</h2>
                <p>{resumeData.title}</p>
              </div>
            </div>

            <div className={styles.divider} />

            <dl className={styles.details}>
              <div className={styles.detail}>
                <dt>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Phone
                </dt>
                <dd>
                  <a href={`tel:${resumeData.phone}`}>{resumeData.phone}</a>
                </dd>
              </div>
              <div className={styles.detail}>
                <dt>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  Email
                </dt>
                <dd>
                  <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
                </dd>
              </div>

              {linkedIn && (
                <div className={styles.detail}>
                  <dt>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                    </svg>
                    LinkedIn
                  </dt>
                  <dd>
                    <a
                      href={linkedIn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View professional profile
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            <a
              className={`${styles.downloadButton} btn btn-primary`}
              href="/lee-payne.vcf"
              download
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 19h14" />
              </svg>
              Download contact card
            </a>
            <p className={styles.fileNote}>
              vCard file · Opens in Contacts on most mobile devices
            </p>
          </article>

          <Link href="/" className={styles.homeLink}>
            Explore the portfolio <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}