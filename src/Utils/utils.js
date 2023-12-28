import  config from './config'
import { ZkEvmClient, setProofApi, use } from  '@maticnetwork/maticjs';

import { Web3ClientPlugin } from "@maticnetwork/maticjs-web3";
use(Web3ClientPlugin)

if (config.proofApi) {
  setProofApi(config.proofApi)
}



export const getPOSClient = (parentProvider,childProvider,userAddress) => {
  const posClient = new ZkEvmClient()

  return posClient.init({
    log: true,
    network: 'testnet',
    version: 'blueberry',
    
    parent: {
      provider: parentProvider,
      defaultConfig: {
        from: userAddress,
      },
    },
    child: {
      provider: childProvider,
      defaultConfig: {
        from: userAddress,
      },
    },
  })
}

