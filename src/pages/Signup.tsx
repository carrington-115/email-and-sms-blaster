import styled from "styled-components";
import colors from "../data/colors";
import { FormComponent } from "../molecules";
import { signupData } from "../data/signInData";

function Signup() {
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
            formTitle="Sign up"
            formData={signupData}
            formSubmitAction={() => console.log("hello world")}
          />
        </section>
      </Container>
    </>
  );
}
export default Signup;

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
