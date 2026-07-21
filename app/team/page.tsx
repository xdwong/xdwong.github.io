import { InnerPage } from "../components/InnerPage";

const scholars = [
  ["Ting Hou", "Ph.D. student, University of Science and Technology of China, 2021–23", "Assistant Professor, Shanghai University of Finance and Economics"],
  ["Zhi Cao", "Ph.D. student, University of Electronic Science and Technology of China, 2021–23", "Assistant Professor, Sichuan University"],
  ["Shichen Zhang", "Ph.D. student, Tianjin University, 2019–20", "Assistant Professor, Nankai University"],
  ["Qiang Li", "Ph.D. student, Rutgers University, Co-major Supervisor, 2018–21", "Assistant Professor, Wilfrid Laurier University"],
  ["Lili Yu", "Ph.D. student, University of Science and Technology of China, 2018–19", "Assistant Professor, University of Science and Technology of China"],
  ["Tingting Zhang", "Ph.D. student, University of Science and Technology of China, 2018", "Assistant Professor, Soochow University"],
  ["Yue Li", "Ph.D. student, Tsinghua University, 2019", "Assistant Professor, Beijing Jiaotong University"],
  ["Baixun Li", "Visiting scholar, 2017–18", "Professor, Shantou University"],
];
const postdocs = [["Jingyi Tian","Ph.D. from USC, 2023–25","Assistant Professor, West Texas A&M University"],["Jason Wu","Ph.D. from UT Arlington, 2022–23","Assistant Professor, UNSW Sydney"],["Qiang Li","Ph.D. from Rutgers, 2021–22","Assistant Professor, Wilfrid Laurier University"]];

function ScholarList({items}:{items:string[][]}){return <div className="team-grid">{items.map(([name,role,placement])=><article className="person-card" key={name+role}><span>{name.split(" ").map(part=>part[0]).join("")}</span><div><h2>{name}</h2><p>{role}</p><small>Placement · {placement}</small></div></article>)}</div>}

export default function TeamPage(){return <InnerPage index="07" eyebrow="Team" title="Mentoring the next generation of scholars." intro="Doctoral students, postdoctoral researchers, and visiting scholars pursuing rigorous, practically relevant operations research.">
  <div className="inner-section-heading"><p>Student and visiting scholar supervision</p><h2>Scholars</h2></div><ScholarList items={scholars}/>
  <div className="inner-section-heading secondary-heading"><p>Postdoctoral researchers</p><h2>Post-Docs</h2></div><ScholarList items={postdocs}/>
</InnerPage>}
