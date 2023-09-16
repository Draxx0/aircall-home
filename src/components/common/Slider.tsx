const Slider = ({
  children,
  isMdHidden = false,
}: {
  children: React.ReactElement;
  isMdHidden?: boolean;
}) => {
  return (
    <div
      className={`w-full overflow-hidden flex items-center h-full ${
        isMdHidden && "md:hidden"
      }`}
    >
      <div className="overflow-hidden flex flex-row relative w-full transform-none">
        <div className="flex-auto min-w-full z-[1] flex flex-row items-center animate-movingText">
          <div className="flex-auto flex flex-row gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
