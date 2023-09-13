import clsx from "clsx";
export type BtnTheme = "green" | "light";

const Button = ({
  url,
  text,
  theme,
  isTargetBlank = false,
}: {
  url: string;
  text: string;
  theme: BtnTheme;
  isTargetBlank?: boolean;
}) => {
  const buttonClasses = clsx(
    {
      "bg-main-500 hover:bg-main-900 text-white": theme === "green",
      "bg-main-lighter text-main-500 hover:bg-hover-lighter": theme === "light",
    },
    "px-6 py-2 rounded-[32px] transition ease-in-out duration-300 font-semibold"
  );
  return (
    <button className={`${buttonClasses}`}>
      <a href={url} target={isTargetBlank ? "_blank" : ""}>
        {text}
      </a>
    </button>
  );
};

export default Button;
