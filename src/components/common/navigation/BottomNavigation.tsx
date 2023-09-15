import Logo from "../../../assets/images/logo.png";
import { navigationDataInterface } from "../../../types/navigationTypes";
import Button from "../Button";
import MenuButton from "../MenuButton";

const BottomNavigation = ({
  data,
  isScrolled,
}: {
  data: navigationDataInterface;
  isScrolled: boolean;
}) => {
  console.log(isScrolled);
  const { navigations, buttons } = data.bottomNavigation;
  return (
    <nav className={`${isScrolled ? "py-0" : "py-5"} max-h-[96px] bg-white`}>
      <div className="container flex justify-between">
        <div className="flex items-center justify-between gap-16">
          <a href="/">
            <img src={Logo} alt="Logo et nom d'entreprise." className="w-40" />
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
  );
};

export default BottomNavigation;
