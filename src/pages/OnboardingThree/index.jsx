import React from "react";
import {Link} from 'react-router-dom'
import {Img, Input, Text } from "components";
import "./index.css"
const OnboardingThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
          size="txtQuicksandSemiBold40"
        >
          AdCraft
        </Text>
        <div className="bg-white-A700 flex flex-col font-inter gap-[7px] items-center justify-start mt-[69px] p-[51px] md:px-5 shadow-bs w-[53%] md:w-full">
          <Text className="text-base text-gray-600" size="txtInterSemiBold16">
            Step 3 of 3
          </Text>
          <div className="flex flex-col items-start justify-start mb-[57px] w-[70%] md:w-full">
            <Img className="h-2 w-full" src="images/img_group3.svg" alt="groupOne" />
            <Text
              className="mt-[46px] text-black-900 text-xl"
              size="txtInterSemiBold20"
            >
              Last step
            </Text>
            <Text
              className="mt-[26px] text-base text-black-900"
              size="txtInterRegular16"
            >
              Company name
            </Text>
            <Input
              name="companyname_One"
              placeholder="Enter your company name"
              className="font-lato p-0 placeholder:text-gray-600_01 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              type="text"
              shape="round"
            ></Input>
            <Text
              className="mt-[23px] text-base text-black-900"
              size="txtInterRegular16"
            >
              Create a password
            </Text>
            <Input
              name="createpassword"
              placeholder="Enter a password"
              className="font-lato p-0 placeholder:text-gray-600_01 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              type="password"
              shape="round"
            ></Input>
            <Link to="/onboardingfour">
            <button
              className="custom-button"
            >
              Next
            </button>
            </Link>
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

export default OnboardingThreePage;
