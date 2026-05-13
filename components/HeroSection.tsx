"use client";

import { Shield, Gauge, Terminal, ArrowRight, Code2 as Github, Briefcase as Linkedin, Mail } from 'lucide-react';

const stats = [
  { value: "8+", label: "Years in QA Engineering" },
  { value: "70%", label: "Avg Regression Time Saved" },
  { value: "500K+", label: "Test Executions / Month" },
  { value: "99.2%", label: "Pipeline Reliability Rate" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0f172a]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#10b981]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#f59e0b]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            AVAILABLE FOR SENIOR SDET ROLES
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#10b981]" />
            </div>
            <span className="font-mono text-sm text-[#94a3b8] tracking-widest uppercase">
              Lead Automation Engineer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block">Alex Morgan</span>
            <span className="block mt-1">
              <span className="text-[#10b981]">Lead Automation</span>
              <span className="text-slate-400"> &amp; </span>
              <span className="text-[#f59e0b]">Quality Engineer</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#94a3b8] leading-relaxed max-w-2xl mb-4 font-light">
            Specializing in{" "}
            <span className="text-slate-200 font-medium">high-scale E2E frameworks</span>,{" "}
            <span className="text-slate-200 font-medium">CI/CD reliability engineering</span>, and{" "}
            <span className="text-slate-200 font-medium">performance gatekeeping</span> — building
            test infrastructure that scales with your product.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Playwright", "Cypress", "k6", "GitHub Actions", "Docker", "RestAssured"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono text-[#94a3b8] bg-[#1e293b] border border-[#334155] rounded"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981] hover:bg-[#34d399] text-[#0f172a] font-semibold font-mono text-sm rounded-lg transition-all duration-200 shadow-lg shadow-[#10b981]/20"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#terminal"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-[#1e293b] text-slate-200 font-semibold font-mono text-sm rounded-lg border border-[#334155] hover:border-[#10b981]/50 transition-all duration-200"
            >
              <Terminal className="w-4 h-4 text-[#10b981]" />
              Live Execution
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1e293b]/60 border border-[#334155] rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#10b981] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#94a3b8] leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-10">
          <span className="text-xs font-mono text-[#475569]">// connect</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 text-[#475569] hover:text-[#10b981] hover:bg-[#10b981]/10 rounded-lg transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 text-[#475569] hover:text-[#10b981] hover:bg-[#10b981]/10 rounded-lg transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:alex@example.com"
            aria-label="Send email"
            className="p-2 text-[#475569] hover:text-[#10b981] hover:bg-[#10b981]/10 rounded-lg transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#475569]">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#475569] to-transparent" />
      </div>
    </section>
  );
}
