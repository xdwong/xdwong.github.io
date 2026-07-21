import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const publications = [
  { year: "2026", title: "Tele-follow-up and outpatient care", authors: "Wei Gu, Meng Li, Shujing Sun", journal: "Production and Operations Management · Forthcoming", note: "POMS College Best Paper; INFORMS TIMES Runner-up" },
  { year: "2026", title: "Reducing patient tardiness: From experiment to implementation", authors: "Wei Gu, Meng Li, Shichen Zhang", journal: "Production and Operations Management 35(5), 1630–1647" },
  { year: "2026", title: "Helping under-resourced hospitals: Evidence from a medical poverty alleviation program", authors: "Qiang Li, Meng Li, Wei Gu, Zhi Cao", journal: "Manufacturing & Service Operations Management · Forthcoming" },
  { year: "2026", title: "Entrant integrative capability and incumbent bias", authors: "Meng Li, Chao Liang, Shichen Zhang", journal: "Production and Operations Management 35(4), 1469–1485" },
  { year: "2026", title: "Replenishment recommendation in convenience stores", authors: "Meng Li, Shuming Wang, Liang Xu", journal: "Production and Operations Management 35(3), 1095–1112" },
  { year: "2025", title: "Algorithmic supervisor and employee performance", authors: "Wei Gu, Meng Li, Shichen Zhang", journal: "Production and Operations Management 34(10), 3101–3118" },
];

const updates = [
  ["2026", "Five new articles published or forthcoming in leading operations journals."],
  ["2025", "Appointed Endowed C.T. Bauer Chair of AI and received the President’s Circle Award."],
  ["2024", "Delivered the Buesseler Distinguished Lecture at Texas Tech."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Professor · Researcher · Institution Builder</p>
          <h1>Building a more<br/><em>human-centered</em><br/>future with AI.</h1>
          <p className="intro">I study how artificial intelligence reshapes organizational decision-making, healthcare delivery, and operational systems—and how we can integrate it into human work responsibly.</p>
          <div className="hero-actions">
            <a className="button primary" href="/research">Explore research <span>→</span></a>
            <a className="button text" href="https://scholar.google.com/citations?hl=en&user=2RJSbyMAAAAJ" target="_blank" rel="noreferrer">Google Scholar <span>↗</span></a>
          </div>
        </div>
        <aside className="profile-card" aria-label="Profile">
          <div className="portrait-wrap">
            <img src="/meng.png" alt="Portrait of Dr. Meng Li" />
            <span className="portrait-fallback">ML</span>
          </div>
          <div className="profile-meta">
            <p>Dr. Meng Li</p>
            <span>Endowed C.T. Bauer Chair of AI<br/>University of Houston</span>
          </div>
        </aside>
      </section>

      <section className="affiliations" aria-label="Current appointments">
        <p>Founding Director<br/><strong>Bauer Human-Centered AI Institute</strong></p>
        <p>Department Chair<br/><strong>Decision & Information Sciences</strong></p>
        <p>Editorial Leadership<br/><strong>JOM · DSJ · POM</strong></p>
      </section>

      <section className="about section-grid">
        <p className="section-label">01 — About</p>
        <div className="section-body large-copy">
          <p>Dr. Meng Li is a professor, the founding director of the Bauer Human-Centered AI Institute, department chair of DISC, and Endowed C.T. Bauer Chair of AI at the C.T. Bauer College of Business, University of Houston.</p>
          <p>He is a scholar of human-centered AI, studying how AI reshapes organizational decision making, healthcare delivery, and operational systems. Through research, education, and institution building, he develops evidence-based approaches for integrating AI into human work.</p>
          <p>His research has appeared in journals such as <em>Management Science</em>, <em>Manufacturing & Service Operations Management</em>, <em>Operations Research</em>, <em>Production and Operations Management</em>, <em>Journal of Operations Management</em>, <em>Strategic Management Journal</em>, and <em>Nature Sustainability</em>. He is a Department Editor for <em>Journal of Operations Management</em> and <em>Decision Sciences Journal</em>, and a Senior Editor for <em>Production and Operations Management</em>.</p>
          <p>He has edited AI-related Special Issues for journals including <em>Information Systems Research</em>, <em>Journal of Operations Management</em>, and <em>Production and Operations Management</em>. He has held visiting positions, including a recent visiting appointment at the University of Oxford.</p>
        </div>
        <div className="fact"><span>Education</span><strong>Ph.D., Operations Management</strong><p>The University of Texas at Dallas, 2013</p></div>
      </section>

      <section className="research section-grid dark" id="research">
        <p className="section-label">02 — Research</p>
        <div className="section-title"><p>Selected publications</p><h2>Research grounded in consequential, real-world problems.</h2></div>
        <div className="topics">
          <span>Human-centered AI</span><span>Healthcare operations</span><span>Field experiments</span><span>Supply chains</span>
        </div>
        <div className="publication-list">
          {publications.map((paper, index) => <article className="publication" key={paper.title}>
            <span className="pub-index">{String(index + 1).padStart(2, "0")}</span>
            <div><p className="pub-title">{paper.title}</p><p className="authors">{paper.authors}</p><p className="journal">{paper.journal}</p>{paper.note && <span className="note">{paper.note}</span>}</div>
            <span className="year">{paper.year}</span>
          </article>)}
          <a className="all-link" href="/research">View research portfolio <span>→</span></a>
        </div>
      </section>

      <section className="updates section-grid">
        <p className="section-label">03 — Updates</p>
        <div className="section-title"><p>Recent news</p><h2>Research, recognition, and academic service.</h2></div>
        <div className="updates-list">{updates.map(([year, text]) => <div className="update" key={text}><span>{year}</span><p>{text}</p></div>)}</div>
      </section>

      <section className="roles" id="service">
        <div className="role-card featured"><p className="section-label">04 — Service</p><h2>Editorial leadership</h2><p>Department Editor, <em>Journal of Operations Management</em> and <em>Decision Sciences Journal</em>; Senior Editor, <em>Production and Operations Management</em>.</p><a href="/service">View academic service →</a></div>
        <div className="role-card" id="talks"><p className="section-label">05 — Talks</p><h2>Ideas in conversation</h2><p>Invited seminars and keynotes on AI in operations, healthcare platforms, field experimentation, and organizational decision-making.</p><a href="/talks">Selected talks →</a></div>
        <div className="role-card" id="teaching"><p className="section-label">06 — Teaching</p><h2>Learning by inquiry</h2><p>Behavioral Operations Management, Business Analytics, and Demand & Supply Integration at Ph.D., MBA, and undergraduate levels.</p><a href="/teaching">Teaching portfolio →</a></div>
        <div className="role-card" id="team"><p className="section-label">07 — Team</p><h2>Mentoring scholars</h2><p>Supporting doctoral students, postdoctoral researchers, and visiting scholars pursuing rigorous, practically relevant research.</p><a href="/team">Meet the team →</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
