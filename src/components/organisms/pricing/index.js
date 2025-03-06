import React from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`;
const PricingList = styled.div`
  justify-content: center;
`;
const Title = styled.p`
  font-size: 20px;
  padding: 20px 0 15px 0;
  text-align: center;
`;
const TitleDesc = styled.p`
  text-align: center;
  font-size: 12px;
  padding-bottom: 20px;
`;
const Description = styled.p`
  color: var(--basic-brown);
  text-align: center;
`;

const DescCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Pricing = () => {
  return (
    <Container>
      <Divider></Divider>
      <Title>Ceny noclegów</Title>
      <TitleDesc>Cena pokoju/ studia/ domku za noc</TitleDesc>
      <Divider />
      <PricingList>
        <DescCont>
          <Description>3-osobowy pokój</Description>
          <Description>200zł</Description>
        </DescCont>
        <Divider></Divider>
        <DescCont>
          <Description>5-osobowe studio</Description>
          <Description>290zł</Description>
        </DescCont>
        <Divider></Divider>
        <DescCont>
          <Description>4-osobowy domek</Description>
          <Description>200zł</Description>
        </DescCont>
        <Divider></Divider>
      </PricingList>
    </Container>
  );
};

export default Pricing;
