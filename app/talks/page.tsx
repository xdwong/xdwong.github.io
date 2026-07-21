import { InnerPage } from "../components/InnerPage";

const talks = [
  ["2024", "The Value of AI: Two Field Experiments on Medical Platform", "Texas State University; Texas Tech Buesseler Lecture Series"],
  ["2024", "Reducing Patient Tardiness: From Experiment to Implementation", "Coventry University; University of Chile"],
  ["2024", "AI in Business Research", "University of Surrey and UK Parliament"],
  ["2024", "AI in Operations Management", "University of Kent; University of Liverpool"],
  ["2024", "Physician Adoption of AI Assistant", "University of Texas at Dallas"],
  ["2023", "AI in Operations Management", "Instituto Tecnológico Autónomo de México; University of Minnesota"],
  ["2023", "Two Empirical Studies on Disruptive Innovation", "University of Florida"],
  ["2023", "Managerial Behavior in Revenue Management", "Texas A&M University"],
  ["2022", "Managerial Bias in Revenue Management", "University of Miami; University of Florida; Hong Kong Polytechnic University"],
  ["2020", "Revenue management of online platforms", "Duke University"],
  ["2020", "AI and procurement", "University of Nebraska–Lincoln; Rutgers University; University of Hong Kong"],
];

export default function TalksPage(){return <InnerPage index="05" eyebrow="Talks" title="Ideas in conversation." intro="Invited seminars, distinguished lectures, tutorials, and conference presentations connecting research evidence with academic and practitioner communities.">
  <div className="inner-section-heading"><p>Selected engagements</p><h2>Invited seminars</h2></div>
  <div className="inner-list">{talks.map(([year,title,place])=><article className="inner-row talk-row" key={title+place}><time>{year}</time><div><h3>{title}</h3><p>{place}</p></div></article>)}</div>
  <section className="callout"><p className="section-label">Conference highlights</p><h2>Plenary and tutorial presentations at POM, POMS, INFORMS, and DSI.</h2></section>
</InnerPage>}
