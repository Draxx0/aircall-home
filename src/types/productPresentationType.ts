export interface productPresentationType {
  products: {
    video: string;
    title: string;
    text: string;
    buttonParams: {
      text: string;
      url: string;
      isTargetBlank: boolean;
    };
  }[];
}
