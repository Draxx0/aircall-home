import React from "react";
import Calendar from "../../../assets/icons/calendar.webp";
import { navigationDataInterface } from "../../../types/navigationTypes";
import Slider from "../Slider";
import MenuContainer from "./MenuContainer";
import WebinarMovingText from "./WebinarMovingText";

const TopNavigation = ({
  data,
  isScrolled,
}: {
  data: navigationDataInterface;
  isScrolled: boolean;
}) => {
  const { webinar, navigations } = data.topNavigation;
  return (
    <>
      <nav
        className={`bg-main-700 relative justify-center hidden xl:flex ${
          isScrolled ? "min-h-0" : "min-h-[48px]"
        } before:w-[47.5%] before:block before:absolute before:left-0 before:top-0 before:z-[1] before:rounded-tr-[32px] before:rounded-br-[32px] before:bg-main-300 flex flex-col items-center before:h-full`}
      >
        <div className="w-full flex justify-between items-center container z-10">
          <div className="text-white max-w-[45%]">
            <div className="flex items-center gap-2 leading-5">
              <img src={Calendar} alt="icone de calendrier" className="w-5" />
              <div>
                <p>{webinar.webinarText}</p>
                <a href="/" className="underline ">
                  {webinar.webinarButton}
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[55%] flex min-h-[40px]">
            <ul className="flex items-center gap-5 [&>*:nth-child(4)]:bg-main-200 [&>*:nth-child(4)]:transition [&>*:nth-child(4)]:duration-200 [&>*:nth-child(4)]:ease-in-out [&>*:nth-child(4):hover]:bg-hover-200 [&>*:nth-child(4)]:rounded-[32px] [&>*:nth-child(4)]:py-[2px] [&>*:nth-child(4)]:px-[10px]">
              {navigations.map((n, index) => (
                <React.Fragment key={index}>
                  {n.isMenu ? (
                    <MenuContainer
                      isScrolled={isScrolled}
                      n={n}
                      key={index}
                      isTopNav={true}
                    />
                  ) : (
                    <li className="text-white hover:text-main-lighter transition ease-in-out duration-200">
                      <a href="/">{n.text}</a>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-main-700 relative xl:hidden w-full top-0">
        <div className="border-b border-gray-300 py-3">
          <Slider>
            <>
              <WebinarMovingText webinar={webinar} />
              <WebinarMovingText webinar={webinar} />
              <WebinarMovingText webinar={webinar} />
              <WebinarMovingText webinar={webinar} />
              <WebinarMovingText webinar={webinar} />
            </>
          </Slider>
        </div>
        <div className="py-3 px-4 flex justify-end">
          <ul className="flex gap-3 [&>*:nth-child(1)]:bg-main-200 [&>*:nth-child(1)]:transition [&>*:nth-child(1)]:duration-200 [&>*:nth-child(1)]:ease-in-out [&>*:nth-child(1):hover]:bg-hover-200 [&>*:nth-child(1)]:rounded-[32px] [&>*:nth-child(1)]:py-[2px] [&>*:nth-child(1)]:px-[10px]">
            {navigations.slice(-3).map((item, index) => (
              <React.Fragment key={index}>
                {item.isMenu ? (
                  <MenuContainer
                    isScrolled={isScrolled}
                    n={item}
                    key={index}
                    isTopNav={true}
                  />
                ) : (
                  <li className="text-white hover:text-main-lighter transition ease-in-out duration-200">
                    <a href="/">{item.text}</a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;
