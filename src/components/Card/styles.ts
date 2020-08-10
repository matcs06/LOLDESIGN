import styled from "styled-components";

interface ContainerProps {
  cWidth: number;
  cHeight: number;
  cColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.cWidth}px;
  height: ${(props) => props.cHeight}px;
  padding: 0px;
  display: flex;
  align-items: flex-start;
  border-radius: 8px 8px 0 0;
  background-color: #${(props) => props.cColor};

  p {
    align-self: center;
    margin-left: 40px;
    margin-bottom: 8px;
    font-family: "Roboto";
    font-size: 30px;
  }

  ul {
    list-style: none;
    margin-left: 40px;
    align-self: center;
    li {
      color: #403d39;
      font-size: 30px;
      display: inline;
      margin: 25px;
      font-family: "Roboto";
    }
  }
`;
