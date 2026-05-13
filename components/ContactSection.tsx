import { Mail, Code2 as Github, Briefcase as Linkedin, FileText, Terminal, Shield, Gauge } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "alex.morgan@example.com",
    href: "mailto:alex.morgan@example.com",
    color: "#10b981",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexmorgan-sdet",
    href: "https://github.com",
    color: "#94a3b8",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexmorgan-sdet",
    href: "https://linkedin.com",
    color: "#38bdf8",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download CV (PDF)",
    href: "#",
    color: "#f59e0b",
  },
];

const expertise = [
  { icon: Shield, label: "Quality Architecture", desc: "Framework design, test strategy, shift-left implementation" },
  { icon: Terminal, label: "Automation Engineering", desc: "E2E, API, contract, and visual regression automation" },
  { icon: Gauge, label: "Performance Gatekeeping", desc: "Load testing, SLA enforcement, capacity planning" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#0f172a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#10b981]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#10b981] tracking-widest uppercase">
              // get-in-touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Let&apos;s Build Reliable Systems
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Open to senior SDET, Lead QA Engineer, and Quality Architecture roles. Available for
            contract engagements and framework consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: expertise */}
          <div className="space-y-4">
            <p className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-5">
              // areas of engagement
            </p>
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-[#1e293b] border border-[#334155] rounded-xl hover:border-[#10b981]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                    <div className="text-xs text-[#94a3b8]">{item.desc}</div>
                  </div>
                </div>
              );
            })}

            {/* Availability badge */}
            <div className="mt-6 p-4 bg-[#10b981]/5 border border-[#10b981]/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-sm font-semibold text-[#10b981] font-mono">
                  Available — Q3 2025
                </span>
              </div>
              <p className="text-xs text-[#94a3b8]">
                Currently accepting full-time and contract opportunities. Response time: &lt;24h.
              </p>
            </div>
          </div>

          {/* Right: contact links */}
          <div>
            <p className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-5">
              // contact-channels
            </p>
            <div className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-[#1e293b] border border-[#334155] rounded-xl hover:border-opacity-60 transition-all duration-200 group"
                    style={{ borderColor: link.color + "30" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ background: link.color + "15", border: "1px solid " + link.color + "30" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: link.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-[#475569] font-mono mb-0.5">{link.label}</div>
                      <div className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
