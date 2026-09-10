"use client";

import { useMemo, useState } from "react";
import { publications, type Publication } from "./publications";

type DetailMode = "abstract" | "cite";
type Theme = "All" | "Human-Centered AI / AI & Work" | "AI in Healthcare" | "AI & Operations / Platforms";
const themes: Theme[] = ["All", "Human-Centered AI / AI & Work", "AI in Healthcare", "AI & Operations / Platforms"];
const inTheme = (paper: Publication, theme: Theme) => theme === "All" ||
  (theme === "Human-Centered AI / AI & Work" && paper.topics.some(topic=>["Human-Centered AI","Behavioral Operations"].includes(topic))) ||
  (theme === "AI in Healthcare" && paper.topics.includes("Healthcare")) ||
  (theme === "AI & Operations / Platforms" && paper.topics.some(topic=>["Platforms & Retail","Supply Chains","Methods & Practice"].includes(topic)));

function citationFor(paper: Publication) {
  return `${paper.authors} (${paper.year}). ${paper.title}. ${paper.journal}.`;
}

export function PublicationExplorer() {
  const [activeTopic, setActiveTopic] = useState<Theme>("All");
  const [query, setQuery] = useState("");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [detailMode, setDetailMode] = useState<DetailMode>("abstract");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return publications.filter((paper) => {
      const matchesTopic = inTheme(paper, activeTopic);
      const matchesQuery = !term || `${paper.title} ${paper.authors} ${paper.journal} ${paper.year} ${paper.section}`.toLowerCase().includes(term);
      return matchesTopic && matchesQuery;
    });
  }, [activeTopic, query]);

  const clear = () => { setActiveTopic("All"); setQuery(""); setOpenSlug(null); };
  const reveal = (slug: string, mode: DetailMode) => {
    if (openSlug === slug && detailMode === mode) setOpenSlug(null);
    else { setOpenSlug(slug); setDetailMode(mode); }
  };

  return <>
    <section className="research-controls" aria-label="Filter publications">
      <div className="research-search"><label htmlFor="publication-search">Search publications</label><input id="publication-search" type="search" value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Title, author, journal, or year" /></div>
      <div className="topic-filters" role="group" aria-label="Research themes">{themes.map((topic)=><button type="button" className={topic===activeTopic?"active":""} aria-pressed={topic===activeTopic} onClick={()=>setActiveTopic(topic)} key={topic}>{topic}</button>)}</div>
      <div className="results-meta"><p><strong>{filtered.length}</strong> {filtered.length===1?"publication":"publications"}</p>{(activeTopic!=="All"||query)&&<button type="button" onClick={clear}>Clear filters</button>}</div>
    </section>

    {filtered.length ? <div className="publication-cards">{filtered.map((paper,index)=>{
      const isOpen = openSlug === paper.slug;
      return <article className={`publication-card ${isOpen?"is-open":""}`} key={paper.slug}>
        <span className="publication-number">{String(index+1).padStart(2,"0")}</span>
        <div className="publication-card-main">
          <div className="publication-tags"><span className="publication-section">{paper.section}</span>{paper.topics.map(topic=><span key={topic}>{topic}</span>)}</div>
          <button className="publication-title-button" type="button" aria-expanded={isOpen} aria-controls={`details-${paper.slug}`} onClick={()=>reveal(paper.slug,"abstract")}><h2>{paper.title}</h2></button>
          <p>{paper.authors}</p><small>{paper.journal}</small>{paper.note&&<em>{paper.note}</em>}
          <div className="publication-actions">
            <button type="button" className={isOpen&&detailMode==="abstract"?"active":""} onClick={()=>reveal(paper.slug,"abstract")}>Abstract</button>
            <button type="button" className={isOpen&&detailMode==="cite"?"active":""} onClick={()=>reveal(paper.slug,"cite")}>Cite</button>
            {paper.sourceUrl&&<a href={paper.sourceUrl} target="_blank" rel="noreferrer">Paper ↗</a>}
            <a href={`/research/${paper.slug}`}>Record →</a>
          </div>
        </div>
        <div className="publication-card-side"><time>{paper.year}</time><button type="button" aria-label={`${isOpen?"Close":"Open"} ${paper.title}`} aria-expanded={isOpen} onClick={()=>reveal(paper.slug,"abstract")}>{isOpen?"−":"+"}</button></div>
        {isOpen&&<div className="publication-detail-panel" id={`details-${paper.slug}`}>
          <p className="detail-panel-label">{detailMode === "abstract" ? "Abstract" : "Suggested citation"}</p>
          {detailMode === "abstract" ? <div><p>{paper.abstract || "Abstract not available."}</p>{paper.sourceUrl&&<a href={paper.sourceUrl} target="_blank" rel="noreferrer">View publication ↗</a>}</div> : <p className="citation-text">{citationFor(paper)}</p>}
        </div>}
      </article>;
    })}</div> : <div className="empty-state"><h2>No publications match.</h2><p>Try another topic or search term.</p><button type="button" onClick={clear}>Reset search and filters</button></div>}
  </>;
}
