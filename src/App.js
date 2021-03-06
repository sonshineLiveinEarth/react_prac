import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Review from "./Review";
import NotFound from "./NotFound";

function App() {
  return (
    <Background>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/review/:day">
            <Review />
          </Route>
          <Route component={NotFound} />
        </Switch>
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
  height: 85vh;
  width: 400px;
  box-shadow: 10px 10px 20px #e2e2e2;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`;
