import { InnerPage } from "../components/InnerPage";

const courses = [
  ["Ph.D. Level", "Behavioral Operations Management", "University of Houston, Bauer College of Business", "2022"],
  ["MBA Level", "Mini-MBA on Business Analytics", "University of Houston, Bauer College of Business", "2021"],
  ["Undergraduate Level", "Demand and Supply Integration", "University of Houston, Bauer College of Business", "2022, 2023"],
];

export default function TeachingPage(){return <InnerPage index="06" eyebrow="Teaching" title="Learning through evidence and inquiry." intro="Courses designed to help students connect analytical tools, behavioral insight, and operational judgment to consequential decisions.">
  <div className="course-grid">{courses.map(([level,title,school,year])=><article className="course-card" key={level}><p className="section-label">{level}</p><h2>{title}</h2><p>{school}</p><time>{year}</time></article>)}</div>
</InnerPage>}
