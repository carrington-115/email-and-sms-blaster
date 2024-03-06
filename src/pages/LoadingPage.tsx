import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import colors from "../data/colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
  const [loadingState, setLoadingState] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
    if (!loadingState) {
      navigate("/user-login");
    }
  }, [loadingState]);

  return (
    <Container>
      <div className="spinner">
        <Oval
          visible={true}
          height="100%"
          width="100%"
          color={colors.lightMode.primaryColor}
          secondaryColor={colors.lightMode.primaryContainerColor}
          ariaLabel="oval-loading"
          strokeWidth={5}
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </Container>
  );
}
export default LoadingPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .spinner {
    width: 100px;
    height: 100px;
  }
`;
