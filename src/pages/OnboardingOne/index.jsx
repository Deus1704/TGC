import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Text,Img  } from "components";
import "./index.css"
const OnboardingOnePage = () => {
  const [userEmail,setUserEmail] = useState()
  const handleClick = () => {
    console.log("going to the next")
  };
  const handleChange=(e)=>{
    setUserEmail(e)
    console.log(e)
  }
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
            Step 1 of 3
          </Text>
          <div className="flex flex-col items-start justify-start mb-14 w-[70%] md:w-full">
          <Img className="h-2 w-full" src="images/img_group1.svg" alt="groupZero" />
            <div className="h-2 overflow-hidden relative w-full">
              <div className="w-full h-full absolute bg-undefined"></div>
              <div
                className="h-full absolute bg-blue_gray_100"
                style={{ width: "32%" }}
              ></div>
            </div>
            <Text
              className="mt-[45px] text-black-900 text-x1"
              size="txtInterSemiBold20"
            >
              Start your free AdCraft trial
            </Text>
            <Text
              className="mt-[37px] text-base text-black-900"
              size="txtInterRegular16"
            >
              Your work email
            </Text>
            <Input
              name="emailplaceholder"
              placeholder="Enter your work email"
              className="font-lato p-0 placeholder:text-gray-600_01 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              type="email"
              shape="round"
              onChange={(e)=>handleChange(e)}
            ></Input>
            <Link to="/onboardingtwo">
            <button
            className="custom-button"
              onClick={handleClick}
            >
              Next
            </button>
            </Link>
          </div>
        </div>
        <Text
          className="mb-44 mt-[85px] text-base text-black-900"
          size="txtInterRegular16"
        >
          <span className="text-black-900 font-inter text-left font-normal">
            Create a free account of{" "}
          </span>
          <Link to="/">
          <span className="text-black-900 font-inter text-left font-bold">
            Log in.
          </span></Link>
        </Text>
      </div>
    </>
  );
};

export default OnboardingOnePage;
