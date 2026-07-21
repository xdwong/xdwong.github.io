import { InnerPage } from "../components/InnerPage";
import { PublicationExplorer } from "./PublicationExplorer";

export default function ResearchPage() {
  return <InnerPage index="02" eyebrow="Research" title="Research with real-world consequence." intro="Explore publications by theme, search across authors and journals, and open each paper for complete publication details.">
    <PublicationExplorer />
  </InnerPage>;
}
