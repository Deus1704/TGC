import React from "react";

const sizeClasses = {
  txtLatoBold16: "font-bold font-lato",
  txtLatoSemiBold20: "font-lato font-semibold",
  txtQuicksandSemiBold16: "font-quicksand font-semibold",
  txtLatoBold30: "font-bold font-lato",
  txtLatoSemiBold20WhiteA700: "font-lato font-semibold",
  txtLatoBold12: "font-bold font-lato",
  txtInterBold24: "font-bold font-inter",
  txtLatoBlack30: "font-black font-lato",
  txtInterSemiBold14Gray300: "font-inter font-semibold",
  txtLatoRegular30: "font-lato font-normal",
  txtInterSemiBold30: "font-inter font-semibold",
  txtLatoMedium16Gray90002: "font-lato font-medium",
  txtInterBold12Gray90001: "font-bold font-inter",
  txtLatoBold12WhiteA700: "font-bold font-lato",
  txtLatoSemiBold16WhiteA700: "font-lato font-semibold",
  txtLatoSemiBold12: "font-lato font-semibold",
  txtInterBold12Gray900: "font-bold font-inter",
  txtLatoSemiBold30: "font-lato font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold14BlueA700: "font-inter font-semibold",
  txtLatoBold24: "font-bold font-lato",
  txtQuicksandSemiBold40: "font-quicksand font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterBold12: "font-bold font-inter",
  txtLatoSemiBold16Black900: "font-lato font-semibold",
  txtLatoSemiBold16: "font-lato font-semibold",
  txtLatoBold12Gray9007f: "font-bold font-lato",
  txtLatoMedium16: "font-lato font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
