"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Footer from "@/components/ui/Footer";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot — hidden field; bots fill it, real users never see it.
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pb-20">
      <PageHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent dark:text-accent-muted uppercase mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight mb-4 dark:text-[#f0ede6]">
            Let's work<br />together.
          </h1>
          <p className="text-sm font-light text-muted dark:text-[#888] leading-relaxed mb-10">
            I'm currently open to new opportunities. Whether you have a project in mind, a role to discuss, or just want to say hello — drop me a message and I'll get back to you.
          </p>
        </div>

        <div>
          {status === "success" ? (
            <div className="h-full flex flex-col justify-center">
              <div className="border border-accent-muted/30 rounded-sm p-8 text-center bg-accent-light dark:bg-[#1e1b3a]">
                <p className="font-serif text-2xl font-normal mb-2 dark:text-[#f0ede6]">Message sent.</p>
                <p className="text-sm font-light text-muted dark:text-[#888]">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-mono text-[11px] tracking-wide text-accent dark:text-accent-muted hover:text-accent-dark transition-colors uppercase"
                >
                  Send another →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Honeypot field — visually hidden from real users via CSS.
                  Bots scrape the form and fill every input, including this one.
                  If the field arrives non-empty the API silently drops the submission. */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                }}
              >
                <label htmlFor="contact-website">Website (leave this blank)</label>
                <input
                  id="contact-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-mono text-[10px] tracking-widest uppercase text-accent dark:text-accent-muted">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="bg-white dark:bg-[#16152a] border border-accent-muted/30 dark:border-[#2a2a3a] rounded-sm px-4 py-3 text-sm font-light text-ink dark:text-[#f0ede6] placeholder:text-faint dark:placeholder:text-[#444] focus:outline-none focus:border-accent dark:focus:border-accent-muted transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-mono text-[10px] tracking-widest uppercase text-accent dark:text-accent-muted">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="bg-white dark:bg-[#16152a] border border-accent-muted/30 dark:border-[#2a2a3a] rounded-sm px-4 py-3 text-sm font-light text-ink dark:text-[#f0ede6] placeholder:text-faint dark:placeholder:text-[#444] focus:outline-none focus:border-accent dark:focus:border-accent-muted transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="font-mono text-[10px] tracking-widest uppercase text-accent dark:text-accent-muted">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="What's on your mind?"
                  className="bg-white dark:bg-[#16152a] border border-accent-muted/30 dark:border-[#2a2a3a] rounded-sm px-4 py-3 text-sm font-light text-ink dark:text-[#f0ede6] placeholder:text-faint dark:placeholder:text-[#444] focus:outline-none focus:border-accent dark:focus:border-accent-muted transition-colors resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-sm font-light text-red-500">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-accent hover:bg-accent-dark text-white text-sm font-medium px-6 py-3 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer topMargin="mt-16" />
    </main>
  );
}
