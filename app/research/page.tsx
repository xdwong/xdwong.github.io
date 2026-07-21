import { InnerPage } from "../components/InnerPage";
import { PublicationExplorer } from "./PublicationExplorer";

export default function ResearchPage() {
  return <InnerPage index="02" eyebrow="Research" title="Research" intro="Publications">
    <PublicationExplorer />
  </InnerPage>;
}
