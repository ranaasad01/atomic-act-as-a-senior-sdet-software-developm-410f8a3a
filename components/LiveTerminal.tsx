"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, Play, RotateCcw, Maximize2 } from 'lucide-react';

const terminalLines = [
  { text: "", delay: 0, type: "blank" },
  { text: "$ npx playwright test --project=chromium --shard=1/4", delay: 300, type: "command" },
  { text: "", delay: 600, type: "blank" },
  { text: "Running: smoke-test-suite.spec.ts", delay: 900, type: "info" },
  { text: "Running: auth-flow.spec.ts", delay: 1100, type: "info" },
  { text: "Running: payment-gateway.spec.ts", delay: 1300, type: "info" },
  { text: "", delay: 1600, type: "blank" },
  { text: "  ✓  Authentication Flow — Login with valid credentials (452ms)", delay: 1900, type: "pass" },
  { text: "  ✓  Authentication Flow — MFA token validation (318ms)", delay: 2200, type: "pass" },
  { text: "  ✓  Authentication Flow — Session persistence across tabs (671ms)", delay: 2500, type: "pass" },
  { text: "  ✓  Authentication Flow — Logout clears all tokens (289ms)", delay: 2800, type: "pass" },
  { text: "", delay: 3000, type: "blank" },
  { text: "  ✓  Payment Gateway Mock — Stripe checkout initiation (890ms)", delay: 3300, type: "pass" },
  { text: "  ✓  Payment Gateway Mock — 3DS challenge flow (1.2s)", delay: 3700, type: "pass" },
  { text: "  ✓  Payment Gateway Mock — Refund processing (445ms)", delay: 4000, type: "pass" },
  { text: "  ✓  Payment Gateway Mock — Webhook signature validation (203ms)", delay: 4300, type: "pass" },
  { text: "", delay: 4500, type: "blank" },
  { text: "  ✓  User Dashboard — Data table pagination (334ms)", delay: 4800, type: "pass" },
  { text: "  ✓  User Dashboard — Export to CSV (1.1s)", delay: 5100, type: "pass" },
  { text: "  ✓  User Dashboard — Real-time notification polling (780ms)", delay: 5400, type: "pass" },
  { text: "", delay: 5600, type: "blank" },
  { text: "  ✓  API Contract — POST /api/orders matches Pact schema (112ms)", delay: 5900, type: "pass" },
  { text: "  ✓  API Contract — GET /api/users/:id response shape (98ms)", delay: 6200, type: "pass" },
  { text: "  ✓  API Contract — Error envelope structure (87ms)", delay: 6500, type: "pass" },
  { text: "", delay: 6700, type: "blank" },
  { text: "  ✓  Performance Gate — p95 latency: 142ms (threshold: 200ms) ✓", delay: 7000, type: "perf" },
  { text: "  ✓  Performance Gate — Error rate: 0.02% (threshold: 0.1%) ✓", delay: 7300, type: "perf" },
  { text: "  ✓  Performance Gate — Throughput: 1,240 RPS (target: 1,000) ✓", delay: 7600, type: "perf" },
  { text: "", delay: 7800, type: "blank" },
  { text: "─────────────────────────────────────────────────────────────────", delay: 8000, type: "divider" },
  { text: "  Summary: 142 passed, 0 failed, 0 skipped", delay: 8200, type: "summary" },
  { text: "  Duration: 8m 34s  |  Shards: 4  |  Workers: 16", delay: 8400, type: "summary" },
  { text: "  Coverage: 91.4%   |  Flake rate: 0.0%", delay: 8600, type: "summary" },
  { text: "", delay: 8800, type: "blank" },
  { text: "  ✅ All quality gates passed — deployment approved", delay: 9100, type: "success" },
  { text: "", delay: 9300, type: "blank" },
];

const lineColors: Record<string, string> = {
  command: "#f59e0b",
  info: "#94a3b8",
  pass: "#10b981",
  perf: "#a78bfa",
  divider: "#334155",
  summary: "#e2e8f0",
  success: "#10b981",
  blank: "transparent",
};

export default function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [running, setRunning] = useState(true);
  const [completed, setCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const startExecution = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setVisibleLines(0);
    setCompleted(false);
    setRunning(true);
  };

  useEffect(() => {
    if (!running) return;

    terminalLines.forEach((line, index) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => Math.max(prev, index + 1));
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
        if (index === terminalLines.length - 1) {
          setCompleted(true);
          setRunning(false);
        }
      }, line.delay);
      timeoutsRef.current.push(t);
    });

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [running]);

  return (
    <section id="terminal" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#10b981] tracking-widest uppercase">
              // live-execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Test Suite Execution
          </h2>
          <p className="text-[#94a3b8] max-w-xl">
            Real-time output from a Playwright smoke suite — 142 scenarios across auth,
            payments, and API contracts with integrated performance gatekeeping.
          </p>
        </div>

        {/* Terminal window */}
        <div className="bg-[#0a0f1a] border border-[#334155] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-[#334155]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]/80" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Terminal className="w-3.5 h-3.5 text-[#475569]" />
                <span className="font-mono text-xs text-[#475569]">
                  bash — playwright-runner — 120×40
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {completed ? (
                <button
                  onClick={startExecution}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#94a3b8] hover:text-[#10b981] bg-[#0f172a] hover:bg-[#10b981]/10 border border-[#334155] hover:border-[#10b981]/40 rounded transition-all"
                  aria-label="Re-run test suite"
                >
                  <RotateCcw className="w-3 h-3" />
                  Re-run
                </button>
              ) : (
                <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 rounded">
                  <Play className="w-3 h-3" />
                  Running
                </div>
              )}
              <button
                className="p-1 text-[#475569] hover:text-[#94a3b8] transition-colors"
                aria-label="Maximize terminal"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={containerRef}
            className="h-80 sm:h-96 overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#334155 #0a0f1a" }}
          >
            {terminalLines.slice(0, visibleLines).map((line, index) => {
              if (line.type === "blank") {
                return <div key={index} className="h-3" />;
              }
              return (
                <div
                  key={index}
                  className="whitespace-pre-wrap break-all"
                  style={{ color: lineColors[line.type] || "#e2e8f0" }}
                >
                  {line.text}
                </div>
              );
            })}

            {/* Cursor */}
            {!completed && (
              <span
                className="inline-block w-2 h-4 bg-[#10b981] ml-0.5 align-middle animate-blink"
                aria-hidden="true"
              />
            )}

            {/* Completed state */}
            {completed && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[#10b981]">$</span>
                <span className="text-[#475569]">_</span>
                <span
                  className="inline-block w-2 h-4 bg-[#10b981] ml-0.5 align-middle animate-blink"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#10b981] text-[#0f172a]">
            <div className="flex items-center gap-4 text-xs font-mono font-semibold">
              <span>NORMAL</span>
              <span>playwright-runner</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono font-semibold">
              <span>UTF-8</span>
              <span>bash</span>
              <span>{visibleLines}/{terminalLines.length}</span>
            </div>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Tests Passed", value: "142", color: "#10b981" },
            { label: "Tests Failed", value: "0", color: "#10b981" },
            { label: "p95 Latency", value: "142ms", color: "#a78bfa" },
            { label: "Flake Rate", value: "0.0%", color: "#f59e0b" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="bg-[#1e293b] border border-[#334155] rounded-xl p-4 text-center"
            >
              <div
                className="text-2xl font-bold font-mono mb-1"
                style={{ color: metric.color }}
              >
                {metric.value}
              </div>
              <div className="text-xs text-[#94a3b8]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
