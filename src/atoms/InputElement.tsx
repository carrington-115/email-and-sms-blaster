import { useEffect, useState } from "react";
import styled from "styled-components";
import { inputType } from "../types";
import colors from "../data/colors";

function InputElement({ inputType, inputPlaceholder }: inputType) {
  const [inputState, setInputState] = useState<string>("");
  const [inputActive, setInputActive] = useState<boolean>(false);

  useEffect(() => {});

  return (
    <>
      <InputContainer>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          onClick={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
          style={{
            backgroundColor: "white",
            border: `${
              inputActive
                ? `1px solid ${colors.lightMode.primaryColor}`
                : "none"
            }`,
            outline: `${colors.lightMode.primaryColor}`,
          }}
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <span
          style={{
            display: `${inputActive ? "block" : "none"}`,
            backgroundColor: `${inputActive ? "white" : "transparent"}`,
          }}
        >
          {inputPlaceholder}
        </span>
      </InputContainer>
    </>
  );
}
export default InputElement;

const InputContainer = styled.div`
  position: relative;
  width: 70%;
  input {
    width: 100%;
    padding: 25px 20px 15px 20px;
    border-radius: 5px;
    border: none;
    color: black;
    font-size: 18px;
    ::placeholder {
      color: grey;
    }
  }
  span {
    position: absolute;
    top: 0px;
    left: 20px;
    padding: 0px 10px;
    font-size: 14px;
  }
`;
