import styled from "styled-components";
import { formType } from "../types";
import { InputElement } from "../atoms";

function FormComponent({ formTitle, formData }: formType) {
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>{formTitle}</h3>
          {formData.map((input, index) => (
            <InputElement
              key={index}
              inputType={input.inputType}
              inputPlaceholder={input.inputPlaceholder}
            />
          ))}
        </form>
      </FormContainer>
    </>
  );
}
export default FormComponent;

const FormContainer = styled.form``;
