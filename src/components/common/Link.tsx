import clsx from "clsx";
import Chevron from "./Chevron";

type Props = {
  text: string;
  url: string;
  theme: "black";
  isTargetBlank?: boolean;
};

const Link = ({ text, url, theme, isTargetBlank = false }: Props) => {
  const linkClasses = clsx(
    {
      "text-secondary-500 hover:text-green-500": theme === "black",
    },
    "font-bold flex items-center justify-center gap-2 group transition ease-in-out duration-300"
  );

  return (
    <a
      href={url}
      className={linkClasses}
      target={isTargetBlank ? "_blank" : ""}
    >
      {text}
      <Chevron
        theme={theme === "black" ? "green" : "black"}
        className="-rotate-45 transition ease-in-out duration-300 group-hover:translate-x-1/2"
      />
    </a>
  );
};

export default Link;
