import { Globe, Zap, Gauge, Server } from 'lucide-react';

const categories = [
  {
    id: "web",
    label: "Web Automation",
    icon: Globe,
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.25)",
    description: "Cross-browser E2E test execution at scale",
    tools: [
      { name: "Playwright", level: 95, note: "Primary framework — parallel sharding, trace viewer" },
      { name: "Cypress", level: 88, note: "Component & integration testing, real-time reload" },
      { name: "Selenium", level: 80, note: "Legacy grid support, WebDriver protocol" },
    ],
  },
  {
    id: "api",
    label: "API Testing",
    icon: Zap,
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.25)",
    description: "Contract-first API verification & mocking",
    tools: [
      { name: "RestAssured", level: 90, note: "Java-based REST/SOAP validation, BDD syntax" },
      { name: "Supertest", level: 85, note: "Node.js HTTP assertion library, Express integration" },
      { name: "Postman/Newman", level: 92, note: "Collection runner, CI/CD pipeline integration" },
    ],
  },
  {
    id: "perf",
    label: "Performance",
    icon: Gauge,
    color: "#a78bfa",
    bgColor: "rgba(167,139,250,0.08)",
    borderColor: "rgba(167,139,250,0.25)",
    description: "Load, stress & soak testing with SLA gatekeeping",
    tools: [
      { name: "k6", level: 93, note: "JavaScript-native load testing, Grafana dashboards" },
      { name: "JMeter", level: 82, note: "Distributed load generation, protocol plugins" },
      { name: "Artillery", level: 78, note: "YAML-driven scenarios, serverless execution" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    icon: Server,
    color: "#38bdf8",
    bgColor: "rgba(56,189,248,0.08)",
    borderColor: "rgba(56,189,248,0.25)",
    description: "Containerized test environments & pipeline orchestration",
    tools: [
      { name: "Docker", level: 90, note: "Containerized test runners, multi-stage builds" },
      { name: "GitHub Actions", level: 95, note: "Matrix strategies, reusable workflows, OIDC" },
      { name: "Jenkins", level: 85, note: "Declarative pipelines, shared libraries, agents" },
    ],
  },
];

export default function FrameworksGrid() {
  return (
    <section id="frameworks" className="py-20 bg-[#1e293b]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#10b981] tracking-widest uppercase">
              // tech-stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Frameworks &amp; Toolchain
          </h2>
          <p className="text-[#94a3b8] max-w-xl">
            A battle-tested toolkit spanning the full quality assurance spectrum — from unit
            isolation to production-grade performance validation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-[#1e293b] rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: cat.borderColor }}
              >
                {/* Card header */}
                <div
                  className="px-6 py-5 border-b"
                  style={{
                    background: cat.bgColor,
                    borderColor: cat.borderColor,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: cat.bgColor, border: "1px solid " + cat.borderColor }}
                    >
                      <Icon className="w-5 h-5" style={{ color: cat.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">{cat.label}</h3>
                      <p className="text-xs text-[#94a3b8] mt-0.5">{cat.description}</p>
                    </div>
                  </div>
                </div>

                {/* Tools list */}
                <div className="px-6 py-5 space-y-5">
                  {cat.tools.map((tool) => (
                    <div key={tool.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-sm font-semibold text-slate-200">
                          {tool.name}
                        </span>
                        <span
                          className="font-mono text-xs font-bold"
                          style={{ color: cat.color }}
                        >
                          {tool.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 bg-[#0f172a] rounded-full overflow-hidden mb-1.5">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: tool.level + "%",
                            background: "linear-gradient(90deg, " + cat.color + "80, " + cat.color + ")",
                          }}
                        />
                      </div>
                      <p className="text-xs text-[#475569]">{tool.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom badges row */}
        <div className="mt-10 p-5 bg-[#1e293b] border border-[#334155] rounded-xl">
          <p className="text-xs font-mono text-[#475569] mb-3">// additional tooling</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Pact", "WireMock", "TestContainers", "Allure Reports", "SonarQube",
              "OWASP ZAP", "Grafana", "InfluxDB", "AWS CodePipeline", "GitLab CI",
              "Terraform", "Kubernetes", "Prometheus", "Datadog",
            ].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs font-mono text-[#94a3b8] bg-[#0f172a] border border-[#334155] rounded hover:border-[#10b981]/40 hover:text-[#10b981] transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
