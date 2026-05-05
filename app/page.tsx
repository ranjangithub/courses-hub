export default function Home() {
  const courses = [
    {
      title: "Blockchain & Web3",
      subtitle: "The Complete Course",
      port: 3001,
      color: "#f59e0b",
      border: "#78350f",
      bg: "#1c1400",
      tagBg: "rgba(245,158,11,0.12)",
      description: "From cryptographic primitives to smart contracts. How consensus works, why trust becomes code, and what Web3 actually means for builders.",
      sections: 10, lectures: 58, demos: 18,
      tags: ["Consensus", "Smart Contracts", "DeFi", "NFTs", "Zero Knowledge"],
      icon: "⛓",
    },
    {
      title: "Generative AI",
      subtitle: "The Complete Course",
      port: 3002,
      color: "#34d399",
      border: "#064e3b",
      bg: "#001a0f",
      tagBg: "rgba(52,211,153,0.12)",
      description: "Transformers, embeddings, fine-tuning, RAG, and agents. The full stack from tokens to production — no math skipped, no hand-waving.",
      sections: 11, lectures: 72, demos: 20,
      tags: ["Transformers", "Embeddings", "RAG", "Fine-tuning", "Agents"],
      icon: "🧠",
    },
    {
      title: "Context Engineering",
      subtitle: "The Complete Course",
      port: 3003,
      color: "#818cf8",
      border: "#312e81",
      bg: "#0d0b1f",
      tagBg: "rgba(129,140,248,0.12)",
      description: "Design the information ecosystem your AI lives in. Memory, retrieval, pruning, tool loadout, quarantine, evaluation — the discipline that separates demos from production.",
      sections: 11, lectures: 68, demos: 32,
      tags: ["RAG", "Memory", "Pruning", "Tool Loadout", "12-Factor Agents"],
      icon: "🏗",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #27272a", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Course Hub</div>
          <div style={{ color: "#52525b", fontSize: 11, marginTop: 2 }}>Three interactive courses — running locally</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#52525b" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          3 servers active
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "56px 32px 32px", textAlign: "center" }}>
        <div style={{ color: "#52525b", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Interactive Learning Platform</div>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Built for Video Recording</h1>
        <p style={{ color: "#71717a", fontSize: 13, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
          Each course is a standalone Next.js app with live simulators you can drive during lectures.
          Open a course, navigate to a scene, and demo the interactive component on screen.
        </p>
      </div>

      {/* Cards */}
      <div style={{ padding: "0 32px 56px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 1080, margin: "0 auto", width: "100%" }}>
        {courses.map((c) => (
          <div key={c.port} style={{ background: "#18181b", border: `1px solid ${c.border}`, borderRadius: 14, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Card top */}
            <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #27272a" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 32 }}>{c.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 99, background: c.color, color: "#09090b" }}>
                  :{c.port}
                </span>
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{c.title}</div>
              <div style={{ color: "#52525b", fontSize: 11, marginTop: 2 }}>{c.subtitle}</div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid #27272a" }}>
              {[["Sections", c.sections], ["Lectures", c.lectures], ["Demos", c.demos]].map(([label, val], i) => (
                <div key={label} style={{ padding: "10px 8px", textAlign: "center", borderRight: i < 2 ? "1px solid #27272a" : "none" }}>
                  <div style={{ color: c.color, fontWeight: 700, fontSize: 18 }}>{val}</div>
                  <div style={{ color: "#52525b", fontSize: 10 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ padding: "14px 20px", flex: 1 }}>
              <p style={{ color: "#71717a", fontSize: 12, lineHeight: 1.7 }}>{c.description}</p>
            </div>

            {/* Tags */}
            <div style={{ padding: "0 20px 14px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {c.tags.map((tag) => (
                <span key={tag} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 99, background: c.tagBg, color: c.color, border: `1px solid ${c.color}30` }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ padding: "0 20px 20px" }}>
              <a
                href={`http://localhost:${c.port}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center", padding: "10px", borderRadius: 8, background: c.color, color: "#09090b", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
              >
                Open Course →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Start guide */}
      <div style={{ borderTop: "1px solid #27272a", padding: "32px", maxWidth: 1080, margin: "0 auto", width: "100%" }}>
        <div style={{ color: "#52525b", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Start everything at once</div>
        <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 10, padding: 20 }}>
          <pre style={{ fontSize: 12, color: "#a1a1aa", lineHeight: 1.8, overflowX: "auto" }}>{`# From the ranjangstack directory:
./start-all.sh

# Stop everything:
./start-all.sh stop`}</pre>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #27272a", padding: "16px", textAlign: "center", color: "#3f3f46", fontSize: 11 }}>
        courses-hub · port 3000 · 3 independent repos, 1 launchpad
      </div>
    </div>
  );
}
