import { FormEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";

const TextInput: FunctionComponent = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  return (
    <Container>
      <Input value={value} onChange={handleChange} />
    </Container>
  );
};

export default TextInput;

const Container = styled.div`
  background-color: #fbff0d;
  padding: 40px;
  border-radius: 8px;
  width: 200px;
  height: 200px;
  word-wrap: break-word;
  box-shadow: 6px 5px 13px -1px rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: 6px 5px 13px -1px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 6px 5px 13px -1px rgba(0, 0, 0, 0.21);
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px 5px;
  border: 0;
  border-bottom: 2px solid #ffbaf0;
  background-color: #fbff0d;
  transition: 0.5s;
  :focus {
    outline: none;
    border-bottom: 2px solid #f856d5;
    transition: 0.5s;
  }
`;
