import React from "react";

import { Container } from "./styles";

interface ContainerProps {
  cWidth: number;
  cHeight: number;
  cColor: string;
}

const Card: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Card;
