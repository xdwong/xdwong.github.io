import { InnerPage } from "../components/InnerPage";

const overview = [
  ["Appointments",["Professor, University of Houston","Department Chair, Decision & Information Sciences","Endowed C.T. Bauer Chair of AI","Founding Director, Bauer Human-Centered AI Institute"]],
  ["Education",["Ph.D., Operations Management, The University of Texas at Dallas, 2013"]],
  ["Editorial Leadership",["Department Editor, Journal of Operations Management","Department Editor, Decision Sciences Journal","Senior Editor, Production and Operations Management"]],
  ["Research",["Human-Centered AI and AI & Work","AI in Healthcare","AI-Enabled Operations and Platforms"]],
];

export default function CvPage(){return <InnerPage index="07" eyebrow="Curriculum Vitae" title="Curriculum Vitae" intro="Professional overview">
  <div className="cv-intro"><div><a href="/research">Publications →</a><a href="https://scholar.google.com/citations?hl=en&user=2RJSbyMAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a></div></div>
  <div className="cv-groups">{overview.map(([title,items])=><section key={title as string}><h2>{title}</h2><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul></section>)}</div>
</InnerPage>}
