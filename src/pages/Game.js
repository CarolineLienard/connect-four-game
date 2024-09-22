import { PageContainer } from "../styles/utils";
import HeaderMenu from "../components/HeaderMenu";

export default function Game() {
  return (
    <PageContainer>
      <HeaderMenu menu={() => alert("click")} restart={() => alert("click")} />
    </PageContainer>
  );
}
