import React from 'react';
import './App.css';
import NetworkGraph from "./component /networkgraph"
import { Container, MantineProvider } from '@mantine/core';
import Test from "./test.js"


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Test/>
      <Container>
      <NetworkGraph />
      </Container>
    
      </MantineProvider>
  );
}

export default App;
