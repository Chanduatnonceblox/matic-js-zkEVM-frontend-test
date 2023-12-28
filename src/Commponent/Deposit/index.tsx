import Web3 from "web3";
import { zkEvm } from "../../Utils/config";
import { getPOSClient } from "../../Utils/utils";
import { getGasData } from "../../Utils/fetchGasPrice";


declare let window: any;
const Deposit = () => {
  const mainWeb3 = new Web3(window.ethereum);
  const maticWeb3 = new Web3("https://rpc.public.zkevm-test.net");

  

  const deposit = async () => {
    if (!window.ethereum) {
      return alert("Metamask not installed or not enabled");
    }
 
 
    let childProvider;
    let parentProvider;
    let network = await mainWeb3.eth.getChainId();
    if (network == 5) {
      parentProvider = mainWeb3;
      childProvider = maticWeb3;
    } else {
      childProvider = mainWeb3;
      parentProvider = new Web3(
        "https://goerli.infura.io/v3/16935940235147d09d8c5224ab7daed8"
      );
    }
    
    await window.ethereum.enable();
    const from = window.ethereum.selectedAddress;
    const client = await getPOSClient(parentProvider, childProvider, from);

    const erc20Token = client.erc20(zkEvm.parent.erc20, true);
    const approve = await erc20Token.approve(10);
    const res = await approve.getReceipt();
    if (res) {
      const result = await erc20Token.deposit(10, from);

      const txHash = await result.getTransactionHash();
      console.log("txHash", txHash);
      const receipt = await result.getReceipt();
      console.log("receipt", receipt);
    }
  };

  return (
    <div>
      <button onClick={deposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
