import { BlasterSection } from "../molecules";
import styled from "styled-components";

function SmsDashboard() {
  return (
    <Container>
      <BlasterSection type="sms" />
      hello
    </Container>
  );
}
export default SmsDashboard;

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
