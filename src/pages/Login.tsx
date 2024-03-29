import styled from "styled-components";
import { FormComponent } from "../molecules";
import colors from "../data/colors";
import { loginData } from "../data/signInData";

function Login() {
  return (
    <>
      <Container>
        <section
          style={{
            backgroundColor: `${colors.lightMode.primaryContainerVariant}`,
          }}
          className="form"
        >
          <FormComponent
            formTitle="Login"
            formData={loginData}
            formSubmitAction={() => console.log("hello world")}
          />
        </section>
      </Container>
    </>
  );
}
export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 40%;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
`;
