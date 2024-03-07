import styled from "styled-components";
import LinkComponent from "../atoms/LinkComponent";
import { MdOutlineTextsms } from "react-icons/md";
import { useState } from "react";
import colors from "../data/colors";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaList } from "react-icons/fa";

function SideBar() {
  const [menuStatus, setMenuStatus] = useState<boolean>(true);
  const iconStyle = {
    width: `${menuStatus ? "24px" : "48px"}`,
    height: `${menuStatus ? "24px" : "48px"}`,
  };

  return (
    <Container
      style={{
        borderRight: `1px solid ${colors.lightMode.primaryColor}`,
        width: `${menuStatus ? "18vw" : "5vw"}`,
        transition: "all 0.25s 250ms ease-in-out",
      }}
    >
      <LinkComponent
        linkName="SMS"
        icon={
          <MdOutlineTextsms
            style={iconStyle}
            fill={colors.lightMode.primaryColor}
          />
        }
        link="/dashboard/sms-dashboard"
        menuStatus={menuStatus}
      />
      <LinkComponent
        linkName="Emails"
        icon={
          <MdOutlineEmail
            style={iconStyle}
            fill={colors.lightMode.primaryColor}
          />
        }
        link="/dashboard/email-dashboard"
        menuStatus={menuStatus}
      />

      <LinkComponent
        linkName="Records"
        icon={<FaList style={iconStyle} fill={colors.lightMode.primaryColor} />}
        link="/dashboard/records"
        menuStatus={menuStatus}
      />
      <section className="resize">
        <div
          style={{
            backgroundColor: `${colors.lightMode.primaryColor}`,
            transform: `${menuStatus ? "rotateY(0deg)" : "rotateY(180deg)"}`,
            transition: "all 0.5s 250ms ease-in-out",
          }}
          onClick={() => setMenuStatus(!menuStatus)}
        >
          <IoIosArrowBack style={iconStyle} fill="white" />
        </div>
      </section>
    </Container>
  );
}
export default SideBar;

const Container = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 18vw;
  padding: 80px 20px;
  gap: 20px;
  .resize {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    div {
      padding: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;
