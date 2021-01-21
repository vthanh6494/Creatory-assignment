import React from "react";
import styled from "styled-components";

export const MainLayout = ({ title, children }) => {
  return (
    <Wrapper>
      <LoginTitle>{title}</LoginTitle>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: calc(100vh - 30px);
  position: relative;
  padding: 0 20px;
`;
const LoginTitle = styled.p`
  font-size: 30px;
  text-align: left;
  font-weight: bold;
`;
