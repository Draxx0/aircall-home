import clsx from "clsx";
import Chevron from "./Chevron";

export type MenuBtnTheme = "white" | "black" | "green";

const MenuButton = ({ text, theme }: { text: string; theme: MenuBtnTheme }) => {
  const buttonClasses = clsx(
    {
      "text-white hover:text-main-lighter": theme === "white",
      "text-secondary-900 hover:text-main-500": theme === "black",
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
