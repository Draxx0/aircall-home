import { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { navigationDataInterface } from "../../../types/navigationTypes";
import Button from "../Button";
import MenuButton from "../MenuButton";
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
            <ul className="flex items-center gap-11">
              {navigations.map((n, index) => (
                <li className="flex items-center gap-1" key={index}>
                  {n.isMenu ? (
                    <MenuButton
                      isTopNav={false}
                      text={n.text}
                      theme={n.theme}
                      isScrolled={isScrolled}
                    />
                  ) : (
                    <a
                      href="/"
                      className={`text-secondary-900 text-lg hover:text-main-500 transition ease-in-out duration-200 hover:before:block before:hidden relative before:absolute before:w-full before:h-[2px] before:left-0 before:bg-main-500 before:rounded-full ${
                        isScrolled
                          ? "before:-bottom-[17px]"
                          : "before:-bottom-[33px]"
                      }`}
                    >
                      {n.text}
                    </a>
                  )}
                </li>
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

      <nav className="max-h-[96px] xl:hidden bg-white p-3 border-b border-white">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="Logo et nom d'entreprise." className="w-32" />
          </a>
          <div className="flex gap-3 items-center">
            <Button text="Essai gratuit" theme="green" url="/" />
            <BurgerMenu
              isBurgerOpen={isBurgerOpen}
              setIsburgerOpen={setIsBurgerOpen}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;
