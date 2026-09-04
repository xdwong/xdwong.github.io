import { InnerPage } from "../components/InnerPage";
import { PublicationExplorer } from "./PublicationExplorer";

export default function ResearchPage() {
  return <InnerPage index="02" eyebrow="Research" title="Research" intro="Publications">
    <div className="research-narrative"><p>Human-Centered AI / AI & Work</p><p>AI in Healthcare</p><p>AI & Operations / Platforms</p></div>
    <PublicationExplorer />
  </InnerPage>;
}
