import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export type BtnTheme = "green" | "light" | "white";

const Button = ({
  url,
  text,
  theme,
  size,
  isTargetBlank = false,
}: {
  url: string;
  text: string;
  theme: BtnTheme;
  size?: "py-3";
  isTargetBlank?: boolean;
}) => {
  const buttonClasses = clsx(
    {
      "bg-main-500 hover:bg-main-900 text-white": theme === "green",
      "bg-main-lighter text-main-500 hover:bg-hover-lighter": theme === "light",
      "bg-white text-secondary-900 hover:opacity-20": theme === "white",
    },
    "px-6 py-2 rounded-[32px] transition ease-in-out duration-300 text-lg font-semibold"
  );
  return (
    <button className={twMerge(buttonClasses, size)}>
      <a href={url} target={isTargetBlank ? "_blank" : ""}>
        {text}
      </a>
    </button>
  );
};

export default Button;
