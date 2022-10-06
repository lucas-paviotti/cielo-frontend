import { useEffect, useState } from "react";

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [screenType, setScreenType] = useState("INITIAL");

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth > 768) {
      setScreenType("DESKTOP");
    } else {
      setScreenType("MOBILE");
    }
  };

  return {
    windowWidth,
    screenType,
  };
};

export default useResponsive;