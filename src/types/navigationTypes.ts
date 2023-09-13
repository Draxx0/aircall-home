import { BtnTheme } from "../components/common/Button";
import { MenuBtnTheme } from "../components/common/MenuButton";

export interface navigationDataInterface {
  topNavigation: {
    webinar: {
      webinarText: string;
      webinarButton: string;
    };
    navigations: {
      text: string;
      theme: MenuBtnTheme;
      isMenu: boolean;
    }[];
  };
  bottomNavigation: {
    navigations: {
      text: string;
      theme: MenuBtnTheme;
      isMenu: boolean;
    }[];
    buttons: {
      text: string;
      theme: BtnTheme;
      url: string;
      isTargetBlank: boolean;
    }[];
  };
}
