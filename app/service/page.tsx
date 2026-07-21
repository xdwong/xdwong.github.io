import { InnerPage } from "../components/InnerPage";

const groups = [
  ["Department Editor", ["Journal of Operations Management, 2024–", "Decision Sciences Journal, 2022–present"]],
  ["Senior Editor", ["Production and Operations Management, 2019–present"]],
  ["Associate Editor", ["Decision Sciences Journal, 2019–2022", "Journal of Modelling in Management, 2014–2017"]],
  ["Special Issue Co-Editor", ["Information Systems Research: Compassionate AI", "Journal of Supply Chain Management: Artificial Intelligence and Supply Chain Management", "Journal of Operations Management: Emerging Technologies in Healthcare", "Production and Operations Management: Responsible Data Science", "Decision Sciences Journal: AI-Driven Decision Sciences"]],
  ["Competition & Conference Service", ["Judge, MSOM Student Paper Competition, 2023", "Judge, POMS College of Service Operations Management Best Student Paper Competition, 2023", "Co-chair, INFORMS Service Science Best Student Paper Award, 2021–2022", "Cluster Chair, INFORMS Annual Meeting, 2022", "Track Chair, Empirical Operations Management, POMS, 2019"]],
];

export default function ServicePage(){return <InnerPage index="04" eyebrow="Service" title="Stewardship of the scholarly community." intro="Editorial leadership, special issues, conference organization, and service that helps rigorous operations research reach wider audiences.">
  <div className="group-grid">{groups.map(([title,items]) => <section className="content-group" key={title as string}><p className="section-label">{title}</p><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul></section>)}</div>
</InnerPage>}
