import { useState } from "react";
import styled from "styled-components";

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
  }
  span {
    position: absolute;
  }
`;
