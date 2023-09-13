import BottomNavigation from "./navigation/BottomNavigation";
import TopNavigation from "./navigation/TopNavigation";
import navigationData from "./navigation/navigationData.json";
import { navigationDataInterface } from "../../types/navigationTypes";

const Header = () => {
  const navigationDataJson = navigationData as navigationDataInterface;
  return (
    <header className="fixed top-0 left-0 w-full border-b min-h-[calc(96px + 48px)] border-gray-100">
      <TopNavigation data={navigationDataJson} />
      <BottomNavigation data={navigationDataJson} />
    </header>
  );
};

export default Header;
