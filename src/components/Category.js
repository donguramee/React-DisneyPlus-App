import React from "react";
import { styled } from "styled-components";

const Category = () => {
  return (
    <Container>
      <Wrapp>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay loop muted>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrapp>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  margin-top: 30px;
  padding-top: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrapp = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0 / 69%) 0px 26px 30px -10px,
    rgb(0, 0, 0 / 73%) 0px 16px 10px -10px;
  curcor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgb(249, 249, 249, 0.1);
`;
