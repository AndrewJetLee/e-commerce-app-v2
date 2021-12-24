import styled from "styled-components";

const Input = ({ placeholder, setValue }) => {
  return (
    <InputWrapper>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  input {
    background-color: #f0f0f0;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: 16px;
    padding: 14px;
    ::placeholder {
      color: #aaaaaa;
    }
  }
`;
