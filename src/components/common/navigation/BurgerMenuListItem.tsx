import { useCallback } from "react";
import { navigationDataInterface } from "../../../types/navigationTypes";
import Chevron from "../Chevron";
import Link from "../Link";

const BurgerMenuListItem = ({
  menu,
  menuId,
  setSelectedMenu,
  selectedMenuId,
}: {
  menu:
    | navigationDataInterface["bottomNavigation"]["navigations"][0]
    | navigationDataInterface["topNavigation"]["navigations"][0];
  menuId: number;
  setSelectedMenu: React.Dispatch<React.SetStateAction<number | null>>;
  selectedMenuId: number | null;
}) => {
  const handleSelectMenu = () => {
    if (isSelectedMenu()) {
      setSelectedMenu(null);
      return;
    }
    setSelectedMenu(menuId);
  };
  const isSelectedMenu = useCallback(() => {
    if (menuId === selectedMenuId) {
      return true;
    }
    return false;
  }, [menuId, selectedMenuId]);

  return (
    <>
      {menu.menuData ? (
        <li
          className="border-y border-gray-200 overflow-hidden py-5 text-secondary-500"
          onClick={handleSelectMenu}
        >
          <button className="flex justify-between items-center w-full px-4">
            <span
              className={`text-lg font-semibold ${
                isSelectedMenu() ? "text-green-500" : "text-secondary-900"
              }`}
            >
              {menu.text}
            </span>
            <Chevron
              theme="black"
              className={`transition ease-in-out duration-300 ${
                isSelectedMenu()
                  ? "border-green-500 rotate-45"
                  : "border-secondary-900 -rotate-45"
              }`}
            />
          </button>

          <div
            className={`w-full ${
              selectedMenuId === menuId ? "max-h-[3000px]" : "max-h-0"
            } space-y-4 px-2 transition-all ease-in-out duration-700`}
          >
            {menu.menuData?.map((m, index) => (
              <div
                key={index}
                className={`${
                  m.theme === "gray" ? "bg-gray-100 rounded-[24px]" : ""
                } px-4 flex flex-col gap-4 py-5`}
              >
                <span className="font-bold uppercase px-2">{m.title}</span>

                <ul
                  className={`flex flex-col gap-3 px-4 ${
                    m.isGrid ? "grid grid-cols-2" : "flex flex-col"
                  }`}
                >
                  {m.contents.map((content, index) =>
                    content.image && m.title === "nos intégrations" ? (
                      <li key={index} className="flex items-center gap-2">
                        <img
                          src={content.image}
                          alt="service logo"
                          className="w-6"
                        />
                        <a href={content.url}>{content.text}</a>
                      </li>
                    ) : (
                      <li key={index}>
                        <a href={content.url}>{content.text}</a>
                      </li>
                    )
                  )}
                </ul>

                {m.secondContents && (
                  <>
                    <span className="font-bold uppercase px-2">
                      {m.secondTitle}
                    </span>
                    <ul className="flex flex-col gap-3 px-4">
                      {m.secondContents.map((content, index) => (
                        <li key={index}>
                          <a href={content.url}>{content.text}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {m.link && (
                  <Link
                    text={m.link.text}
                    theme={"black"}
                    url={m.link.url}
                    hasChevron
                    isAlignCenter={false}
                    className="flex items-center gap-2 px-4"
                  />
                )}
              </div>
            ))}

            {menu.footerMenuData && (
              <div className="bg-secondary-500 px-10 space-y-2 py-5 rounded-[24px] justify-between gap-10 text-white">
                <span className="uppercase font-bold">
                  {menu.footerMenuData.title}
                </span>
                <p className="opacity-70">{menu.footerMenuData.subtitle}</p>

                <Link
                  text={menu.footerMenuData.buttonData.text}
                  url={menu.footerMenuData.buttonData.url}
                  theme="white"
                  isAlignCenter={false}
                  className="flex items-center gap-2"
                  hasChevron
                />
              </div>
            )}
          </div>
        </li>
      ) : (
        <li className="border-y border-gray-200">
          <a
            href="/"
            className="py-5 flex justify-between items-center w-full px-4"
          >
            <span className="text-lg font-semibold">{menu.text}</span>
          </a>
        </li>
      )}
    </>
  );
};

export default BurgerMenuListItem;
