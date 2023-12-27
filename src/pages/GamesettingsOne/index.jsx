import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const brandedObjectsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const backgroundOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const textsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const buttonsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const GamesettingsOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto sm:pr-5 pr-[38px] w-full">
        <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[107px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-0 mt-[70px] w-full">
            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[5px] w-1/5 md:w-full">
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
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[5px] mt-4 w-full">
              <Text
                className="sm:mt-0 mt-[18px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtLatoSemiBold30"
              >
                Game customization studio
              </Text>
              <button
                className="border border-blue-A700 border-solid cursor-pointer font-bold font-inter mb-1.5 min-w-[103px] sm:ml-[0] ml-[669px] text-base text-center"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Preview
              </button>
              <button
                className="border border-blue-A700 border-solid cursor-pointer font-bold font-inter mb-1.5 min-w-[126px] sm:ml-[0] ml-[15px] text-base text-center"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Save game
              </button>
            </div>
            <div className="flex md:flex-col flex-row font-lato gap-1.5 items-center justify-between mt-[19px] w-full">
              <div className="bg-gray-50_02 flex flex-col items-start justify-start p-[11px] rounded-[20px]">
                <Text
                  className="ml-1 md:ml-[0] mt-[7px] text-black-900 text-xl"
                  size="txtLatoSemiBold20"
                >
                  Customizable objects
                </Text>
                <SelectBox
                  className="border border-blue_gray-100_01 border-solid font-medium mt-[59px] text-left text-xl w-[99%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupThirteen"
                  options={brandedObjectsOptionsList}
                  isSearchable={false}
                  placeholder="Branded objects"
                  shape="round"
                  color="gray_50_02"
                  size="xs"
                  variant="fill"
                />
                <SelectBox
                  className="border border-blue_gray-100_01 border-solid font-medium mt-[15px] text-left text-xl w-[99%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupTwelve"
                  options={backgroundOptionsList}
                  isSearchable={false}
                  placeholder="Background"
                  shape="round"
                  color="gray_50_02"
                  size="xs"
                  variant="fill"
                />
                <SelectBox
                  className="border border-blue_gray-100_01 border-solid font-medium mt-[15px] text-left text-xl w-[99%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupEleven"
                  options={textsOptionsList}
                  isSearchable={false}
                  placeholder="Texts"
                  shape="round"
                  color="gray_50_02"
                  size="xs"
                  variant="fill"
                />
                <SelectBox
                  className="font-medium mt-[15px] text-left text-xl w-[99%] sm:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown_gray_300_02.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupNine"
                  options={buttonsOptionsList}
                  isSearchable={false}
                  placeholder="buttons"
                  shape="round"
                  color="blue_A700"
                  size="xs"
                  variant="fill"
                />
                <div className="bg-white-A700 flex flex-col items-start justify-start mb-[417px] p-3 w-[99%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start my-[5px] w-[52%] md:w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-start w-[94%] md:w-full">
                      <Img
                        className="h-0.5"
                        src="images/img_line8.svg"
                        alt="lineEight"
                      />
                      <Text
                        className="text-base text-gray-900_02"
                        size="txtLatoMedium16Gray90002"
                      >
                        button text
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-0.5"
                        src="images/img_line8.svg"
                        alt="lineNine"
                      />
                      <Text
                        className="text-base text-gray-900_02"
                        size="txtLatoMedium16Gray90002"
                      >
                        button color
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[25px]"
                src="images/img_thumbsup_gray_400.svg"
                alt="thumbsup_One"
              />
              <div className="bg-gray-50_02 flex flex-col items-center justify-start p-[18px] rounded-[20px]">
                <div className="flex flex-col gap-[19px] items-start justify-start mb-[443px] w-[99%] md:w-full">
                  <div className="h-6 relative w-[26%]">
                    <Text
                      className="m-auto text-black-900 text-xl"
                      size="txtLatoSemiBold20"
                    >
                      Upload objects
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl w-max"
                      size="txtLatoSemiBold20"
                    >
                      Upload objects
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[21%] md:w-full">
                    <Img
                      className="h-0.5"
                      src="images/img_line8.svg"
                      alt="lineTen"
                    />
                    <Text
                      className="text-base text-gray-900_02"
                      size="txtLatoMedium16Gray90002"
                    >
                      button text
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[18px] items-end justify-between w-full">
                    <div className="h-[247px] relative w-[49%] sm:w-full">
                      <div className="flex flex-col h-full justify-start m-auto w-full">
                        <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-[22px] ml-2.5 md:ml-[0] mr-[200px] rounded-tl-[10px] rounded-tr-[10px] w-[17%]"></div>
                        <div className="flex h-[225px] justify-end relative w-full">
                          <div className="flex flex-row gap-1.5 h-full items-center justify-between mb-2 mt-auto mx-auto w-[94%]">
                            <div className="bg-blue-A700 h-10 rounded-[5px] w-[81%]"></div>
                            <div className="border border-blue-A700 border-solid h-10 rounded-[5px] w-[39px]"></div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col gap-2 h-full inset-[0] justify-center m-auto pb-[15px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group19.svg')",
                            }}
                          >
                            <div className="flex h-[177px] justify-end relative w-full">
                              <div className="h-[62px] md:h-[95px] mb-[33px] mt-auto mx-auto w-[68%]">
                                <Img
                                  className="h-[62px] m-auto object-cover w-full"
                                  src="images/img_imageremovebgpreview.png"
                                  alt="imageremovebgpr"
                                />
                                <Text
                                  className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700 top-[16%] w-max"
                                  size="txtLatoBlack30"
                                >
                                  Begin
                                </Text>
                              </div>
                              <div className="absolute bg-gradient  flex flex-row h-full inset-[0] items-start justify-center m-auto p-1.5 rounded-[10px] w-full">
                                <Text
                                  className="mt-[3px] text-base text-white-A700"
                                  size="txtLatoSemiBold16WhiteA700"
                                >
                                  <span className="text-white-A700 font-lato text-left font-bold">
                                    W
                                  </span>
                                  <span className="text-white-A700 font-lato text-left font-semibold">
                                    {" "}
                                  </span>
                                  <span className="text-white-A700 font-lato text-left font-normal">
                                    180px
                                  </span>
                                </Text>
                                <Text
                                  className="ml-3.5 mt-[3px] text-base text-white-A700"
                                  size="txtLatoSemiBold16WhiteA700"
                                >
                                  <span className="text-white-A700 font-lato text-left font-bold">
                                    H{" "}
                                  </span>
                                  <span className="text-white-A700 font-lato text-left font-normal">
                                    60px
                                  </span>
                                </Text>
                                <button
                                  className="flex items-center justify-center mb-[125px] ml-[60px] mr-0.5 rounded-[5px] w-[39px]"
                                  color="white_A700"
                                  size="sm"
                                  variant="outline"
                                >
                                  <Img
                                    className="h-6"
                                    src="images/img_laptop.svg"
                                    alt="laptop"
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[77px] items-start justify-end md:ml-[0] ml-[71px] w-[66%] md:w-full">
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtLatoSemiBold20WhiteA700"
                              >
                                Upload{" "}
                              </Text>
                              <Img
                                className="h-6 w-6"
                                src="images/img_share.svg"
                                alt="share"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute left-[9%] text-base text-black-900 top-[1%]"
                        size="txtLatoBold16"
                      >
                        01
                      </Text>
                    </div>
                    <Img
                      className="h-[226px] sm:mt-0 mt-[21px]"
                      src="images/img_group19.svg"
                      alt="groupFortyThree"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="h-[25px]"
                src="images/img_thumbsup_gray_400.svg"
                alt="thumbsup_Two"
              />
              <div className="bg-blue-A700_0c flex flex-col gap-[50px] justify-start p-4 rounded-[20px]">
                <Text
                  className="ml-1 md:ml-[0] text-black-900 text-xl"
                  size="txtLatoSemiBold20"
                >
                  Game stimulation
                </Text>
                <div className="bg-blue_gray-100 h-[650px] mb-[55px] mx-auto w-4/5"></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-lato md:gap-5 items-start justify-start md:ml-[0] ml-[105px] mt-[364px] w-[51%] md:w-full">
              <Text
                className="leading-[24.00px] md:mt-0 mt-1 text-black-900 text-center text-xl"
                size="txtLatoSemiBold20"
              >
                <>
                  Game <br />
                  name
                </>
              </Text>
              <Text
                className="leading-[24.00px] mb-1 md:ml-[0] ml-[237px] text-black-900 text-center text-xl"
                size="txtLatoSemiBold20"
              >
                <>
                  Game <br />
                  name
                </>
              </Text>
              <Text
                className="leading-[24.00px] md:ml-[0] ml-[235px] md:mt-0 mt-1 text-black-900 text-center text-xl"
                size="txtLatoSemiBold20"
              >
                <>
                  Game <br />
                  name
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesettingsOnePage;
