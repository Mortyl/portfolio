"use client";

import { useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        body: JSON.stringify({ name, email, message }),
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
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pb-20">
      <div className="py-8 mb-12 border-b border-accent-muted/30 dark:border-[#2a2a3a] flex justify-between items-center">
        <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent dark:text-accent-muted hover:text-accent-dark transition-colors"
        >
          ← Back
        </Link>
        <ThemeToggle />
      </div>

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
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-widest uppercase text-accent dark:text-accent-muted">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="bg-white dark:bg-[#16152a] border border-accent-muted/30 dark:border-[#2a2a3a] rounded-sm px-4 py-3 text-sm font-light text-ink dark:text-[#f0ede6] placeholder:text-faint dark:placeholder:text-[#444] focus:outline-none focus:border-accent dark:focus:border-accent-muted transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-widest uppercase text-accent dark:text-accent-muted">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="bg-white dark:bg-[#16152a] border border-accent-muted/30 dark:border-[#2a2a3a] rounded-sm px-4 py-3 text-sm font-light text-ink dark:text-[#f0ede6] placeholder:text-faint dark:placeholder:text-[#444] focus:outline-none focus:border-accent dark:focus:border-accent-muted transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-widest uppercase text-accent dark:text-accent-muted">
                  Message
                </label>
                <textarea
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
      <footer className="border-t border-accent-muted/30 dark:border-[#2a2a3a] pt-10 mt-16 flex justify-center items-center gap-6 flex-wrap">
        {socialLinks.map((link) => (
            <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted dark:text-[#666] hover:text-accent dark:hover:text-accent-muted transition-colors border-b border-accent-muted/40 pb-0.5"
            >
              {link.label}
            </Link>
        ))}
      </footer>
    </main>
  );
}
