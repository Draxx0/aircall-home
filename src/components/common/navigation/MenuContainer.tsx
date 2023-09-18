import { useRef } from "react";
import { navigationDataInterface } from "../../../types/navigationTypes";
import MenuButton from "../MenuButton";
import NavigationMenu from "./NavigationMenu";
import useDetectMenuHover from "../../../hooks/useDetectMenuHover";
import Link from "../Link";

const MenuContainer = ({
  n,
  isScrolled,
  isTopNav,
}: {
  n: navigationDataInterface["bottomNavigation"]["navigations"][0];
  isScrolled: boolean;
  isTopNav: boolean;
}) => {
  const menuRef = useRef<HTMLLIElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const isHovered = useDetectMenuHover({
    menuRef,
    menuContainerRef,
  });

  return (
    <li className="flex items-center gap-1 h-full relative" ref={menuRef}>
      {n.isMenu ? (
        <>
          <MenuButton
            isTopNav={isTopNav}
            text={n.text}
            theme={n.theme}
            isScrolled={isScrolled}
          />
          <div
            ref={menuContainerRef}
            className={`${isHovered ? "block" : "hidden"} absolute ${
              isTopNav ? "top-[36px]" : "top-[52px]"
            } -left-10 w-max  z-0 max-w-[800px]`}
          >
            <NavigationMenu data={n} hasFooter>
              <div className="flex gap-6 justify-between text-black">
                {n.menuData?.map((menu, index) => (
                  <div
                    className={`flex flex-col gap-8 py-6 ${
                      menu.theme === "gray"
                        ? "bg-gray-100 px-6 rounded-[24px]"
                        : menu.theme === "blue"
                        ? "bg-secondary-500 px-6 rounded-[24px] text-white"
                        : ""
                    }`}
                    key={index}
                  >
                    <span className="font-bold uppercase text-lg whitespace-nowrap">
                      {menu.title}
                    </span>
                    <ul
                      className={`${
                        menu.isGrid ? "grid grid-cols-2" : "flex flex-col"
                      }  gap-5`}
                    >
                      {menu.contents.map((content, index) => (
                        <li
                          key={index}
                          className={`${
                            content.image && " flex items-center gap-10"
                          } ${
                            menu.theme === "blue"
                              ? "hover:bg-gray-200/25 rounded p-2"
                              : "hover:bg-gray-200 rounded p-2"
                          } relative z-[1] cursor-pointer w-full min-h-[50px]`}
                        >
                          <a
                            href={content.url}
                            className="flex items-center gap-3"
                          >
                            {content.image && (
                              <img
                                src={content.image}
                                alt="icone menu"
                                className="w-6"
                              />
                            )}
                            <span className="text-lg">{content.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    {menu.secondContents && menu.secondTitle && (
                      <>
                        <span className="font-bold uppercase text-lg whitespace-nowrap">
                          {menu.secondTitle}
                        </span>

                        <ul
                          className={`${
                            menu.isGrid ? "grid grid-cols-2" : "flex flex-col"
                          }  gap-1`}
                        >
                          {menu.secondContents.map((content, index) => (
                            <li
                              key={index}
                              className={`${
                                content.image && " flex items-center gap-10"
                              } ${
                                menu.theme === "blue"
                                  ? "hover:bg-gray-200/25 rounded p-2"
                                  : "hover:bg-gray-200 rounded p-2"
                              } relative z-[1] cursor-pointer w-full min-h-[50px]`}
                            >
                              <a
                                href={content.url}
                                className="flex items-center gap-3"
                              >
                                {content.image && (
                                  <img
                                    src={content.image}
                                    alt="icone menu"
                                    className="w-6"
                                  />
                                )}
                                <span className="text-lg">{content.text}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {menu.link && (
                      <div className="flex items-start">
                        <Link
                          text={menu.link.text}
                          theme={menu.theme === "blue" ? "white" : "black"}
                          url={menu.link.url}
                          hasChevron
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </NavigationMenu>
          </div>
        </>
      ) : (
        <li
          className={`text-secondary-900 flex items-center text-lg h-full before:z-[1] hover:text-main-500 transition ease-in-out duration-200 hover:before:block before:hidden relative before:absolute before:w-full before:h-[2px] before:left-0 before:bg-main-500 before:rounded-full ${
            isScrolled ? "before:-bottom-[1px]" : "before:-bottom-[21px]"
          }`}
        >
          <a href="/">{n.text}</a>
        </li>
      )}
    </li>
  );
};

export default MenuContainer;
