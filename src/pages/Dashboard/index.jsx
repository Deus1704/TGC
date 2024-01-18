import React, { useState } from "react";
import Sidebar1 from "components/Sidebar1";
import Carousel from "./Carousel/carousal";
import Card from "./Card";
import "./index.css";
const DashboardPage = () => {
  const [currentSelection, setCurrentSelection] = useState("all_campaigns");

  const handleClick = (selection) => {
    setCurrentSelection(selection);
  };
  //Need to dynamically render the campaigns
  const campaigns = [
    { name: 'Campaign 1', image: 'images/game_thumbnails/Rectangle14.svg' },
    { name: 'Campaign 2', image: 'images/game_thumbnails/Rectangle14.svg' },
    // ...
  ];

  return (
    <div className="main">
      <div>
      <Sidebar1 />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="conditional-render-choices">
        <span
          className={currentSelection === "all_campaigns" ? "active" : ""}
          onClick={() => handleClick("all_campaigns")}
        >
          ALL CAMPAIGNS
        </span>
        <span
          className={currentSelection === "games" ? "active" : ""}
          onClick={() => handleClick("games")}
        >
          GAMES
        </span>
        <span
          className={currentSelection === "customize_game" ? "active" : ""}
          onClick={() => handleClick("customize_game")}
        >
          HOW TO CUSTOMIZE A GAME
        </span>
      </div>
      {currentSelection === "all_campaigns" ? (
        <div className="campaigns">
          {campaigns.map((campaign, index) => (
            <Card key={index} campaignName={campaign.name} imageUrl={campaign.image} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DashboardPage;
