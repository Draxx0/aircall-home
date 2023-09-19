import { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { navigationDataInterface } from "../../../types/navigationTypes";
import Button from "../Button";
import MenuContainer from "./MenuContainer";
import BurgerBar from "./BurgerBar";
import BurgerMenu from "./BurgerMenu";

const BottomNavigation = ({
  data,
  isScrolled,
}: {
  data: navigationDataInterface;
  isScrolled: boolean;
}) => {
  const { navigations, buttons } = data.bottomNavigation;
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <nav
        className={`${
          isScrolled ? "py-0" : "py-5"
        } max-h-[96px] hidden xl:flex bg-white`}
      >
        <div className="container flex justify-between">
          <div className="flex items-center justify-between gap-16">
            <a href="/">
              <img
                src={Logo}
                alt="Logo et nom d'entreprise."
                className="w-40"
              />
            </a>
            <ul className="flex items-center gap-11 h-full">
              {navigations.map((n, index) => (
                <MenuContainer
                  isScrolled={isScrolled}
                  n={n}
                  key={index}
                  isTopNav={false}
                />
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {buttons.map((button, index) => (
              <Button
                text={button.text}
                theme={button.theme}
                url={button.url}
                key={index}
              />
            ))}
          </div>
        </div>
      </nav>

      <nav className="max-h-[96px] xl:hidden bg-white p-3 border-b border-white static z-10">
        <div className="flex justify-between items-center">
          <a href="/" className="relative z-10">
            <img src={Logo} alt="Logo et nom d'entreprise." className="w-28" />
          </a>
          <div className="flex gap-3 items-center relative z-10">
            <Button text="Essai gratuit" theme="green" url="/" />
            <BurgerBar
              isBurgerOpen={isBurgerOpen}
              setIsburgerOpen={setIsBurgerOpen}
            />
          </div>
          <BurgerMenu
            isBurgerOpen={isBurgerOpen}
            dataBottomNav={data.bottomNavigation}
            dataTopNav={data.topNavigation}
          />
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;
