import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSelection } from "../../redux/sidebarSlice";
import { Img, Text } from "components";
import { Link } from "react-router-dom";
import "./index.css";

const Sidebar1 = () => {
  const dispatch = useDispatch();
  const currentSelection = useSelector(
    (state) => state.sidebar.currentSelection
  );
  const sidebarOptions = [
    {
      id: 1,
      label: "Dashboard",
      icon: "img_home_gray_900_01.svg",
      link: "/dashboard",
    },
    {
      id: 2,
      label: "Game Settings",
      icon: "img_puzzle.svg",
      link: "/gamesettingsthree",
    },
    {
      id: 3,
      label: "Campaign Settings",
      icon: "img_search.svg",
      link: "/gamesettingstwo",
    },
    {
      id: 4,
      label: "Analytics",
      icon: "img_chartbar.svg",
      link: "/gamesettings",
    },
    {
      id: 5,
      label: "Asset Library",
      icon: "img_thumbsup.svg",
      link: "/assetlibrary",
    },
  ];

  const handleLinkClick = (selectedOption) => {
    dispatch(setCurrentSelection(selectedOption));
  };

  return (
    <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto md:pr-10 sm:pr-5 pr-[41px] w-full">
      <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between max-w-[1399px] mb-[30px] mx-auto container">
        <div className="bg-gray-50 flex md:flex-1 flex-col md:gap-10 gap-[90px] items-center justify-end mb-[237px] py-[70px] w-[8%] md:w-full">
          <Text
            className="text-base text-black-900"
            size="txtQuicksandSemiBold16"
          >
            AdCraft
          </Text>
          <div className="flex flex-col font-inter items-center justify-start w-full">
            {sidebarOptions.map((option) => (
              <Link
                key={option.id}
                to={option.link}
                className={`sidebar-link ${
                  currentSelection === option.label.toLowerCase()
                    ? "selected-link"
                    : ""
                }`}
                onClick={() => handleLinkClick(option.label.toLowerCase())}
              >
                <div className="flex flex-col gap-2 items-center justify-start p-2 w-full">
                  <div
                    className={
                      currentSelection === option.label.toLowerCase()
                        ? "selected"
                        : "not-selected"
                    }
                  >
                    <Img
                      className="h-6 spacing"
                      src={`images/${option.icon}`}
                      alt={option.label}
                    />
                    <Text
                      size="txtInterBold12Gray90001"
                      className="text-center"
                    >
                      {option.label}
                    </Text>
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex flex-col h-10 items-center justify-start mt-[141px] w-10">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_avatarsdefault.png" //need to make this dynamic by fetching from the backend user's profile picture.
                alt="avatarsdefault"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
