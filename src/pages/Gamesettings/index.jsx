import React from "react";

import {Img, Line, List, Text } from "components";

const GamesettingsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-end mx-auto md:pr-10 sm:pr-5 pr-[41px] w-full">
        <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between max-w-[1399px] mx-auto w-full">
          <div className="bg-gray-50 flex md:flex-1 flex-col md:gap-10 gap-[90px] items-center justify-end mb-[426px] py-[70px] w-[8%] md:w-full">
            <Text
              className="text-base text-black-900"
              size="txtQuicksandSemiBold16"
            >
              AdCraft
            </Text>
            <div className="flex flex-col font-inter items-center justify-start w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start p-2 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_home_gray_900_01.svg"
                  alt="home"
                />
                <Text
                  className="mb-0.5 text-center text-gray-900_01 text-xs tracking-[1.20px] uppercase"
                  size="txtInterBold12Gray90001"
                >
                  Dashboard
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start mt-[46px] w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start w-[83%] md:w-full">
                  <Line className="bg-blue-A700 h-[92px] w-[5px]" />
                  <div className="flex flex-col gap-2 items-center justify-start w-[79%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_puzzle.svg"
                      alt="puzzle"
                    />
                    <Text
                      className="leading-[20.00px] text-center text-gray-900 text-xs tracking-[1.20px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      <>
                        Game
                        <br />
                        settings
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center mt-[46px] px-4 py-2 w-[107px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="leading-[20.00px] text-center text-gray-900 text-xs tracking-[1.20px] uppercase"
                  size="txtInterBold12Gray900"
                >
                  <>
                    campaign
                    <br />
                    settings
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center mt-12 px-4 py-2 w-[107px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_chartbar.svg"
                  alt="chartbar"
                />
                <Text
                  className="text-center text-gray-900 text-xs tracking-[1.20px] uppercase w-auto"
                  size="txtInterBold12Gray900"
                >
                  Analytics
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center mt-12 px-4 py-2 w-[107px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="leading-[20.00px] text-center text-gray-900 text-xs tracking-[1.20px] uppercase"
                  size="txtInterBold12Gray900"
                >
                  <>
                    Asset <br />
                    library
                  </>
                </Text>
              </div>
              <div className="flex flex-col h-10 items-center justify-start mt-[141px] w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_avatarsdefault.png"
                  alt="avatarsdefault"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[70px] w-[90%] md:w-full">
            <div className="flex flex-row font-inter items-center justify-start w-[21%] md:w-full">
              <div className="bg-white-A700 border border-blue-A700 border-solid flex flex-col items-center justify-center p-1.5 rounded-[50%] w-8">
                <div className="flex flex-col h-5 md:h-auto items-center justify-center p-2.5 w-5">
                  <Text
                    className="text-blue-A700 text-sm w-auto"
                    size="txtInterSemiBold14BlueA700"
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
              <div className="bg-white-A700 border border-blue-A700 border-solid flex flex-col items-center justify-center p-1.5 rounded-[50%] w-8">
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
                src="images/img_television.svg"
                alt="television_One"
              />
              <div className="bg-blue-A700 flex flex-col items-center justify-center p-1.5 rounded-[50%] w-8">
                <div className="flex flex-col h-5 md:h-auto items-center justify-center p-1 w-5">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtInterSemiBold14"
                  >
                    3
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="mt-[52px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtLatoSemiBold30"
            >
              Select the game template for your ad.
            </Text>
            <Text
              className="mt-12 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtLatoSemiBold30"
            >
              Recommended game templates according to the banner size you chose
            </Text>
            <div className="flex md:flex-col flex-row font-lato gap-[30px] items-start justify-between mt-[17px] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[65%] md:w-full">
                <div className="bg-gray-50_02 flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1 md:ml-[0] p-2 rounded-[20px] w-full">
                  <button
                    className="flex h-9 items-center justify-center md:mt-0 my-[174px] w-9"
                    shape="circle"
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                  </button>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[57px] grid sm:grid-cols-1 grid-cols-2 mb-[45px] md:ml-[0] ml-[9px] md:mt-0 mt-[35px] w-[72%] md:w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[304px] items-center justify-start pb-[131px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group5.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <div className="bg-blue_gray-100 h-[139px] rounded-tl-[10px] rounded-tr-[10px] w-full"></div>
                        <Text
                          className="text-black-900 text-xl"
                          size="txtLatoSemiBold20"
                        >
                          Game name
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[304px] items-center justify-start pb-[131px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group5.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <div className="bg-blue_gray-100 h-[139px] rounded-tl-[10px] rounded-tr-[10px] w-full"></div>
                        <Text
                          className="text-black-900 text-xl"
                          size="txtLatoSemiBold20"
                        >
                          Game name
                        </Text>
                      </div>
                    </div>
                  </List>
                  <button
                    className="flex h-9 items-center justify-center md:ml-[0] ml-[146px] md:mt-0 my-[174px] rotate-[180deg] w-9"
                    shape="circle"
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      src="images/img_arrowright_black_900.svg"
                      alt="arrowright"
                    />
                  </button>
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-16 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtLatoSemiBold30"
                >
                  Other games to choose from
                </Text>
                <div className="md:gap-5 gap-[66px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-3.5 w-full">
                  <div className="flex h-[290px] justify-end relative w-full">
                    <Text
                      className="leading-[24.00px] mb-[29px] mt-auto mx-auto text-black-900 text-center text-xl"
                      size="txtLatoSemiBold20"
                    >
                      <>
                        Game <br />
                        name
                      </>
                    </Text>
                    <div className="absolute border border-black-900_66 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[20px] w-full">
                      <div className="bg-blue_gray-100 h-44 mb-[70px] w-44"></div>
                    </div>
                  </div>
                  <div className="flex h-[290px] justify-end relative w-full">
                    <Text
                      className="leading-[24.00px] mb-[31px] mt-auto mx-auto text-black-900 text-center text-xl"
                      size="txtLatoSemiBold20"
                    >
                      <>
                        Game <br />
                        name
                      </>
                    </Text>
                    <div className="absolute border border-black-900_66 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[20px] w-full">
                      <div className="bg-blue_gray-100 h-44 mb-[70px] w-44"></div>
                    </div>
                  </div>
                  <div className="flex h-[290px] justify-end relative w-full">
                    <Text
                      className="leading-[24.00px] mb-[25px] mt-auto mx-auto text-black-900 text-center text-xl"
                      size="txtLatoSemiBold20"
                    >
                      <>
                        Game <br />
                        name
                      </>
                    </Text>
                    <div className="absolute border border-black-900_66 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[20px] w-full">
                      <div className="bg-blue_gray-100 h-44 mb-[70px] w-44"></div>
                    </div>
                  </div>
                  <div className="flex h-[290px] justify-end relative w-full">
                    <Text
                      className="leading-[24.00px] mb-[29px] mt-auto mx-auto text-black-900 text-center text-xl"
                      size="txtLatoSemiBold20"
                    >
                      <>
                        Game <br />
                        name
                      </>
                    </Text>
                    <div className="absolute border border-black-900_66 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[20px] w-full">
                      <div className="bg-blue_gray-100 h-44 mb-[70px] w-44"></div>
                    </div>
                  </div>
                  <div className="flex h-[290px] justify-end relative w-full">
                    <Text
                      className="leading-[24.00px] mb-[31px] mt-auto mx-auto text-black-900 text-center text-xl"
                      size="txtLatoSemiBold20"
                    >
                      <>
                        Game <br />
                        name
                      </>
                    </Text>
                    <div className="absolute border border-black-900_66 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[20px] w-full">
                      <div className="bg-blue_gray-100 h-44 mb-[70px] w-44"></div>
                    </div>
                  </div>
                  <div className="flex h-[290px] justify-end relative w-full">
                    <Text
                      className="leading-[24.00px] mb-[25px] mt-auto mx-auto text-black-900 text-center text-xl"
                      size="txtLatoSemiBold20"
                    >
                      <>
                        Game <br />
                        name
                      </>
                    </Text>
                    <div className="absolute border border-black-900_66 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[20px] w-full">
                      <div className="bg-blue_gray-100 h-44 mb-[70px] w-44"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-A700_0c flex md:flex-1 flex-col justify-start mb-[496px] p-4 rounded-[20px] w-[33%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtLatoSemiBold30"
                >
                  Game preview
                </Text>
                <Img
                  className="h-[270px] md:ml-[0] ml-[39px] mt-[94px]"
                  src="images/img_group26.svg"
                  alt="groupTwentySix"
                />
                <div className="flex flex-col font-inter items-center justify-start mb-3 mt-[170px] mx-auto w-[88%] md:w-full">
                  <button
                    className="cursor-pointer flex h-[46px] items-center justify-center w-[333px]"
                    rightIcon={
                      <div className="mt-[3px] mb-[5px] ml-2 bg-white-A700">
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
                    <div className="font-bold text-base text-left">
                      Customize game
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

export default GamesettingsPage;
