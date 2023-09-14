import Calendar from "../../../assets/icons/calendar.webp";
import { navigationDataInterface } from "../../../types/navigationTypes";

import MenuButton from "../MenuButton";

const TopNavigation = ({ data }: { data: navigationDataInterface }) => {
  const { webinar, navigations } = data.topNavigation;
  return (
    <nav className="bg-main-700 relative justify-center min-h-[48px] before:w-[47.5%] before:block before:absolute before:left-0 before:top-0 before:z-[1] before:rounded-tr-[32px] before:rounded-br-[32px] before:bg-main-300 flex flex-col items-center before:h-full">
      <div className="w-full flex justify-between items-center container z-10">
        <div className="text-white max-w-[45%]">
          <div className="flex items-center gap-2 leading-5">
            <img src={Calendar} alt="icone de calendrier" className="w-5" />
            <div>
              <p className="text-sm">{webinar.webinarText}</p>
              <a href="/" className="underline ">
                {webinar.webinarButton}
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[55%]">
          <ul className="flex items-center gap-5 [&>*:nth-child(4)]:bg-main-200 [&>*:nth-child(4)]:transition [&>*:nth-child(4)]:duration-200 [&>*:nth-child(4)]:ease-in-out [&>*:nth-child(4):hover]:bg-hover-200 [&>*:nth-child(4)]:rounded-[32px] [&>*:nth-child(4)]:py-[2px] [&>*:nth-child(4)]:px-[10px]">
            {navigations.map((n, index) => (
              <li className="flex items-center gap-1 text-sm" key={index}>
                {n.isMenu ? (
                  <MenuButton text={n.text} theme={n.theme} />
                ) : (
                  <a
                    href="/"
                    className="text-white hover:text-main-lighter transition ease-in-out duration-200"
                  >
                    {n.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;