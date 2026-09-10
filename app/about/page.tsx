import { InnerPage } from "../components/InnerPage";

export default function AboutPage(){return <InnerPage index="01" eyebrow="About" title="About" intro="Biography">
  <div className="profile-layout">
    <div className="profile-narrative">
      <aside><img src="/meng-color.jpg" alt="Dr. Meng Li"/><p>Meng Li</p><span>C.T. Bauer College of Business<br/>University of Houston</span></aside>
      <p>Dr. Meng Li is a professor, department chair of Decision & Information Sciences, Endowed C.T. Bauer Chair of AI, and founding director of the Bauer Human-Centered AI Institute at the C.T. Bauer College of Business, University of Houston.</p>
      <p>He is a scholar of human-centered AI, studying how artificial intelligence reshapes organizational decision-making, healthcare delivery, and operational systems. Through research, education, and institution building, he develops evidence-based approaches for integrating AI into human work.</p>
      <p>His research has appeared in <em>Management Science</em>, <em>Manufacturing & Service Operations Management</em>, <em>Operations Research</em>, <em>Production and Operations Management</em>, <em>Journal of Operations Management</em>, <em>Strategic Management Journal</em>, and <em>Nature Sustainability</em>.</p>
      <p>He serves as Department Editor for <em>Journal of Operations Management</em> and <em>Decision Sciences Journal</em>, and Senior Editor for <em>Production and Operations Management</em>. He has edited AI-focused special issues and held visiting positions, including at the University of Oxford.</p>
    </div>
  </div>
  <div className="credential-strip"><div><span>Current institution</span><strong>University of Houston</strong></div><div><span>Education</span><strong>Ph.D., Operations Management<br/>The University of Texas at Dallas, 2013</strong></div><div><span>Research focus</span><strong>Human-Centered AI · Healthcare · Operations</strong></div></div>
</InnerPage>}
