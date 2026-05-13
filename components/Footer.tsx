import { Terminal, Shield, Code2 as Github, Briefcase as Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-[#10b981]" />
              </div>
              <span className="font-mono text-sm font-semibold">
                <span className="text-[#10b981]">alex</span>
                <span className="text-[#94a3b8]">@</span>
                <span className="text-slate-200">sdet</span>
                <span className="text-[#f59e0b]">:~$</span>
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
              Built for Reliability. Engineered for Scale.
            </p>
            <p className="text-xs font-mono text-[#334155] mt-2">
              // 8+ years shipping quality at scale
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4">
              // navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Pipeline Architecture", href: "#pipeline" },
                { label: "Frameworks & Toolchain", href: "#frameworks" },
                { label: "Live Execution", href: "#terminal" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#10b981] transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4">
              // specializations
            </h4>
            <ul className="space-y-2">
              {[
                "E2E Framework Architecture",
                "CI/CD Pipeline Reliability",
                "Performance Gatekeeping",
                "Shift-Left Security Testing",
                "Test Infrastructure at Scale",
                "Data-Driven Test Design",
              ].map((spec) => (
                <li key={spec} className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-[#10b981]/50 flex-shrink-0" />
                  <span className="text-sm text-[#94a3b8]">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-[#475569] hover:text-[#10b981] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-[#475569] hover:text-[#10b981] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:alex.morgan@example.com"
              aria-label="Email"
              className="p-2 text-[#475569] hover:text-[#10b981] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs font-mono text-[#334155] text-center">
            © 2025 Alex Morgan — Lead Automation &amp; Quality Engineer
          </p>

          <a
            href="#hero"
            className="flex items-center gap-1.5 text-xs font-mono text-[#475569] hover:text-[#10b981] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
