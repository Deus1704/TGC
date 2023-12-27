import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Input, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const GamesettingsThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[37px] items-start justify-start md:px-5 w-[82%] md:w-full">
          <Sidebar1 className="!sticky !w-[107px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[52px] items-start justify-start md:mt-0 mt-[70px] w-full">
            <div className="flex flex-row font-inter items-center justify-start w-1/4 md:w-full">
              <div className="bg-blue-A700 border border-blue-A700 border-solid flex flex-col items-center justify-center p-1.5 rounded-[50%] w-8">
                <div className="flex flex-col h-5 md:h-auto items-center justify-center p-2.5 w-5">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtInterSemiBold14"
                  >
                    1
                  </Text>
                </div>
              </div>
              <Img
                className="h-4 w-20"
                src="images/img_television.svg"
                alt="television"
              />
              <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-center justify-center p-1.5 rounded-[50%] w-8">
                <div className="flex flex-col h-5 md:h-auto items-center justify-center p-2.5 w-5">
                  <Text
                    className="text-blue-A700 text-sm w-auto"
                    size="txtInterSemiBold14BlueA700"
                  >
                    2
                  </Text>
                </div>
              </div>
              <Img
                className="h-4 w-20"
                src="images/img_settings.svg"
                alt="settings"
              />
              <div className="bg-white-A700 border-2 border-gray-300 border-solid flex flex-col items-center justify-center p-1.5 rounded-[50%] w-8">
                <div className="flex flex-col h-5 md:h-auto items-center justify-center p-1 w-5">
                  <Text
                    className="text-gray-300 text-sm w-auto"
                    size="txtInterSemiBold14Gray300"
                  >
                    3
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtLatoSemiBold30"
            >
              Select the type of campaign you want to create
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[51px] items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[29px] items-center justify-start rounded-[10px] shadow-bs w-[48%] md:w-full">
                <div className="md:h-[212px] h-[214px] relative w-full">
                  <div className="absolute bg-green-A200 h-[200px] inset-x-[0] mx-auto rounded-tl-[10px] rounded-tr-[10px] top-[0] w-full"></div>
                  <Img
                    className="absolute h-[212px] inset-[0] justify-center m-auto"
                    src="images/img_group10.svg"
                    alt="groupTen"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mb-[26px] w-[83%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtLatoBold24"
                  >
                    Playable Multi-cannel Ad
                  </Text>
                  <Text
                    className="mt-[37px] text-base text-black-900"
                    size="txtLatoMedium16"
                  >
                    Show ads across the web and social app campaigns.
                  </Text>
                  <Input
                    name="groupSixteen"
                    placeholder="Ad banner sizes in pixels: 300x250, 336x280"
                    className="font-lato font-medium p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="mt-2 rounded-[5px] w-full"
                    color="green_A200_33"
                    size="xs"
                  ></Input>
                  <button
                    className="cursor-pointer flex items-center justify-center mt-[103px] w-[405px]"
                    rightIcon={
                      <div className="mt-[5px] mb-0.5 ml-[5px] bg-white-A700">
                        <Img
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_left"
                        />
                      </div>
                    }
                    shape="round"
                    color="blue_A700"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-bold font-inter text-base text-left">
                      Continue
                    </div>
                  </button>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[38px] items-center justify-start rounded-[10px] shadow-bs w-[48%] md:w-full">
                <div className="md:h-[200px] h-[205px] relative w-full">
                  <div className="absolute bg-red-A100 h-[200px] inset-[0] justify-center m-auto rounded-tl-[10px] rounded-tr-[10px] w-full"></div>
                  <Img
                    className="absolute bottom-[0] h-[169px] inset-x-[0] mx-auto object-cover w-[47%]"
                    src="images/img_maskgroup.png"
                    alt="maskgroup"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mb-[26px] w-[83%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Playable Web Ad
                  </Text>
                  <Text
                    className="mt-9 text-base text-black-900"
                    size="txtLatoMedium16"
                  >
                    Show ads across the web.
                  </Text>
                  <div className="bg-red-A100_33 flex flex-col font-lato items-center justify-start mt-2 p-[9px] rounded-[5px] w-full">
                    <Text
                      className="leading-[24.00px] text-base text-black-900 w-[94%] sm:w-full"
                      size="txtLatoMedium16"
                    >
                      Ad banner sizes in pixels: 300x250, 336x280, 728x90
                    </Text>
                  </div>
                  <button
                    className="cursor-pointer flex items-center justify-center mt-[79px] w-[405px]"
                    rightIcon={
                      <div className="mt-[5px] mb-0.5 ml-[7px] bg-white-A700">
                        <Img
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_left"
                        />
                      </div>
                    }
                    shape="round"
                    color="blue_A700"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-bold font-inter text-base text-left">
                      Continue
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesettingsThreePage;
