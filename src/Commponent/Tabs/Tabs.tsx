import ERC1155 from "../ERC1155";
import ERC20 from "../ERC20";
import ERC721 from "../ERC721";
import Recovery from "../Recovery";

import React, { useState } from "react";
import "./Tab.css"; // Import your CSS file for styling

const BridgeTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="switchable-tabs-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>{" "}
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          Tab 4
        </button>
        {/* Add more buttons for additional tabs as needed */}
      </div>

      <div className="tab-content">
        {activeTab === 1 && <ERC20 />}
        {activeTab === 2 && <ERC721 />}
        {activeTab === 3 && <ERC1155 />}
        {activeTab === 4 && <Recovery />}

        {/* Add more content sections for additional tabs as needed */}
      </div>
    </div>
  );
};

export default BridgeTabs;
