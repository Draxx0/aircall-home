import clsx from "clsx";
import { MenuBtnTheme } from "./MenuButton";
import { twMerge } from "tailwind-merge";

const Chevron = ({
  theme,
  className,
}: {
  theme: MenuBtnTheme;
  className?: string;
}) => {
  const chevronClasses = clsx(
    {
      "border-black group-hover:border-main-500": theme === "black",
      "border-main-lighter": theme === "white",
      "border-green-500": theme === "green",
    },
    " w-[7px] h-[7px] border-b-[1.5px] border-r-[1.5px] border-solid rotate-45 ease-in-out duration-200"
  );
  return <div className={twMerge(chevronClasses, className)}></div>;
};

export default Chevron;
