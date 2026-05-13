import { ArrowRight, TrendingDown, Shield, Database, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: "regression",
    badge: "Performance Engineering",
    badgeColor: "#10b981",
    metric: "70%",
    metricLabel: "Regression Time Reduction",
    title: "Parallel Execution Architecture for Enterprise Regression Suite",
    description:
      "Inherited a 6-hour sequential regression suite blocking nightly deployments. Redesigned the test architecture using Playwright's sharding strategy across 16 parallel workers on ephemeral Docker containers, reducing total execution time from 6h to under 90 minutes.",
    outcomes: [
      "Reduced regression cycle from 6h → 90min (70% reduction)",
      "Enabled 3× daily deployment cadence vs. once-per-night",
      "Zero flake rate improvement via retry-on-failure isolation",
      "Cost-neutral: replaced dedicated VMs with spot instances",
    ],
    stack: ["Playwright", "Docker", "GitHub Actions", "AWS Spot", "Allure Reports"],
    icon: TrendingDown,
    accentColor: "#10b981",
    bgGlow: "rgba(16,185,129,0.05)",
  },
  {
    id: "security",
    badge: "Shift-Left Security",
    badgeColor: "#f59e0b",
    metric: "Day 0",
    metricLabel: "Vulnerability Detection",
    title: "Shift-Left Security Scanning Integrated into GitLab CI",
    description:
      "Embedded OWASP ZAP dynamic analysis and Snyk dependency scanning directly into the merge request pipeline. Security findings now block merges before code reaches staging, eliminating the traditional 'security as an afterthought' model.",
    outcomes: [
      "Blocked 23 high-severity CVEs before production in Q1",
      "DAST scan on every MR — zero manual security review backlog",
      "Reduced mean-time-to-remediate from 14 days to 2 days",
      "Compliance-ready audit trail for SOC 2 Type II certification",
    ],
    stack: ["OWASP ZAP", "Snyk", "GitLab CI", "Trivy", "SonarQube"],
    icon: Shield,
    accentColor: "#f59e0b",
    bgGlow: "rgba(245,158,11,0.05)",
  },
  {
    id: "datadriven",
    badge: "Framework Architecture",
    badgeColor: "#a78bfa",
    metric: "10×",
    metricLabel: "Test Coverage Multiplier",
    title: "Custom Data-Driven Framework for Legacy COBOL Systems",
    description:
      "Legacy mainframe system had zero automated test coverage and a 3-week manual regression cycle. Built a custom data-driven framework using Excel/CSV test data sources, JDBC connectors for DB validation, and a custom reporter that mapped test IDs to business requirements.",
    outcomes: [
      "Automated 840 manual test cases in 8 weeks",
      "3-week manual regression → 4-hour automated run",
      "Requirement traceability matrix auto-generated per run",
      "Framework adopted by 3 additional legacy system teams",
    ],
    stack: ["Java", "TestNG", "RestAssured", "JDBC", "Apache POI", "Jenkins"],
    icon: Database,
    accentColor: "#a78bfa",
    bgGlow: "rgba(167,139,250,0.05)",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-[#1e293b]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#10b981] tracking-widest uppercase">
              // project-case-studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Engineering Impact
          </h2>
          <p className="text-[#94a3b8] max-w-xl">
            Measurable outcomes from real-world quality engineering engagements — focused on
            reliability, scalability, and defect prevention at the source.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-[#1e293b] border border-[#334155] rounded-2xl overflow-hidden hover:border-opacity-60 transition-all duration-300 group"
                style={{ borderColor: project.accentColor + "30" }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: metric + title */}
                    <div className="lg:w-72 flex-shrink-0">
                      {/* Badge */}
                      <div
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold mb-4"
                        style={{
                          color: project.badgeColor,
                          background: project.badgeColor + "15",
                          border: "1px solid " + project.badgeColor + "30",
                        }}
                      >
                        <Icon className="w-3 h-3" />
                        {project.badge}
                      </div>

                      {/* Big metric */}
                      <div
                        className="text-5xl sm:text-6xl font-black font-mono mb-1 leading-none"
                        style={{ color: project.accentColor }}
                      >
                        {project.metric}
                      </div>
                      <div className="text-sm text-[#94a3b8] mb-4 font-medium">
                        {project.metricLabel}
                      </div>

                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-mono text-[#94a3b8] bg-[#0f172a] border border-[#334155] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: description + outcomes */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Outcomes */}
                      <div className="space-y-2">
                        <p className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-3">
                          // outcomes
                        </p>
                        {project.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-2.5">
                            <CheckCircle
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{ color: project.accentColor }}
                            />
                            <span className="text-sm text-[#cbd5e1]">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div
                  className="px-6 sm:px-8 py-3 border-t flex items-center justify-between"
                  style={{ borderColor: project.accentColor + "20", background: project.bgGlow }}
                >
                  <span className="text-xs font-mono text-[#475569]">
                    Case Study #{String(index + 1).padStart(2, "0")}
                  </span>
                  <button
                    className="flex items-center gap-1.5 text-xs font-mono transition-colors"
                    style={{ color: project.accentColor }}
                    aria-label={"Read full case study for " + project.title}
                  >
                    Read Full Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
