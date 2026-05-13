"use client";

import { useState, useEffect } from "react";
import { Package, FlaskConical, FileCheck, MonitorCheck, Gauge, CheckCircle, Circle, Loader } from 'lucide-react';

const stages = [
  {
    id: "build",
    label: "Build",
    sublabel: "Compile & Package",
    icon: Package,
    duration: "~45s",
    details: "Dependency resolution, compilation, artifact generation",
    color: "#10b981",
  },
  {
    id: "unit",
    label: "Unit Tests",
    sublabel: "Jest / Vitest",
    icon: FlaskConical,
    duration: "~2m",
    details: "1,240 unit tests across 86 modules — mutation coverage 94%",
    color: "#10b981",
  },
  {
    id: "contract",
    label: "Contract Tests",
    sublabel: "Pact / OpenAPI",
    icon: FileCheck,
    duration: "~1m",
    details: "Consumer-driven contract verification against 12 provider APIs",
    color: "#10b981",
  },
  {
    id: "e2e",
    label: "E2E Suite",
    sublabel: "Playwright",
    icon: MonitorCheck,
    duration: "~8m",
    details: "340 E2E scenarios across 4 browsers — parallel sharded execution",
    color: "#10b981",
  },
  {
    id: "perf",
    label: "Performance Gate",
    sublabel: "k6 / Artillery",
    icon: Gauge,
    duration: "~5m",
    details: "p95 latency < 200ms, error rate < 0.1%, throughput > 1000 RPS",
    color: "#f59e0b",
  },
];

export default function PipelineStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    if (activeStep >= stages.length - 1) {
      const timeout = setTimeout(() => {
        setActiveStep(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [activeStep, running]);

  const getStepState = (index: number) => {
    if (index < activeStep) return "done";
    if (index === activeStep) return "active";
    return "pending";
  };

  return (
    <section id="pipeline" className="py-20 bg-[#0f172a] relative">
      <div className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#10b981] tracking-widest uppercase">
              // ci-cd-pipeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Automation Pipeline
          </h2>
          <p className="text-[#94a3b8] max-w-xl">
            A shift-left quality gate architecture — every commit traverses a
            fully automated verification chain before reaching production.
          </p>
        </div>

        {/* Pipeline visual — horizontal on desktop */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-6 sm:p-8 mb-8">
          {/* Top bar */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-[#334155]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]/70" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]/70" />
            </div>
            <span className="font-mono text-xs text-[#475569] ml-2">
              pipeline.yml — main branch — commit a3f9c12
            </span>
            <div className="ml-auto flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-mono text-xs text-[#10b981]">RUNNING</span>
            </div>
          </div>

          {/* Steps — horizontal on md+, vertical on mobile */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0">
            {stages.map((stage, index) => {
              const state = getStepState(index);
              const Icon = stage.icon;
              const isLast = index === stages.length - 1;

              return (
                <div key={stage.id} className="flex flex-col md:flex-row items-start md:items-center flex-1 min-w-0">
                  {/* Step card */}
                  <button
                    onClick={() => { setRunning(false); setActiveStep(index); }}
                    className={"w-full md:w-auto flex md:flex-col items-center md:items-center gap-4 md:gap-2 p-3 md:p-4 rounded-xl border transition-all duration-300 cursor-pointer " +
                      (state === "done"
                        ? "border-[#10b981]/40 bg-[#10b981]/5"
                        : state === "active"
                        ? "border-[#f59e0b]/60 bg-[#f59e0b]/5 shadow-lg shadow-[#f59e0b]/10"
                        : "border-[#334155] bg-[#0f172a]/50 opacity-50")}
                    aria-label={"Pipeline stage: " + stage.label}
                  >
                    {/* Icon */}
                    <div className={"w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 " +
                      (state === "done"
                        ? "bg-[#10b981]/20"
                        : state === "active"
                        ? "bg-[#f59e0b]/20"
                        : "bg-[#334155]/50")}>
                      {state === "done" ? (
                        <CheckCircle className="w-5 h-5 text-[#10b981]" />
                      ) : state === "active" ? (
                        <Loader className="w-5 h-5 text-[#f59e0b] animate-spin" />
                      ) : (
                        <Icon className="w-5 h-5 text-[#475569]" />
                      )}
                    </div>

                    {/* Labels */}
                    <div className="text-left md:text-center min-w-0">
                      <div className={"text-sm font-semibold font-mono " +
                        (state === "done"
                          ? "text-[#10b981]"
                          : state === "active"
                          ? "text-[#f59e0b]"
                          : "text-[#475569]")}>
                        {stage.label}
                      </div>
                      <div className="text-xs text-[#475569] mt-0.5">{stage.sublabel}</div>
                      <div className={"text-xs font-mono mt-1 " +
                        (state === "done" ? "text-[#10b981]/70" : state === "active" ? "text-[#f59e0b]/70" : "text-[#334155]")}>
                        {stage.duration}
                      </div>
                    </div>
                  </button>

                  {/* Connector */}
                  {!isLast && (
                    <div className="flex md:flex-row flex-col items-center justify-center mx-0 md:mx-1 my-1 md:my-0">
                      <div className={"w-px md:w-8 h-6 md:h-px rounded-full transition-all duration-500 " +
                        (index < activeStep
                          ? "bg-[#10b981]"
                          : "bg-[#334155]")} />
                      <div className={"hidden md:block w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent transition-colors duration-500 " +
                        (index < activeStep ? "border-l-[#10b981]" : "border-l-[#334155]")} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active step detail */}
        <div className="bg-[#1e293b]/50 border border-[#334155] rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#f59e0b] mt-1.5 flex-shrink-0 animate-pulse" />
            <div>
              <span className="font-mono text-sm text-[#f59e0b] font-semibold">
                {stages[activeStep].label}
              </span>
              <span className="font-mono text-sm text-[#475569] mx-2">—</span>
              <span className="text-sm text-[#94a3b8]">{stages[activeStep].details}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
