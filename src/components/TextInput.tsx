import { FormEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";

const TextInput: FunctionComponent = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
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
  height: 50px;
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
