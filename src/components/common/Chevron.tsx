import clsx from "clsx";
import { MenuBtnTheme } from "./MenuButton";

const Chevron = ({ theme }: { theme: MenuBtnTheme }) => {
  const chevronClasses = clsx(
    {
      "border-black group-hover:border-main-500": theme === "black",
      "border-main-lighter": theme === "white",
    },
    " w-[7px] h-[7px] border-b-[1.5px] border-r-[1.5px] border-solid rotate-45 ease-in-out duration-200"
  );
  return <div className={chevronClasses}></div>;
};

export default Chevron;
