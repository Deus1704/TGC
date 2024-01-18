import React from "react";

import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const GamesettingsTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto pb-[41px] md:pr-10 sm:pr-5 pr-[41px] w-full">
          <Sidebar1/>
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[70px] w-[90%] md:w-full">
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
              <div className="bg-blue-A700 border-2 border-blue-A700 border-solid flex flex-col items-center justify-center p-1.5 rounded-[50%] w-8">
                <div className="flex flex-col h-5 md:h-auto items-center justify-center p-2.5 w-5">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtInterSemiBold14"
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
            <div className="font-lato h-9 md:h-[88px] mt-[52px] relative w-3/5 md:w-full">
              <Text
                className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtLatoSemiBold30"
              >
                Choose an appropriate ad banner size for your campaign.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-lato gap-[31px] items-center justify-between ml-0.5 md:ml-[0] mt-[22px] w-full">
              <div className="bg-blue-A700_0c flex md:flex-1 flex-col items-start justify-start p-[17px] rounded-[20px] w-[65%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[121px] mt-[7px] w-[94%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtLatoSemiBold30"
                  >
                    Ad banners
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start mt-[29px] w-[93%] md:w-full">
                    <div className="bg-blue-A700 flex flex-col md:gap-10 gap-20 items-center justify-start mb-2.5 p-2 w-[45%] md:w-full">
                      <div className="bg-light_green-A400 flex flex-col h-5 items-start justify-start rounded-[50%] w-5">
                        <Img
                          className="h-[17px] w-[17px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <Text
                        className="mb-[117px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtLatoBold30"
                      >
                        300x270
                      </Text>
                    </div>
                    <div className="bg-blue-A700 flex flex-col md:gap-10 gap-[95px] items-center justify-start p-2 w-1/2 md:w-full">
                      <div className="border border-gray-500 border-solid h-5 rounded-[50%] w-5"></div>
                      <Text
                        className="mb-28 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtLatoBold30"
                      >
                        336x380
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue-A700 flex flex-row sm:gap-10 gap-[275px] items-center justify-end mt-[61px] p-[9px] w-full">
                    <Text
                      className="mb-4 mt-[19px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtLatoBold30"
                    >
                      336x380
                    </Text>
                    <div className="border border-gray-500 border-solid h-5 rounded-[50%] w-5"></div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-A700_0c flex md:flex-1 flex-col md:gap-10 gap-[86px] justify-start p-[13px] rounded-[20px] w-[33%] md:w-full">
                <Text
                  className="leading-[35.00px] md:ml-[0] ml-[9px] mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtLatoSemiBold30"
                >
                  <>
                    This is how your ad will <br />
                    look like on web.{" "}
                  </>
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start mb-[207px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[21px] items-start justify-between w-[92%] md:w-full">
                    <div className="flex flex-col items-start justify-start mt-3 w-[67%]">
                      <div className="bg-blue_gray-100 h-[25px] w-[90%]"></div>
                      <Line className="bg-blue_gray-100 h-[3px] mt-3 w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2 w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2 w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2 w-[44%]" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-[19px] w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2 w-[63%]" />
                      <div className="bg-blue_gray-100 h-[11px] mt-[34px] w-[90%]"></div>
                      <Line className="bg-blue_gray-100 h-[3px] mt-[13px] w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2.5 w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2.5 w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2.5 w-full" />
                      <Line className="bg-blue_gray-100 h-[3px] mt-2.5 w-[63%]" />
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[28%]">
                      <Img
                        className="h-[74px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[85px] items-center justify-start p-[25px] sm:px-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_television.svg')",
                        }}
                      >
                        <Text
                          className="leading-[14.00px] my-[3px] text-center text-white-A700 text-xs"
                          size="txtLatoBold12WhiteA700"
                        >
                          <>
                            Your Ad <br />
                            here
                          </>
                        </Text>
                      </div>
                      <Img
                        className="h-[77px]"
                        src="images/img_close.svg"
                        alt="close_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="ml-1.5 md:ml-[0] mt-[63px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtLatoSemiBold30"
            >
              What is your campaign goal?
            </Text>
            <div className="flex md:flex-col flex-row font-lato gap-[21px] items-center justify-start ml-1.5 md:ml-[0] mt-[17px] w-[49%] md:w-full">
              <button
              >
                <Img
                  className="h-[17px]"
                  src="images/img_checkmark_black_900.svg"
                  alt="checkmark_One"
                />
              </button>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtLatoRegular30"
              >
                I am here to increase my brand awareness.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-lato gap-[21px] items-center justify-start ml-1.5 md:ml-[0] mt-[13px] w-[49%] md:w-full">
              <div className="border border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtLatoRegular30"
              >
                I am here to drive more sales for my brand
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-lato gap-[21px] items-center justify-start ml-1.5 md:ml-[0] mt-3.5 w-[37%] md:w-full">
              <div className="border border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtLatoRegular30"
              >
                I am here to engage customers.
              </Text>
            </div>
            <div className="flex flex-col font-inter items-center justify-start ml-96 md:ml-[0] mt-[87px] w-[33%] md:w-full">
              <button
                className="cursor-pointer flex items-center justify-center w-[405px]"
                rightIcon={
                  <div className="ml-[7px] bg-white-A700 my-1">
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
                <div className="font-bold text-base text-left">Continue</div>
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default GamesettingsTwoPage;
