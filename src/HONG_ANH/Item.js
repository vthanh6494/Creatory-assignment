import React from "react";
import styled from "styled-components";
import { BORDER_COLOR, COLOR_THEME } from "./const";

export const Item = ({ item }) => {
  const tags = item.tags;
  return (
    <Card>
      <Head>
        <span>{`${item.firstName} ${item.lastName}`}</span>
      </Head>
      <Body>
        <ItemLabel>
          <div>
            <SpanLabel>Gender:</SpanLabel>
            <span>{item.gender}</span>
          </div>
          <div>
            <SpanLabel>Age:</SpanLabel>
            <span>{item.age}</span>
          </div>
        </ItemLabel>
        <Line>
          <SpanLabel>Email:</SpanLabel>
          <span>{item.email}</span>
        </Line>
        <Line>
          <SpanLabel>Phone:</SpanLabel>
          <span>{item.phone}</span>
        </Line>
        <Line>
          <SpanLabel>Tags:</SpanLabel>
          <Tags>
            {tags.map((item, idx) => (
              <span key={idx}>{`#${item}, `}</span>
            ))}
          </Tags>
        </Line>
      </Body>
    </Card>
  );
};

const Card = styled.div`
  width: 313px;
  border: 1px solid ${BORDER_COLOR};
  height: 245px;
  border-radius: 5px;
  text-align: left;
  font-size: 14px;
`;

const Head = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 22px;
  font-weight: bold;
  background-color: ${COLOR_THEME};
  color: #fff;
  border-bottom: 1px solid ${BORDER_COLOR};
  border-radius: 5px 5px 0 0;
`;
const Body = styled.div`
  padding: 20px;
`;
const ItemLabel = styled.div`
  display: inline-flex;
  width: 80%;
  margin-bottom: 10px;
  justify-content: space-between;
`;
const SpanLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
const Line = styled.div`
  margin-bottom: 10px;
  display: inline-flex;
`;

const Tags = styled.div`
  max-height: 80px;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    width: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    width: 5px;
    border-radius: 20px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #e0dfe0;
  }
  span {
    color: ${COLOR_THEME};
  }
`;
