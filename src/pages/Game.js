import { PageContainer } from "../styles/utils";
import HeaderMenu from "../components/HeaderMenu";
import PlayerPoints from "../components/PlayerPoints";

export default function Game() {
  return (
    <PageContainer>
      <HeaderMenu menu={() => alert("click")} restart={() => alert("click")} />
      <PlayerPoints player="1" points="12" />
    </PageContainer>
  );
}
