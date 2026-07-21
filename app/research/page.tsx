import { InnerPage } from "../components/InnerPage";

const papers = [
  ["2026", "Tele-follow-up and outpatient care", "Wei Gu, Meng Li, Shujing Sun", "Production and Operations Management · Forthcoming"],
  ["2026", "Reducing patient tardiness: From experiment to implementation", "Wei Gu, Meng Li, Shichen Zhang", "Production and Operations Management 35(5), 1630–1647"],
  ["2026", "Helping under-resourced hospitals: Evidence from a medical poverty alleviation program", "Qiang Li, Meng Li, Wei Gu, Zhi Cao", "Manufacturing & Service Operations Management · Forthcoming"],
  ["2026", "Entrant integrative capability and incumbent bias", "Meng Li, Chao Liang, Shichen Zhang", "Production and Operations Management 35(4), 1469–1485"],
  ["2026", "Replenishment recommendation in convenience stores", "Meng Li, Shuming Wang, Liang Xu", "Production and Operations Management 35(3), 1095–1112"],
  ["2026", "Operational process and agency considerations in managing emerging technologies in healthcare", "Elliot Bendoly, Meng Li, Jeffrey Smith, Paul Pavlou", "Journal of Operations Management 72(2), 164–175"],
  ["2026", "Retail platform analytics: Practice, literature, and future research", "Meng Li, Tao Li, Lili Yu", "Production and Operations Management 35(1), 69–86"],
  ["2025", "Algorithmic supervisor and employee performance", "Wei Gu, Meng Li, Shichen Zhang", "Production and Operations Management 34(10), 3101–3118"],
  ["2025", "Working with practitioners in Operations Management", "Haijian Si, Meng Li, Christoph H. Loch", "Manufacturing & Service Operations Management 27(5), 1332–1342"],
  ["2025", "Mental accounting in allocating capacity", "Meng Li, Yan Liu", "Manufacturing & Service Operations Management 27(5), 1497–1514"],
  ["2025", "Fast delivery: B2B field experiments amid COVID-19 outbreak and new normal", "Meng Li, Shichen Zhang", "Management Science 71(5), 4049–4065"],
  ["2024", "Physician adoption of AI assistant", "Ting Hou, Meng Li, Ricky Tan, Huazhong Zhao", "Manufacturing & Service Operations Management 26(5), 1639–1655"],
  ["2024", "AI in business research", "Zhi Cao, Meng Li, Paul A. Pavlou", "Decision Sciences Journal 55(6), 518–532"],
  ["2023", "Supplier bottleneck and information dissemination", "Meng Li, Yue Li, Yang Zhang", "Journal of Operations Management 69(4), 558–585"],
  ["2023", "Field experiments in operations management", "Yang Gao, Meng Li, Shujing Sun", "Journal of Operations Management 69(4), 676–701"],
  ["2022", "Managerial regret and inventory pricing", "Meng Li, Yan Liu", "Management Science 68(6), 4398–4414"],
  ["2022", "AI and procurement", "Ruomeng Cui, Meng Li, Shichen Zhang", "Manufacturing & Service Operations Management 24(2), 691–706"],
  ["2020", "Value of high-quality logistics: Evidence from a clash between SF Express and Alibaba", "Ruomeng Cui, Meng Li, Qiang Li", "Management Science 66(9), 3879–3902"],
  ["2019", "Incumbent repositioning with decision biases", "Xianjin Du, Meng Li, Brian Wu", "Strategic Management Journal 40(12), 1984–2010"],
  ["2017", "Overconfident competing newsvendors", "Meng Li, Nicholas Petruzzi, Jun Zhang", "Management Science 63(8), 2637–2646"],
];

export default function ResearchPage() {
  return <InnerPage index="02" eyebrow="Research" title="Research with real-world consequence." intro="Human-centered AI, healthcare operations, retail platforms, field experiments, and the behavioral foundations of operational decisions.">
    <div className="inner-section-heading"><p>Selected business papers</p><h2>Publications</h2></div>
    <div className="inner-list publication-inner-list">{papers.map(([year,title,authors,journal], index) => <article className="inner-row" key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{authors}</p><small>{journal}</small></div><time>{year}</time></article>)}</div>
    <p className="source-note">This redesign presents a selected research portfolio. The original site remains the reference for the complete historical bibliography.</p>
  </InnerPage>;
}
