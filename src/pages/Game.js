import { PageContainer } from "../styles/utils";
import StandardButton from "../components/StandardButton";

export default function Game() {
  return (
    <PageContainer>
      <StandardButton label="Menu" onClick={() => alert("click")} />
    </PageContainer>
  );
}
