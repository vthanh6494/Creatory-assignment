import React from "react";
import styled from "styled-components";
import { COLOR_THEME } from "./const";

export const PrimaryBtn = ({ children, click, stylePass }) => {
  return (
    <Ele style={stylePass} onClick={click}>
      {children}
    </Ele>
  );
};

const Ele = styled.div`
  width: 100px;
  height: 34px;
  background-color: ${COLOR_THEME};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  margin: 15px auto;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #ea2715;
  }
`;
