import React from 'react';
import networks from '../config/networks';

const NetworkContext = React.createContext({
  network: networks[0].key,
  setNetwork: (network) => {
    console.log(network);
  },
});

export default NetworkContext;
