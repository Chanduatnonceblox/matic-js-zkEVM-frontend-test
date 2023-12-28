import { Routes, Route, Link  } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Commponent/Layout";
import "./App.css"
import { useSDK } from '@metamask/sdk-react';
import { useState } from "react";
import Deposit from "./Commponent/Deposit";
function App() {
  const [wallet, setAccount] = useState<string>();
 

  const connect = async () => {
    try {
      if (!window.ethereum) {
        return alert("Metamask not installed or not enabled");
    }
    await window.ethereum.request({method:'eth_requestAccounts'});
    const from = window.ethereum.selectedAddress;

      if(from){setAccount(from)};
      
    } catch(err) {
      console.warn(`failed to connect..`, err);
    }
  };

  console.log(wallet,"xxxxxx")

  return (
    <div>
        {!wallet && <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>}
      {(
        <div>
          <>
            
            <p></p>
            {wallet && `Connected account: ${wallet}`}
          </>
        </div>
      )}
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */} 

      <Deposit/>
   
    </div>
  );
}





function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
