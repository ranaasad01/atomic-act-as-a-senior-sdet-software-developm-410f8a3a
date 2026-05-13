"use client";

import { useState, useEffect } from "react";
import { Terminal, Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Terminal", href: "#terminal" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-[#334155]"
    : "bg-transparent";

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors">
              <Terminal className="w-4 h-4 text-[#10b981]" />
            </div>
            <span className="font-mono text-sm font-semibold text-slate-200 tracking-tight">
              <span className="text-[#10b981]">alex</span>
              <span className="text-[#94a3b8]">@</span>
              <span className="text-slate-200">sdet</span>
              <span className="text-[#f59e0b]">:~$</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-mono text-[#94a3b8] hover:text-[#10b981] hover:bg-[#10b981]/5 rounded transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-4 py-1.5 text-sm font-mono font-semibold text-[#0f172a] bg-[#10b981] hover:bg-[#34d399] rounded transition-colors duration-200 flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5" />
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#94a3b8] hover:text-[#10b981] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a]/98 backdrop-blur-md border-b border-[#334155]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-sm font-mono text-[#94a3b8] hover:text-[#10b981] hover:bg-[#10b981]/5 rounded transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-3 py-2 text-sm font-mono font-semibold text-[#0f172a] bg-[#10b981] hover:bg-[#34d399] rounded text-center transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
