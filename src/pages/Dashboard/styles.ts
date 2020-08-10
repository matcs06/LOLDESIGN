import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(-50px);
  }
  to {
    opacity:1;
    transform:translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  margin-left: 123px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  animation: ${appearFromLeft} 1s;
`;

export const HeaderTitle = styled.h1`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 41px;

  font-size: 96px;
  font-family: "Roboto", sans-serif;
  color: #ccc5b9;
`;
export const HeaderSubTitle = styled.h3`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-bottom: 40px;

  font-size: 48px;
  color: #fffcf2;
  font-family: "Redressed", cursive;
`;

export const DropdownContainer = styled.div`
  display: flex;
  padding: 0;
  background-color: #403d39;
  height: 100px;
  width: 1215px;
`;
export const CardResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 100px;
  width: 35%;
  height: 40px;
  overflow: hidden;
`;
