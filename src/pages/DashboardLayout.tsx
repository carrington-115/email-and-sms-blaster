import { Outlet } from "react-router-dom";
import { SideBar } from "../molecules";
import styled from "styled-components";

function DashboardLayout() {
  return (
    <>
      <Container>
        <section className="side-bar">
          <SideBar />
        </section>
        <section className="main-area">
          <Outlet />
        </section>
      </Container>
    </>
  );
}
export default DashboardLayout;

const Container = styled.div``;
