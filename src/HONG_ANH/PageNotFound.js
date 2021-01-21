import React from "react";
import styled from "styled-components";
import { COLOR_THEME } from "./const";

export const PageNotFound = () => {
  return (
    <Wrapper>
      <Note>404 Not Found</Note>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 45px;
  position: relative;
  width: 100%;
  height: 100vh;
  color: ${COLOR_THEME};
`;
const Note = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
