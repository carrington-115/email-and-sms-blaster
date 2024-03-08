import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import colors from "../data/colors";
import { useLocation } from "react-router-dom";

function SendMessage() {
  const [message, setMessage] = useState<string>("");
  const [textSection, setTextSection] = useState<boolean>(false);
  const { pathname } = useLocation();

  function sendMessageFunc() {
    if (pathname === "/dashboard/sms-dashboard" && message !== "") {
      console.log("Send the sms", message);
    } else if (pathname === "/dashboard/email-dashboard" && message !== "") {
      console.log("send the email", message);
    }
  }

  useEffect(() => {
    if (pathname === "/dashboard/records") {
      setTextSection(false);
    } else {
      setTextSection(true);
    }
  }, [pathname]);

  return (
    <>
      {textSection && (
        <Container
          style={{ border: `5px solid ${colors.lightMode.primaryColor}` }}
        >
          <input
            type="text"
            style={{ color: `${colors.lightMode.primaryColor}` }}
            placeholder="Enter a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span onClick={sendMessageFunc}>
            <AiOutlineSend
              style={{
                width: "64px",
                height: "64px",
                fill: `${colors.lightMode.primaryColor}`,
              }}
            />
          </span>
        </Container>
      )}
    </>
  );
}
export default SendMessage;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 15px 50px;
  border-radius: 100px;
  input {
    font-size: 36px;
    border: none;
    outline: none;
    width: 40vw;
  }
`;
