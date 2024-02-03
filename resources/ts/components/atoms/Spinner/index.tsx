import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  z-index: 999;
`;

 const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 60px;
  width: 60px;
  margin: 0px auto;
  -webkit-animation: rotation 0.6s infinite linear;
  -moz-animation: rotation 0.6s infinite linear;
  -o-animation: rotation 0.6s infinite linear;
  animation: rotation 0.6s infinite linear;
  border-left: 6px solid rgba(0, 174, 239, 0.15);
  border-right: 6px solid rgba(0, 174, 239, 0.15);
  border-bottom: 6px solid rgba(0, 174, 239, 0.15);
  border-top: 6px solid rgba(0, 174, 239, 0.8);
  border-radius: 100%;
  z-index: 999;
`;

export function LoadingSpinner() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}