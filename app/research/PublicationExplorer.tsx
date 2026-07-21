"use client";

import { useMemo, useState } from "react";
import { publications, topics, type Topic } from "./publications";

export function PublicationExplorer() {
  const [activeTopic, setActiveTopic] = useState<"All" | Topic>("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return publications.filter((paper) => {
      const matchesTopic = activeTopic === "All" || paper.topics.includes(activeTopic);
      const matchesQuery = !term || `${paper.title} ${paper.authors} ${paper.journal} ${paper.year} ${paper.section}`.toLowerCase().includes(term);
      return matchesTopic && matchesQuery;
    });
  }, [activeTopic, query]);

  const clear = () => { setActiveTopic("All"); setQuery(""); };

  return <>
    <section className="research-controls" aria-label="Filter publications">
      <div className="research-search"><label htmlFor="publication-search">Search publications</label><input id="publication-search" type="search" value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Title, author, journal, or year" /></div>
      <div className="topic-filters" role="group" aria-label="Research topics">{topics.map((topic)=><button type="button" className={topic===activeTopic?"active":""} aria-pressed={topic===activeTopic} onClick={()=>setActiveTopic(topic)} key={topic}>{topic}</button>)}</div>
      <div className="results-meta"><p><strong>{filtered.length}</strong> {filtered.length===1?"publication":"publications"}</p>{(activeTopic!=="All"||query)&&<button type="button" onClick={clear}>Clear filters</button>}</div>
    </section>

    {filtered.length ? <div className="publication-cards">{filtered.map((paper,index)=><a className="publication-card" href={`/research/${paper.slug}`} key={paper.slug}>
      <span className="publication-number">{String(index+1).padStart(2,"0")}</span>
      <div className="publication-card-main"><div className="publication-tags"><span className="publication-section">{paper.section}</span>{paper.topics.map(topic=><span key={topic}>{topic}</span>)}</div><h2>{paper.title}</h2><p>{paper.authors}</p><small>{paper.journal}</small>{paper.note&&<em>{paper.note}</em>}</div>
      <div className="publication-card-side"><time>{paper.year}</time><span aria-hidden="true">↗</span></div>
    </a>)}</div> : <div className="empty-state"><h2>No publications match.</h2><p>Try another topic or search term.</p><button type="button" onClick={clear}>Reset search and filters</button></div>}
  </>;
}
