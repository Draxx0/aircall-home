import Calendar from "../../../assets/icons/calendar.webp";
import { navigationDataInterface } from "../../../types/navigationTypes";

import MenuButton from "../MenuButton";

const TopNavigation = ({ data }: { data: navigationDataInterface }) => {
  const { webinar, navigations } = data.topNavigation;
  return (
    <nav className="bg-main-700 relative max-h-[48px] before:w-[47.5%] before:block before:absolute before:left-0 before:top-0 before:z-[1] before:rounded-tr-[32px] before:rounded-br-[32px] before:bg-main-300 flex flex-col items-center before:h-full py-1">
      <div className="w-full flex justify-between items-center container z-10">
        <div className="text-white max-w-[50%]">
          <div className="flex items-center gap-2 leading-5">
            <img src={Calendar} alt="icone de calendrier" className="w-5" />
            <div>
              <p className="">{webinar.webinarText}</p>
              <a href="/" className="underline ">
                {webinar.webinarButton}
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[50%]">
          <ul className="flex items-center gap-6 [&>*:nth-child(3)]:bg-main-200 [&>*:nth-child(3)]:transition [&>*:nth-child(3)]:duration-200 [&>*:nth-child(3)]:ease-in-out [&>*:nth-child(3):hover]:bg-hover-200 [&>*:nth-child(3)]:rounded-[32px] [&>*:nth-child(3)]:py-[2px] [&>*:nth-child(3)]:px-[10px]">
            {navigations.map((n, index) => (
              <li className="flex items-center gap-1" key={index}>
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
