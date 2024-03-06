import styled from "styled-components";
import colors from "../data/colors";
import { FormComponent } from "../molecules";
import { signupData } from "../data/signInData";
import SignIconButtons from "../atoms/SignIconButtons";
import { FaApple, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

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
        <SignIconButtons
          icon={<FaGoogle fill={colors.lightMode.primaryColor} />}
          text="Sign in with Google"
        />
        <SignIconButtons
          icon={<FaFacebook fill={colors.lightMode.primaryColor} />}
          text="Sign in with Facebook"
        />
        <SignIconButtons
          icon={<FaLinkedin fill={colors.lightMode.primaryColor} />}
          text="Sign in with Linkedin"
        />
        <SignIconButtons
          icon={<FaApple fill={colors.lightMode.primaryColor} />}
          text="Sign in with Apple"
        />
      </Container>
    </>
  );
}
export default Signup;

const Container = styled.div`
  padding: 2cm 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
