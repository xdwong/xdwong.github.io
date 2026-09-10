import { InnerPage } from "../components/InnerPage";

const scholars = [
  ["Feiteng Huang", "Ph.D. student, University of Houston, 2022–26", "Assistant Professor, Harbin Institute of Technology, China"],
  ["Jia Zhao", "Ph.D. student, University of Chinese Academy of Sciences, 2024–25", "Assistant Professor, Shanghai University of Finance and Economics, China"],
  ["Junqi Liu", "Ph.D. student, Beihang University, 2023–25", "Postdoctoral Fellow, Beijing Normal University, China"],
  ["Ting Hou", "Ph.D. student, University of Science and Technology of China, 2021–23", "Assistant Professor, Shanghai University of Finance and Economics, China", "Winner, POMS CSOM Best Student Paper, 2023"],
  ["Zhi Cao", "Ph.D. student, University of Electronic Science and Technology of China, 2021–23", "Assistant Professor, Sichuan University"],
  ["Shichen Zhang", "Ph.D. student, Tianjin University, 2019–20", "Associate Professor, Tianjin University, Tianjin, China", "Best Student Paper, International Workshop on Behavioral Operations Management, 2020"],
  ["Qiang Li", "Ph.D. student, Rutgers University, Co-major Supervisor, 2018–21", "Assistant Professor, Wilfrid Laurier University"],
  ["Lili Yu", "Ph.D. student, University of Science and Technology of China, 2018–19", "Assistant Professor, University of Science and Technology of China"],
  ["Tingting Zhang", "Ph.D. student, University of Science and Technology of China, 2018", "Assistant Professor, Soochow University"],
  ["Yue Li", "Ph.D. student, Tsinghua University, 2019", "Assistant Professor, Beijing Jiaotong University"],
  ["Baixun Li", "Associate Professor, Guangdong University of Finance and Economics, 2017–18", "Professor, Shantou University, China"],
];
const postdocs = [["Jian Liu","Ph.D. from NUAA and Missouri S&T, 2022–23","Assistant Research Professor, Missouri S&T"],["Jingyi Tian","Ph.D. from USC, 2023–25","Assistant Professor, West Texas A&M University"],["Jason Wu","Ph.D. from UT Arlington, 2022–23","Assistant Professor, UNSW Sydney"],["Qiang Li","Ph.D. from Rutgers, 2021–22","Assistant Professor, Wilfrid Laurier University"]];

function ScholarList({items}:{items:string[][]}){return <div className="team-grid">{items.map(([name,role,placement,award])=><article className="person-card" key={name+role}><span>{name.split(" ").map(part=>part[0]).join("")}</span><div><h2>{name}</h2><p>{role}</p>{award&&<p className="person-award">Award · {award}</p>}<small>Placement · {placement}</small></div></article>)}</div>}

export default function TeamPage(){return <InnerPage index="05" eyebrow="Team" title="Team" intro="Student supervision and postdoctoral mentorship.">
  <div className="inner-section-heading"><p>Doctoral supervision</p><h2>Students</h2></div><ScholarList items={scholars}/>
  <div className="inner-section-heading secondary-heading"><p>Postdoctoral researchers</p><h2>Post-Docs</h2></div><ScholarList items={postdocs}/>
</InnerPage>}
