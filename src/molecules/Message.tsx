import { useState } from "react";
import styled from "styled-components";
import { MdOutlineEmail, MdOutlineSms } from "react-icons/md";
import colors from "../data/colors";

function Message({
  messageStatus,
  message,
}: {
  messageStatus: boolean;
  message: string;
}) {
  return (
    <Container>
      <span
        style={{ backgroundColor: `${colors.lightMode.primaryContainerColor}` }}
      >
        {messageStatus ? (
          <MdOutlineSms
            style={{
              fill: `${colors.lightMode.primaryColor}`,
              width: "24px",
              height: "24px",
            }}
          />
        ) : (
          <MdOutlineEmail
            style={{
              fill: `${colors.lightMode.primaryColor}`,
              width: "24px",
              height: "24px",
            }}
          />
        )}
      </span>
      <p
        style={{
          backgroundColor: `${colors.lightMode.primaryContainerVariant}`,
          color: `${colors.lightMode.primaryColor}`,
        }}
      >
        {message}
      </p>
    </Container>
  );
}
export default Message;

const Container = styled.section`
  display: flex;
  gap: 20px;
  width: 80%;
  align-items: center;
  span {
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 10px;
  }
`;
