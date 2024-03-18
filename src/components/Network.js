import React, { useEffect, useRef } from 'react';
import { Network } from 'react-vis-network-graph';

const NetworkComponent = ({ data, onEditNode, onEditEdge }) => {
  const networkRef = useRef(null);

  useEffect(() => {
    // Initialization or update of network goes here
  }, [data]); // Add more dependencies as needed

  return <div ref={networkRef} style={{ width: '800px', height: '600px' }}></div>;
};

export default NetworkComponent;
