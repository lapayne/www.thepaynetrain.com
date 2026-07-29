"use client";

import { useEffect, useRef, useState } from "react";
import { resumeData } from "../../data/resume";

const initialHistory = [
  'System Initialized. Type "help" for commands.',
  `${resumeData.name} // ${resumeData.title}`,
  resumeData.tagline,
];

function wrapText(
  text: string,
  maxWidth: number,
  ctx: CanvasRenderingContext2D,
) {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth || currentLine === "") {
      currentLine = candidate;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

export default function ConsolePage() {
  const [inputBuffer, setInputBuffer] = useState("");
  const [history, setHistory] = useState<string[]>(initialHistory);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = document.getElementById(
      "terminalCanvas",
    ) as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return;
    }

    const lines: string[] = [];
    for (const line of history) {
      lines.push(...wrapText(line, 760, ctx));
    }

    const lineHeight = 24;
    const topPadding = 30;
    const bottomPadding = 30;
    const nextHeight = Math.max(
      500,
      topPadding + bottomPadding + lines.length * lineHeight + 12,
    );

    canvas.width = 800;
    canvas.height = nextHeight;

    ctx.fillStyle = "#0b0b0b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = "16px monospace";

    let y = topPadding;
    for (const line of lines) {
      ctx.fillText(line, 20, y);
      y += lineHeight;
    }

    ctx.fillText(`> ${inputBuffer}_`, 20, y);

    requestAnimationFrame(() => {
      if (viewportRef.current) {
        viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
      }
    });
  }, [history, inputBuffer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const rawInput = inputBuffer;
        const normalizedInput = rawInput.trim().toLowerCase();
        const [command, ...args] = normalizedInput.split(/\s+/);

        setHistory((previousHistory) => {
          const nextHistory = [...previousHistory, `> ${rawInput}`];

          if (command === "help") {
            const topic = args.join(" ");

            if (!topic) {
              nextHistory.push(
                "Commands: help, about, profile, exp, skills, education, certs, contact, metrics, hobbies, clear",
              );
              nextHistory.push(
                "Examples: help about, help profile, help education mba",
              );
            } else if (topic === "about") {
              nextHistory.push("Usage: help about");
              nextHistory.push("Shows the biography and philosophy summary.");
            } else if (topic === "profile" || topic === "whoami") {
              nextHistory.push("Usage: help profile");
              nextHistory.push("Shows your name, role, and location.");
            } else if (topic === "exp" || topic === "experience") {
              nextHistory.push("Usage: help exp");
              nextHistory.push("Shows current and previous experience highlights.");
            } else if (topic === "skills" || topic === "stack") {
              nextHistory.push("Usage: help skills");
              nextHistory.push("Shows the core technical skill areas.");
            } else if (topic === "education") {
              nextHistory.push("Usage: help education <keyword>");
              nextHistory.push(
                "Examples: help education mba, help education university",
              );
            } else if (topic === "certs" || topic === "certifications") {
              nextHistory.push("Usage: help certs");
              nextHistory.push("Shows the main professional certifications.");
            } else if (topic === "contact") {
              nextHistory.push("Usage: help contact");
              nextHistory.push("Shows email, phone, location, and socials.");
            } else if (topic === "metrics") {
              nextHistory.push("Usage: help metrics");
              nextHistory.push("Shows the headline impact metrics.");
            } else if (topic === "hobbies") {
              nextHistory.push("Usage: help hobbies");
              nextHistory.push("Shows the listed interests and hobbies.");
            } else {
              nextHistory.push(`No help entry for "${topic}".`);
              nextHistory.push('Try: help, help about, help education mba');
            }
          } else if (command === "about") {
            nextHistory.push(resumeData.bio);
          } else if (command === "profile" || command === "whoami") {
            nextHistory.push(`Name: ${resumeData.name}`);
            nextHistory.push(`Role: ${resumeData.title}`);
            nextHistory.push(`Location: ${resumeData.location}`);
          } else if (command === "exp" || command === "experience") {
            nextHistory.push(
              `Current: ${resumeData.experiences[0].role} @ ${resumeData.experiences[0].company}`,
            );
            nextHistory.push(
              `Previous: ${resumeData.experiences[1].role} @ ${resumeData.experiences[1].company}`,
            );
          } else if (command === "skills" || command === "stack") {
            for (const category of resumeData.skills.slice(0, 4)) {
              nextHistory.push(
                `${category.category}: ${category.skills
                  .map((skill) => skill.name)
                  .join(", ")}`,
              );
            }
          } else if (command === "education") {
            const keyword = args.join(" ");
            if (!keyword) {
              for (const item of resumeData.education.slice(0, 3)) {
                nextHistory.push(`${item.institution} — ${item.degree}`);
              }
            } else {
              const matches = resumeData.education.filter((item) => {
                const haystack = `${item.institution} ${item.degree} ${item.fieldOfStudy}`.toLowerCase();
                return haystack.includes(keyword.toLowerCase());
              });

              if (matches.length > 0) {
                for (const item of matches) {
                  nextHistory.push(`${item.institution} — ${item.degree}`);
                  nextHistory.push(`${item.fieldOfStudy} (${item.period})`);
                }
              } else {
                nextHistory.push(`No education matches for "${keyword}".`);
              }
            }
          } else if (command === "certs" || command === "certifications") {
            for (const cert of resumeData.certifications.slice(0, 3)) {
              nextHistory.push(`${cert.name} (${cert.issuer})`);
            }
          } else if (command === "contact") {
            nextHistory.push(`Email: ${resumeData.email}`);
            nextHistory.push(`Phone: ${resumeData.phone}`);
            nextHistory.push(`Location: ${resumeData.location}`);
            nextHistory.push(`LinkedIn: ${resumeData.socials[0].url}`);
          } else if (command === "metrics") {
            nextHistory.push("12+ Years Leadership");
            nextHistory.push("93% IaC Speedup");
            nextHistory.push("76% Cloud Cost Cuts");
            nextHistory.push("70% Vulnerability Reduction");
          } else if (command === "hobbies") {
            nextHistory.push(
              resumeData.hobbies?.join(", ") ?? "Always learning.",
            );
          } else if (command === "clear") {
            return [];
          } else if (command !== "") {
            nextHistory.push(`Command not found: ${command}. Type "help".`);
          }

          return nextHistory;
        });

        setInputBuffer("");
      } else if (event.key === "Backspace") {
        event.preventDefault();
        setInputBuffer((previousInput) => previousInput.slice(0, -1));
      } else if (event.key.length === 1) {
        setInputBuffer((previousInput) => previousInput + event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputBuffer]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0b",
        color: "#00ff00",
        padding: "24px",
      }}
    >
      <div
        ref={viewportRef}
        style={{
          width: "min(800px, 100%)",
          maxHeight: "80vh",
          overflowY: "auto",
          overflowX: "hidden",
          border: "2px solid #333",
          boxShadow: "0 0 20px rgba(0,255,0,0.1)",
          background: "#0b0b0b",
          scrollbarColor: "#00ff00 #111111",
          scrollbarWidth: "thin",
        }}
      >
        <canvas
          id="terminalCanvas"
          width={800}
          height={500}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            background: "#0b0b0b",
          }}
        />
      </div>
    </main>
  );
}
