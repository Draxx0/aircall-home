import { useEffect, useState } from "react";
import { navigationDataInterface } from "../../../types/navigationTypes";
import Button from "../Button";
import BurgerMenuListItem from "./BurgerMenuListItem";

const BurgerMenu = ({
  isBurgerOpen,
  dataBottomNav,
  dataTopNav,
}: {
  isBurgerOpen: boolean;
  dataBottomNav: navigationDataInterface["bottomNavigation"];
  dataTopNav: navigationDataInterface["topNavigation"];
}) => {
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);
  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setSelectedMenuId(null);
    }
  }, [isBurgerOpen]);
  return (
    <div
      className={`${
        isBurgerOpen ? "translate-x-0" : "-translate-x-full"
      } transition -z-[1] ease-in-out duration-500 flex flex-col gap-6 fixed bottom-0 top-[98px] left-0 bg-white w-full py-[42px] overflow-auto`}
    >
      <ul className="mt-10 ">
        {dataBottomNav.navigations?.map((menu, index) => (
          <BurgerMenuListItem
            key={index}
            menu={menu}
            setSelectedMenu={setSelectedMenuId}
            selectedMenuId={selectedMenuId}
            menuId={menu.id}
          />
        ))}
        {dataTopNav.navigations?.slice(0, -3).map((menu, index) => (
          <BurgerMenuListItem
            key={index}
            menu={menu}
            setSelectedMenu={setSelectedMenuId}
            selectedMenuId={selectedMenuId}
            menuId={menu.id}
          />
        ))}
      </ul>

      <div className="flex flex-col gap-2 px-4">
        <Button text="Demandez une démo" theme="light" url="/" size="py-3" />
        <Button text="Essai gratuit" theme="green" url="/" size="py-3" />
      </div>
    </div>
  );
};

export default BurgerMenu;
