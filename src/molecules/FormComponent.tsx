import styled from "styled-components";
import { formType } from "../types";
import { InputElement } from "../atoms";
import colors from "../data/colors";

function FormComponent({ formTitle, formData, formSubmitAction }: formType) {
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => e.preventDefault()}>
          <h3 style={{ color: `${colors.lightMode.primaryColor}` }}>
            {formTitle}
          </h3>
          {formData.map((input, index) => (
            <InputElement
              key={index}
              inputType={input.inputType}
              inputPlaceholder={input.inputPlaceholder}
            />
          ))}
          <button
            style={{
              backgroundColor: `${colors.lightMode.primaryColor}`,
              color: "white",
              cursor: "pointer",
            }}
            type="button"
            onClick={formSubmitAction}
          >
            Submit
          </button>
        </form>
      </FormContainer>
    </>
  );
}
export default FormComponent;

const FormContainer = styled.form`
  width: 100%;
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    gap: 20px;
    h3 {
      font-size: 30px;
    }
    button {
      width: 70%;
      padding: 10px 0px;
      font-size: 20px;
      border: 1.5px solid black;
    }
  }
`;
