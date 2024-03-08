import { Outlet, useLocation } from "react-router-dom";
import { SendMessage, SideBar } from "../molecules";
import styled from "styled-components";

function DashboardLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <section className="side-bar">
          <SideBar />
        </section>
        <section className="main-area">
          <Outlet />
          <SendMessage />
        </section>
      </Container>
    </>
  );
}
export default DashboardLayout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  .sidebar {
    max-width: 20vw;
  }
  .main-area {
    min-width: 80vw;
    max-width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
