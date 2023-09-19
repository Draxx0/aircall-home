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
      id: number;
      menuData?: {
        title: string;
        secondTitle?: string;
        contents: {
          text: string;
          url: string;
          image?: string;
        }[];
        secondContents?: {
          text: string;
          url: string;
          image?: string;
        }[];
        isGrid?: boolean;
        theme?: "gray" | "blue";
        link?: {
          text: string;
          url: string;
        };
      }[];
      footerMenuData?: {
        title: string;
        subtitle?: string;
        buttonData: {
          text: string;
          url: string;
        };
      };
    }[];
  };
  bottomNavigation: {
    navigations: {
      text: string;
      id: number;
      theme: MenuBtnTheme;
      isMenu: boolean;
      menuData?: {
        title?: string;
        secondTitle?: string;
        contents: {
          text: string;
          url: string;
          image?: string;
        }[];
        secondContents?: {
          text: string;
          url: string;
          image?: string;
        }[];
        isGrid?: boolean;
        theme?: "gray" | "blue";
        link?: {
          text: string;
          url: string;
        };
      }[];
      footerMenuData?: {
        title: string;
        subtitle?: string;
        buttonData: {
          text: string;
          url: string;
        };
      };
    }[];
    buttons: {
      text: string;
      theme: BtnTheme;
      url: string;
      isTargetBlank: boolean;
    }[];
  };
}
