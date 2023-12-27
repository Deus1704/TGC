import React from "react";
import { Link } from "react-router-dom";
import { Input, Text,Img } from "components";
import "./index.css"
const OnboardingTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
          size="txtQuicksandSemiBold40"
        >
          AdCraft
        </Text>
        <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mt-[69px] p-[51px] md:px-5 shadow-bs w-[53%] md:w-full">
          <div className="flex flex-col gap-[7px] items-center justify-start mb-[57px] w-[70%] md:w-full">
            <Text className="text-base text-gray-600" size="txtInterSemiBold16">
              Step 2 of 3
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="h-2 overflow-hidden relative w-full">
                <Img className="h-2 w-full" src="images/img_group2.svg" alt="groupOne" />
                <div className="w-full h-full absolute bg-undefined">
                </div>
                <div
                  className="h-full absolute bg-blue_gray_100"
                  style={{ width: "64%" }}
                ></div>
              </div>
              <Text
                className="mt-[46px] text-black-900 text-xl"
                size="txtInterSemiBold20"
              >
                You are nearly there
              </Text>
              <div className="flex flex-row font-inter items-center justify-between mt-6 w-[70%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtInterRegular16"
                >
                  First name
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtInterRegular16"
                >
                  Last name
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-lato sm:gap-5 items-center justify-evenly w-full">
                <Input
                  name="inputfielddefau"
                  placeholder="Enter your first name"
                  className="p-0 placeholder:text-gray-600_01 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid sm:flex-1 w-1/2 sm:w-full"
                  type="text"
                  shape="round"
                ></Input>
                <Input
                  name="inputfielddefau_One"
                  placeholder="Enter your last name"
                  className="p-0 placeholder:text-gray-600_01 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid sm:flex-1 w-1/2 sm:w-full"
                  type="text"
                  shape="round"
                ></Input>
              </div>
              <Text
                className="mt-[23px] text-base text-black-900"
                size="txtInterRegular16"
              >
                Your phone number
              </Text>
              <Input
                name="inputfielddefau_Two"
                placeholder="Enter your phone number"
                className="font-lato p-0 placeholder:text-gray-600_01 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                type="number"
                shape="round"
              ></Input>
              <Link to="/onboardingthree">
              <button
                className="custom-button"
              >
                Next
              </button>
              </Link>
            </div>
          </div>
        </div>
        <Text
          className="mb-[95px] mt-[85px] text-base text-black-900"
          size="txtInterRegular16"
        >
          <span className="text-black-900 font-inter text-left font-normal">
            Create a free account of{" "}
          </span>
          <span className="text-black-900 font-inter text-left font-bold">
            Log in.
          </span>
        </Text>
      </div>
    </>
  );
};

export default OnboardingTwoPage;
