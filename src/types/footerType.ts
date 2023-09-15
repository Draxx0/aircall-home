export interface footerType {
  medias_links: {
    name: string;
    path: string;
    alt: string;
    type: "store" | "media";
    url: string;
  }[];
  internal_links: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
  legal_menus: {
    title: string;
    url: string;
  }[];
}
