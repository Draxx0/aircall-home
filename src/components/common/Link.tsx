import clsx from "clsx";
import Chevron from "./Chevron";

type Props = {
  text: string;
  url: string;
  theme: "black" | "white";
  isAlignCenter?: boolean;
  isTargetBlank?: boolean;
  hasChevron?: boolean;
};

const Link = ({
  text,
  url,
  theme,
  isAlignCenter = true,
  isTargetBlank = false,
  hasChevron = false,
}: Props) => {
  const linkClasses = clsx(
    {
      "text-secondary-500 hover:text-green-500": theme === "black",
      "text-white opacity-70 hover:opacity-100": theme === "white",
      "flex items-center justify-center gap-2": isAlignCenter,
    },
    "font-bold group transition ease-in-out duration-300"
  );

  return (
    <a
      href={url}
      className={linkClasses}
      target={isTargetBlank ? "_blank" : ""}
    >
      {text}
      {hasChevron && (
        <Chevron
          theme="green"
          className="rotate-[315deg] transition ease-in-out duration-300 group-hover:translate-x-1/2"
        />
      )}
    </a>
  );
};

export default Link;
