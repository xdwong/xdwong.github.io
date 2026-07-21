import { InnerPage } from "../components/InnerPage";

const groups = [
  ["Department Editor", ["Journal of Operations Management, 2024–present", "Decision Sciences Journal, 2022–present"]],
  ["Senior Editor", ["Production and Operations Management, 2019–present"]],
  ["Associate Editor", ["Decision Sciences Journal, 2019–2022", "Journal of Modelling in Management, 2014–2017"]],
  ["Special Issue Co-Editor", ["Information Systems Research — Compassionate AI", "Journal of Supply Chain Management — Artificial Intelligence and Supply Chain Management: Theoretical Innovations and Interdisciplinary Approaches", "IEEE Transactions on Engineering Management — Operational Innovation in Interdisciplinary Research", "Journal of Operations Management — Emerging Technologies in Healthcare", "Production and Operations Management — Responsible Data Science", "Decision Sciences Journal — AI-Driven Decision Sciences", "Transportation Research Part E — Platforms for Logistics and Supply Chain Operations"]],
  ["Editorial Board", ["Journal of Operations Management, 2021–2023", "Production and Operations Management, 2017–2019"]],
  ["Competition Judge", ["MSOM Student Paper Competition, 2023", "POMS College of Service Operations Management Best Student Paper Competition, 2023", "Jeff McGill Student Paper Award, 2022", "INFORMS Poster Competition, 2021", "Co-chair, INFORMS Service Science Best Student Paper Award, 2021–2022", "POMS College of Supply Chain Management Best Student Paper Competition, 2021", "INFORMS TIMES Best Working Paper Competition, 2020", "INFORMS Behavioral Operations Working Paper Competition, 2020–2021"]],
  ["Conference Organization", ["Cluster Chair, INFORMS Annual Meeting, 2022", "Session Chair, National Conference on Supply Chain and Operation Management, 2021", "Organizer, INFORMS Service Science Doctoral Student Consortium, 2021", "Track Chair, Empirical Operations Management, POMS, Washington, D.C., 2019", "Session Chair, Retail Operations Management, POMS, Washington, D.C., 2019", "Session Chair, OM/Marketing Interface, China Marketing International Conference, Guangzhou, 2019"]],
  ["Other Leadership", ["Panel Discussant, Decision Sciences in Practice, DSI Conference, 2021", "Secretary-Treasurer, INFORMS Service Science Section, 2021–present"]],
];

export default function ServicePage(){return <InnerPage index="04" eyebrow="Service" title="Stewardship of the scholarly community." intro="The complete editorial, special-issue, competition, conference, and professional-service record listed on the original site.">
  <div className="group-grid">{groups.map(([title,items]) => <section className="content-group" key={title as string}><p className="section-label">{title}</p><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul></section>)}</div>
</InnerPage>}
