import { InnerPage } from "../components/InnerPage";

const areas = [
  ["Department Leadership","Department Chair","Leading Decision & Information Sciences at the C.T. Bauer College of Business."],
  ["Institute Building","Founding Director","Building the Bauer Human-Centered AI Institute as a home for research, education, and engagement around responsible AI in human work."],
  ["Editorial Leadership","Department & Senior Editor","Department Editor for Journal of Operations Management and Decision Sciences Journal; Senior Editor for Production and Operations Management."],
  ["People Development","Mentorship","Supervision of doctoral students, visiting scholars, and postdoctoral researchers, with placements across universities in the United States, Canada, China, and Australia."],
];

export default function LeadershipPage(){return <InnerPage index="03" eyebrow="Leadership & Impact" title="Leadership & Impact" intro="Academic leadership">
  <section className="leadership-intro"><p>Academic leadership, for me, means building the conditions in which ambitious scholarship, talented people, and external partners can do consequential work together.</p></section>
  <div className="leadership-grid">{areas.map(([label,title,text],i)=><article key={label}><span>0{i+1}</span><p>{label}</p><h2>{title}</h2><div><p>{text}</p>{label==="People Development"&&<a href="/people">Meet the people →</a>}{label==="Editorial Leadership"&&<a href="/service">Editorial service →</a>}</div></article>)}</div>
  <section className="impact-band"><p>Leadership portfolio</p><div><span>Scholarship</span><span>Institution building</span><span>Editorial stewardship</span><span>Research translation</span></div></section>
</InnerPage>}
