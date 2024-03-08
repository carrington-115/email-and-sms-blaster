import { BlasterSection } from "../molecules";
import styled from "styled-components";

function EmailDashboard() {
  return (
    <Container>
      <BlasterSection type="email" />
    </Container>
  );
}
export default EmailDashboard;

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
