import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../data/colors";

interface linkType {
  link: string;
  icon: ReactNode;
  linkName: string;
  menuStatus: boolean;
}

function LinkComponent({ link, icon, linkName, menuStatus }: linkType) {
  return (
    <LinkContainer
      to={link}
      style={{
        padding: `${menuStatus ? "5px 50px 5px 10px" : "10px 10px"}`,
        width: `${menuStatus ? "190px" : "fit-content"}`,
      }}
    >
      <span
        style={{
          width: `${menuStatus ? "24px" : "48px"}`,
          transition: "all 1s 250ms ease-in-out",
          height: `${menuStatus ? "24px" : "48px"}`,
        }}
      >
        {icon}
      </span>
      <p
        style={{
          color: `${colors.lightMode.primaryColor}`,
          display: `${menuStatus ? "block" : "none"}`,
          textDecoration: "none",
        }}
      >
        {linkName}
      </p>
    </LinkContainer>
  );
}
export default LinkComponent;

const LinkContainer = styled(NavLink)`
  display: flex;
  gap: 10px;
  border-radius: 5px;
  background-color: transparent;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: #f2f0ff;
  }
  &.active {
    background-color: #f2f0ff;
  }
  span {
    svg {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-size: 24px;
    text-decoration: none;
  }
`;
