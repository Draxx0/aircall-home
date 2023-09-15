const BurgerMenu = ({
  isBurgerOpen,
  setIsburgerOpen,
}: {
  isBurgerOpen: boolean;
  setIsburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="flex flex-col gap-[3px]"
      onClick={() => setIsburgerOpen(!isBurgerOpen)}
    >
      <span
        className={`bg-main-500 h-[2px] w-[18px] transition ease-in-out duration-300 ${
          isBurgerOpen ? "rotate-45  translate-y-full" : "rotate-0"
        }`}
      ></span>
      <span
        className={`bg-main-500 h-[2px] w-[18px] transition ease-in-out duration-300 ${
          isBurgerOpen ? "-rotate-45 -translate-y-full" : "rotate-0"
        }`}
      ></span>
    </button>
  );
};

export default BurgerMenu;
