import styled from "styled-components";
import { signInButtonType } from "../types";

function SignIconButtons({ icon, text }: signInButtonType) {
  return (
    <Container>
      <span>{icon}</span>
      <p>{text}</p>
    </Container>
  );
}
export default SignIconButtons;

const Container = styled.button``;
