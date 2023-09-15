import BottomNavigation from "./navigation/BottomNavigation";
import TopNavigation from "./navigation/TopNavigation";
import navigationData from "./navigation/navigationData.json";
import { navigationDataInterface } from "../../types/navigationTypes";
import { useEffect, useState } from "react";

const Header = () => {
  const navigationDataJson = navigationData as navigationDataInterface;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY > 150 ? true : false);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 xl:border-b min-h-[calc(96px + 48px)] xl:border-gray-100">
      <TopNavigation data={navigationDataJson} isScrolled={isScrolled} />
      <BottomNavigation data={navigationDataJson} isScrolled={isScrolled} />
    </header>
  );
};

export default Header;
