import styled from "styled-components";
import { signInButtonType } from "../types";
import colors from "../data/colors";

function SignIconButtons({ icon, text }: signInButtonType) {
  return (
    <Container
      style={{
        backgroundColor: `${colors.lightMode.primaryContainerVariant}`,
        border: `${`1.5px solid ${colors.lightMode.primaryColor}`}`,
      }}
    >
      <span>{icon}</span>
      <p style={{ color: `${colors.lightMode.primaryColor}` }}>{text}</p>
    </Container>
  );
}
export default SignIconButtons;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 30px;
  border-radius: 30px;
  cursor: pointer;
  p {
    font-size: 20px;
  }
  span {
    width: 24px;
    height: 24px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
