import React from "react";
import { useState } from "react";
import { Line } from "components";
import { Img, Text } from "components";
import { Link } from "react-router-dom";

const Sidebar1 = () => {
  const [currentSelection, setCurrentSelection] = useState("Dashboard");

  const updateSelection = (selectedOption) => {
    setCurrentSelection(selectedOption);
  };

  const sidebarOptions = [
    { id: 1, label: "Dashboard", icon: "img_home_gray_900_01.svg", link: "/dashboard" },
    { id: 2, label: "Game Settings Three", icon: "img_puzzle.svg", link: "/gamesettingsthree" },
    { id: 3, label: "Campaign Settings", icon: "img_search.svg", link: "/gamesettingstwo" },
    { id: 4, label: "Analytics", icon: "img_chartbar.svg", link: "/gamesettings" },
    { id: 5, label: "Asset Library", icon: "img_thumbsup.svg", link: "/assetlibrary" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto pb-[41px] md:pr-10 sm:pr-5 pr-[41px] w-full">
        <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between max-w-[1399px] mb-[30px] mx-auto w-full">
          <div className="bg-gray-50 flex md:flex-1 flex-col md:gap-10 gap-[90px] items-center justify-end mb-[237px] py-[70px] w-[8%] md:w-full">
            <Text className="text-base text-black-900" size="txtQuicksandSemiBold16">
              AdCraft
            </Text>
            <div className="flex flex-col font-inter items-center justify-start w-full">
              {sidebarOptions.map((option) => (
                <Link key={option.id} to={option.link}>
                  <div
                    className="flex flex-col gap-2 items-center justify-start p-2 w-full"
                    onClick={() => updateSelection(option.label.toLowerCase())}
                  >
                    {currentSelection === option.label.toLowerCase() && (
                      <Line className="bg-blue-A700 h-[92px] w-[5px]" />
                    )}
                    <Img className="h-6 w-6" src={`images/${option.icon}`} alt={option.label} />
                    <Text
                      className="mb-0.5 text-center text-gray-900_01 text-xs tracking-[1.20px] uppercase"
                      size="txtInterBold12Gray90001"
                    >
                      {option.label}
                    </Text>
                  </div>
                </Link>
              ))}
              <div className="flex flex-col h-10 items-center justify-start mt-[141px] w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatarsdefault.png"
                  alt="avatarsdefault"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
