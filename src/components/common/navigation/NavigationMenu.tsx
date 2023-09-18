import { navigationDataInterface } from "../../../types/navigationTypes";
import Link from "../Link";
type Props = {
  data:
    | navigationDataInterface["bottomNavigation"]["navigations"][0]
    | navigationDataInterface["topNavigation"]["navigations"][0];
  hasFooter?: boolean;
  children: React.ReactElement;
};

const NavigationMenu = ({ data, hasFooter = false, children }: Props) => {
  return (
    <div className="shadow-lg rounded-[24px] relative z-50">
      <div className={`bg-white relative z-10 rounded-b-[24px] px-10 py-3`}>
        {children}
      </div>
      {hasFooter && data.footerMenuData && (
        <div className="bg-secondary-500 px-10 py-8 pb-3 rounded-b-[24px] relative before:w-full before:bg-secondary-500 before:h-6 before:absolute before:left-0 before:-top-6 before:z-[5] min-h-[100px] flex justify-between gap-10 text-white">
          <div className="flex flex-col gap-2">
            <span className="uppercase font-bold">
              {data.footerMenuData.title}
            </span>
            <p className="opacity-70">{data.footerMenuData.subtitle}</p>
          </div>
          <Link
            text={data.footerMenuData.buttonData.text}
            url={data.footerMenuData.buttonData.url}
            theme="white"
            hasChevron
          />
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
