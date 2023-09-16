import clsx from "clsx";
import Chevron from "./Chevron";

export type MenuBtnTheme = "white" | "black" | "green";

const MenuButton = ({
  text,
  theme,
  isTopNav,
  isScrolled,
}: {
  text: string;
  theme: MenuBtnTheme;
  isTopNav: boolean;
  isScrolled?: boolean;
}) => {
  // console.log(isScrolled);
  const buttonClasses = clsx(
    {
      "text-white hover:text-main-lighter": theme === "white",
      "text-secondary-900 hover:text-main-500": theme === "black",
      "text-lg hover:before:block before:hidden relative before:absolute before:w-full before:h-[2px] before:left-0 before:bg-main-500 before:rounded-full":
        !isTopNav,
      "before:-bottom-[35px]": !isTopNav && !isScrolled,
      "before:-bottom-[17px]": !isTopNav && isScrolled,
    },
    "flex items-center gap-2 transition ease-in-out duration-200 group"
  );

  return (
    <button className={buttonClasses}>
      {text}
      <Chevron theme={theme} />
    </button>
  );
};

export default MenuButton;
