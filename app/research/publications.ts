export type Topic = "Human-Centered AI" | "Healthcare" | "Platforms & Retail" | "Behavioral Operations" | "Supply Chains" | "Methods & Practice";

export type Publication = {
  slug: string;
  year: string;
  title: string;
  authors: string;
  journal: string;
  topics: Topic[];
  sourceUrl?: string;
  note?: string;
};

export const topics: Array<"All" | Topic> = ["All", "Human-Centered AI", "Healthcare", "Platforms & Retail", "Behavioral Operations", "Supply Chains", "Methods & Practice"];

export const publications: Publication[] = [
  { slug:"tele-follow-up-outpatient-care", year:"2026", title:"Tele-follow-up and outpatient care", authors:"Wei Gu, Meng Li, Shujing Sun", journal:"Production and Operations Management · Forthcoming", topics:["Healthcare","Methods & Practice"], note:"Best Paper, POMS College of Operational Excellence; INFORMS TIMES Runner-up" },
  { slug:"reducing-patient-tardiness", year:"2026", title:"Reducing patient tardiness: From experiment to implementation", authors:"Wei Gu, Meng Li, Shichen Zhang", journal:"Production and Operations Management 35(5), 1630–1647", topics:["Healthcare","Methods & Practice"] },
  { slug:"helping-under-resourced-hospitals", year:"2026", title:"Helping under-resourced hospitals: Evidence from a medical poverty alleviation program", authors:"Qiang Li, Meng Li, Wei Gu, Zhi Cao", journal:"Manufacturing & Service Operations Management · Forthcoming", topics:["Healthcare","Methods & Practice"] },
  { slug:"entrant-integrative-capability", year:"2026", title:"Entrant integrative capability and incumbent bias", authors:"Meng Li, Chao Liang, Shichen Zhang", journal:"Production and Operations Management 35(4), 1469–1485", topics:["Behavioral Operations"] },
  { slug:"replenishment-recommendation", year:"2026", title:"Replenishment recommendation in convenience stores", authors:"Meng Li, Shuming Wang, Liang Xu", journal:"Production and Operations Management 35(3), 1095–1112", topics:["Platforms & Retail","Supply Chains"] },
  { slug:"emerging-technologies-healthcare", year:"2026", title:"Operational process and agency considerations in managing emerging technologies in healthcare", authors:"Elliot Bendoly, Meng Li, Jeffrey Smith, Paul Pavlou", journal:"Journal of Operations Management 72(2), 164–175", topics:["Human-Centered AI","Healthcare"], sourceUrl:"https://onlinelibrary.wiley.com/doi/full/10.1002/joom.70029" },
  { slug:"retail-platform-analytics", year:"2026", title:"Retail platform analytics: Practice, literature, and future research", authors:"Meng Li, Tao Li, Lili Yu", journal:"Production and Operations Management 35(1), 69–86", topics:["Platforms & Retail","Methods & Practice"], sourceUrl:"https://journals.sagepub.com/doi/abs/10.1177/10591478241238972" },
  { slug:"newsvendors-customer-referrals", year:"2026", title:"Newsvendors with customer referrals", authors:"Meng Li", journal:"Production and Operations Management 35(1), 122–128", topics:["Behavioral Operations","Supply Chains"], sourceUrl:"https://journals.sagepub.com/doi/abs/10.1111/poms.13807" },
  { slug:"algorithmic-supervisor", year:"2025", title:"Algorithmic supervisor and employee performance", authors:"Wei Gu, Meng Li, Shichen Zhang", journal:"Production and Operations Management 34(10), 3101–3118", topics:["Human-Centered AI","Behavioral Operations"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5138545" },
  { slug:"working-with-practitioners", year:"2025", title:"Working with practitioners in Operations Management", authors:"Haijian Si, Meng Li, Christoph H. Loch", journal:"Manufacturing & Service Operations Management 27(5), 1332–1342", topics:["Methods & Practice"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5140385", note:"Lead article" },
  { slug:"mental-accounting-capacity", year:"2025", title:"Mental accounting in allocating capacity", authors:"Meng Li, Yan Liu", journal:"Manufacturing & Service Operations Management 27(5), 1497–1514", topics:["Behavioral Operations"], sourceUrl:"https://pubsonline.informs.org/doi/abs/10.1287/msom.2022.0162" },
  { slug:"fast-delivery-field-experiments", year:"2025", title:"Fast delivery: B2B field experiments amid COVID-19 outbreak and new normal", authors:"Meng Li, Shichen Zhang", journal:"Management Science 71(5), 4049–4065", topics:["Supply Chains","Methods & Practice"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3815400" },
  { slug:"etailer-inventory-location", year:"2025", title:"E-tailer’s inventory location and pricing with strategic consumers", authors:"Yuxin Chen, Meng Li, Chao Liang", journal:"Production and Operations Management 34(1), 30–44", topics:["Platforms & Retail","Supply Chains"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3455905" },
  { slug:"physician-adoption-ai", year:"2024", title:"Physician adoption of AI assistant", authors:"Ting Hou, Meng Li, Ricky Tan, Huazhong Zhao", journal:"Manufacturing & Service Operations Management 26(5), 1639–1655", topics:["Human-Centered AI","Healthcare"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4432784" },
  { slug:"ai-business-research", year:"2024", title:"AI in business research", authors:"Zhi Cao, Meng Li, Paul A. Pavlou", journal:"Decision Sciences Journal 55(6), 518–532", topics:["Human-Centered AI","Methods & Practice"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4897619" },
  { slug:"quality-differentiated-products", year:"2024", title:"Selling quality-differentiated products in a Markovian market with unknown transition probabilities", authors:"Bora Keskin, Meng Li", journal:"Operations Research 72(3), 885–902", topics:["Platforms & Retail","Methods & Practice"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3526568" },
  { slug:"supplier-bottleneck", year:"2023", title:"Supplier bottleneck and information dissemination", authors:"Meng Li, Yue Li, Yang Zhang", journal:"Journal of Operations Management 69(4), 558–585", topics:["Supply Chains"], sourceUrl:"https://onlinelibrary.wiley.com/doi/abs/10.1002/joom.1239" },
  { slug:"field-experiments-om", year:"2023", title:"Field experiments in operations management", authors:"Yang Gao, Meng Li, Shujing Sun", journal:"Journal of Operations Management 69(4), 676–701", topics:["Methods & Practice"], sourceUrl:"https://onlinelibrary.wiley.com/doi/abs/10.1002/joom.1240" },
  { slug:"evaluation-timing", year:"2023", title:"Evaluation timing with dynamic information: Optimization and heuristic", authors:"Lijun Bo, Meng Li, Tingting Zhang", journal:"Production and Operations Management 32(12), 3931–3950", topics:["Methods & Practice"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2820437" },
  { slug:"managerial-regret", year:"2022", title:"Managerial regret and inventory pricing", authors:"Meng Li, Yan Liu", journal:"Management Science 68(6), 4398–4414", topics:["Behavioral Operations"], sourceUrl:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3726966" },
  { slug:"ai-procurement", year:"2022", title:"AI and procurement", authors:"Ruomeng Cui, Meng Li, Shichen Zhang", journal:"Manufacturing & Service Operations Management 24(2), 691–706", topics:["Human-Centered AI","Supply Chains"], sourceUrl:"https://pubsonline.informs.org/doi/abs/10.1287/msom.2021.0989", note:"Lead paper" },
  { slug:"high-quality-logistics", year:"2020", title:"Value of high-quality logistics: Evidence from a clash between SF Express and Alibaba", authors:"Ruomeng Cui, Meng Li, Qiang Li", journal:"Management Science 66(9), 3879–3902", topics:["Platforms & Retail","Supply Chains"], sourceUrl:"https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2019.3411" },
];

export function findPublication(slug: string) { return publications.find((paper) => paper.slug === slug); }
