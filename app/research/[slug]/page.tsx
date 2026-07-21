import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { findPublication, publications } from "../publications";

export function generateStaticParams() { return publications.map((paper)=>({slug:paper.slug})); }

export default async function PublicationPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const paper = findPublication(slug);
  if (!paper) return <main><SiteHeader/><section className="paper-not-found"><h1>Publication not found.</h1><a href="/research">← Back to research</a></section><SiteFooter/></main>;
  return <main>
    <SiteHeader />
    <article className="paper-detail">
      <a className="back-link" href="/research">← All publications</a>
      <div className="paper-detail-grid">
        <aside><p className="eyebrow">{paper.section} · {paper.year}</p><div className="detail-topics">{paper.topics.map(topic=><span key={topic}>{topic}</span>)}</div></aside>
        <div className="paper-detail-main"><h1>{paper.title}</h1><p className="detail-authors">{paper.authors}</p><p className="detail-journal">{paper.journal}</p>{paper.note&&<p className="detail-note">{paper.note}</p>}</div>
      </div>
      <div className="paper-facts"><div><span>Type & year</span><strong>{paper.section} · {paper.year}</strong></div><div><span>Research theme</span><strong>{paper.topics.join(" · ")}</strong></div><div><span>Publication</span><strong>{paper.journal}</strong></div></div>
      <section className="paper-access"><p className="section-label">Read the research</p><div><h2>Publication record and full-text access</h2><p>Use the publisher or working-paper page for the abstract, citation, access options, and available full text.</p>{paper.sourceUrl?<a href={paper.sourceUrl} target="_blank" rel="noreferrer">View publication ↗</a>:<span className="unavailable-link">External record not yet listed</span>}</div></section>
    </article>
    <SiteFooter />
  </main>;
}
