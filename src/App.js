import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Review from "./Review";

function App() {
  return (
    <Background>
      <Container>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/review/:weekday" exact>
          <Review />
        </Route>
      </Container>
    </Background>
  );
}

export default App;

const Background = styled.div`
  background-color: #eee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 400px;
  box-shadow: 10px 10px 10px lightgray;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`;
