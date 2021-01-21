import React from "react";
import styled from "styled-components";

export const CircleLoading = () => {
  return <Ele />;
};

const Ele = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  position: relative;
  margin: 0 auto;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 3px solid #ff4800;
    border-right-color: #fff;
    border-bottom-color: #fff;
    animation: circleLoading 1s forwards infinite linear;
  }
  @keyframes circleLoading {
    to {
      transform: rotate(360deg);
    }
  }
`;
