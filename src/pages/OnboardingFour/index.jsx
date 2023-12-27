import React from "react";
import {ReactComponent as Tick} from "../../assets/tick-box.svg"
import { Img, Text } from "components";
import { Link } from "react-router-dom";
import "./index.css"
const OnboardingFourPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand sm:gap-10 md:gap-10 gap-[126px] items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
          size="txtQuicksandSemiBold40"
        >
          AdCraft
        </Text>
        <div className="flex flex-col font-inter items-center justify-start max-w-[905px] mb-48 mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between w-full">
            <Img
              className="h-[498px] w-[499px]"
              src="images/img_subtract.svg"
              alt="subtract"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterSemiBold30"
              >
                With Adcraft trial you get{" "}
              </Text>
              <div className="flex flex-row items-start justify-start" style={{padding:'10px', paddingTop:'90px'}}>
              <Tick style={{width:'20px',height:'20px', display:"flex"}}/>
              <Text>Available feature with free trial.</Text>
              </div>
              <div className="flex flex-row items-start justify-start"style={{padding:'10px'}}>
              <Tick style={{width:'20px',height:'20px', display:"flex"}}/>
              <Text>Available feature with free trial.</Text>
              </div>
              <div className="flex flex-row items-start justify-start"style={{padding:'10px'}}>
              <Tick style={{width:'20px',height:'20px', display:"flex"}}/>
              <Text>Available feature with free trial.</Text>
              </div>
              <div className="flex flex-row items-start justify-start"style={{padding:'10px'}}>
              <Tick style={{width:'20px',height:'20px', display:"flex"}}/>
              <Text>Available feature with free trial.</Text>
              </div>
              <div className="flex flex-row items-start justify-start" style={{padding:'10px'}}>
              <Tick style={{width:'20px',height:'20px', display:"flex"}}/>
              <Text>Available feature with free trial.</Text>
              </div>
              <div className="flex flex-row items-start justify-start"style={{padding:'10px'}}>
              <Tick style={{width:'20px',height:'20px', display:"flex"}}/>
              <Text>Available feature with free trial.</Text>
              </div>
              
              <Link to="/dashboard">
              <button
                className="custom-button"
              >
                Continue
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingFourPage;
