import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  margin-top: -40px;
  margin-left: 60px;
  margin-bottom: 0px;

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input {
    width: 70px;
    height: 35px;
    text-align: center;
  }
`;
