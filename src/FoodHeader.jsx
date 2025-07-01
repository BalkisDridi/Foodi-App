import { useState } from "react";
import "./FoodHeader.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const FoodHeader = () => {
  const [activeTab, setActiveTab] = useState("order");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="food-header">
      <h1 className="main-title" style={{fontSize:60}}>
        Dive into Delights
        <br />
        Of Delectable <span className="food">Food</span>
      </h1>

      <p className="tagline">
        Where Each Plate Weaves a Story of Culinary
        <br />
        Mastery and Passionate Craftsmanship
      </p>

      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "order" ? "active" : ""}`}
          onClick={() => handleTabChange("order")}
        
        >
          Order Now
        </button>

        <button
          className={`tab-button ${activeTab === "video" ? "active" : ""}`}
          onClick={() => handleTabChange("video")}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 23, verticalAlign: "middle" }} />
          &nbsp;Watch Video
        </button>
      </div>
    </header>
  );
};

export default FoodHeader;
