import { BtnTheme } from "../components/common/Button";
import { TestimonialCardTheme } from "../components/service/TestimonialCard";

export interface servicePresentationType {
  services: {
    image: string;
    card_theme: "white" | "blue";
    display: "row" | "row-reverse";
    image_logos: {
      image: string;
    }[];
    title: string;
    text: string;
    buttonParams: {
      text: string;
      theme: BtnTheme;
      url: string;
      isTargetBlank: boolean;
    };
    testimonial: {
      theme: TestimonialCardTheme;
      image: string;
      author: string;
      function: string;
      text: string;
    };
  }[];
}
