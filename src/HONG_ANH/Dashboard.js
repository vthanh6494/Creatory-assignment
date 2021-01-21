import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FetchApi } from "./FetchApi";
import { Item } from "./Item";
import { MainLayout } from "./MainLayout";
import { PrimaryBtn } from "./PrimaryBtn";

const LIMIT = 6;

export const Dashboard = () => {
  const [dataFetch, setDataFetch] = useState([]);
  const [offsetState, setOffsetState] = useState(0);
  const [loading, setLoading] = useState(false);
  async function getData() {
    setLoading(true);
    try {
      const data = await FetchApi({
        url: `/data?limit=${LIMIT}&offset=${offsetState}`,
      });
      setDataFetch(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function hanleChangeOffset(type) {
    if (type === "minus" && offsetState >= LIMIT) {
      setOffsetState(offsetState - LIMIT);
    }
    if (type === "add") {
      setOffsetState(offsetState + LIMIT);
    }
  }

  console.log("offsetState", offsetState);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [offsetState]);

  if (loading) {
    return <MainLayout title={"Dashboard Page:"}>Loading...</MainLayout>;
  }

  console.log(dataFetch);
  return (
    <MainLayout title={"Dashboard Page:"}>
      <WrapItems>
        {dataFetch.map((item, idx) => (
          <div key={idx}>
            <Item item={item} />
          </div>
        ))}
      </WrapItems>
      {!loading && (
        <Btn>
          {offsetState > 0 && (
            <PrimaryBtn
              click={() => hanleChangeOffset("minus")}
              stylePass={{ marginRight: "10px" }}
            >
              Prev
            </PrimaryBtn>
          )}
          <PrimaryBtn click={() => hanleChangeOffset("add")}>Next</PrimaryBtn>
        </Btn>
      )}
    </MainLayout>
  );
};

const WrapItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 313px));
  grid-gap: 30px;
`;
const Btn = styled.div`
  float: right;
  display: flex;
  max-width: 240px;
`;
