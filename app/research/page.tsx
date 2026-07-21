import { InnerPage } from "../components/InnerPage";
import { PublicationExplorer } from "./PublicationExplorer";

export default function ResearchPage() {
  return <InnerPage index="02" eyebrow="Research" title="Research with real-world consequence." intro="Explore all 39 selected business papers, two other publications, and two book chapters. Filter by theme, search the full record, and open any item for details.">
    <PublicationExplorer />
  </InnerPage>;
}
