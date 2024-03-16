import React from 'react';
import './App.css';
import NetworkGraph from "./networkgraph"
import { MantineProvider } from '@mantine/core';
import { Title } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
       <div className="App">
       <Title order={1}>Chicago Bulls Team Network - 1995-96 </Title>
      <NetworkGraph />
       </div>
      </MantineProvider>
  );
}

export default App;
