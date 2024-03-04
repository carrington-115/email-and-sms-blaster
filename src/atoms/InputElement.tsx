import { useState } from "react";
import styled from "styled-components";
import { inputType } from "../types";

function InputElement({ inputType, inputPlaceholder }: inputType) {
  const [inputState, setInputState] = useState<string>("");
  return (
    <>
      <InputContainer>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <span>{inputPlaceholder}</span>
      </InputContainer>
    </>
  );
}
export default InputElement;

const InputContainer = styled.div`
  input {
    position: relative;
    width: inherit;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    color: black;
    ::placeholder {
      color: grey;
    }
  }
  span {
    position: absolute;
  }
`;
