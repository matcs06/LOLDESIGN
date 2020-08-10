import React, { useState } from "react";

import { Container, Select } from "./styles";

interface DropDownProps {
  options: string[];
  setValue: Function;
}

const DropDown: React.FC<DropDownProps> = ({ options, setValue }) => {
  const [dropDownValue, setDropDownValue] = useState("");

  const hadleChange = (e: any) => {
    setDropDownValue(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Container>
      <Select onChange={hadleChange} value={dropDownValue}>
        {options.map((item: any) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default DropDown;
