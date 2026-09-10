import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const pillars = [
  { index:"01", label:"Research", title:"AI & Work\nHealthcare AI\nAI-Enabled Operations", text:"Field evidence and analytical research on how people, organizations, and operational systems adopt and work with artificial intelligence.", href:"/research", link:"Explore research" },
  { index:"02", label:"Academic Leadership", title:"Department Leadership · Institute Building · Editorial Leadership", text:"Building academic programs, research communities, and institutional capacity around consequential questions in AI and operations.", href:"/leadership", link:"Leadership & impact" },
  { index:"03", label:"External Impact", title:"Industry Engagement · AI Experimentation · Research Translation", text:"Connecting rigorous research with healthcare, platforms, supply chains, and the organizations implementing AI in practice.", href:"/institute", link:"Human-Centered AI Institute" },
];

const selected = [
  ["AI & Work", "Algorithmic supervisor and employee performance", "Production and Operations Management · 2025"],
  ["Healthcare AI", "Physician adoption of AI assistant", "Manufacturing & Service Operations Management · 2024"],
  ["AI-Enabled Operations", "AI and procurement", "Manufacturing & Service Operations Management · 2022"],
];

const news = [
  ["2026", "Five articles published or forthcoming in leading operations journals."],
  ["2025", "Appointed Endowed C.T. Bauer Chair of AI and received the President’s Circle Award."],
  ["2024", "Delivered the John Aure Buesseler Distinguished Lecture at Texas Tech."],
];

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="leader-hero">
      <div className="leader-copy">
        <p className="leader-name">Meng Li, Ph.D.</p>
        <h1>Building evidence, organizations, and partnerships for <em>human-centered AI.</em></h1>
        <p className="leader-roles">Department Chair <span>·</span> Endowed C.T. Bauer Chair of AI <span>·</span> Founding Director, Bauer Human-Centered AI Institute</p>
      </div>
      <figure className="leader-portrait"><img src="/meng-color.jpg" alt="Dr. Meng Li"/><figcaption>University of Houston · C.T. Bauer College of Business</figcaption></figure>
    </section>

    <section className="leader-bio" id="about"><p className="section-label">About</p><div><p>Dr. Meng Li is a professor, department chair of Decision & Information Sciences, Endowed C.T. Bauer Chair of AI, and founding director of the Bauer Human-Centered AI Institute at the University of Houston. His work examines how artificial intelligence reshapes organizational decision-making, healthcare delivery, and operational systems.</p><a href="/about">Full biography →</a></div></section>

    <section className="pillar-grid" aria-label="Research, leadership, and impact">
      {pillars.map((pillar)=><article className="pillar" key={pillar.label}><span>{pillar.index}</span><p>{pillar.label}</p><h2>{pillar.title}</h2><div><p>{pillar.text}</p><a href={pillar.href}>{pillar.link} →</a></div></article>)}
    </section>

    <section className="home-records">
      <div className="home-record-block"><header><p>Selected Research</p><a href="/research">All publications →</a></header>{selected.map(([theme,title,outlet])=><a className="home-record" href="/research" key={title}><span>{theme}</span><div><h3>{title}</h3><p>{outlet}</p></div><b>↗</b></a>)}</div>
      <div className="home-record-block"><header><p>News & Recognition</p></header>{news.map(([year,text])=><div className="home-news" key={text}><time>{year}</time><p>{text}</p></div>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
