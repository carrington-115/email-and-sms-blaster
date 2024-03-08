import styled from "styled-components";
import { Message } from "../molecules";

function Records() {
  return (
    <Container>
      <Message
        messageStatus={true}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corporis.
        Neque, natus ipsa accusantium quis quam repudiandae consequuntur dolorem
        ex ut dolores doloribus unde dignissimos possimus nihil nulla mollitia
        nesciunt."
      />
      <Message
        messageStatus={false}
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corporis.
        Neque, natus ipsa accusantium quis quam repudiandae consequuntur dolorem
        ex ut dolores doloribus unde dignissimos possimus nihil nulla mollitia
        nesciunt."
      />
    </Container>
  );
}
export default Records;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0px;
  gap: 20px;
`;
