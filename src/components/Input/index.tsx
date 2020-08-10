import React, { useState } from "react";

import { Container } from "./styles";

interface InputProps {
  minut: number;
  setMinut: Function;
}

const Input: React.FC<InputProps> = ({ minut, setMinut }) => {
  const [inputday, setInputDay] = useState();

  const changeHandler = (e: any) => {
    setInputDay(e.target.value);
    setMinut(e.target.value);
  };

  return (
    <Container className="input-container">
      <input
        type="number"
        value={inputday}
        onChange={changeHandler}
        min="0"
        defaultValue="0"
      />
    </Container>
  );
};

export default Input;
