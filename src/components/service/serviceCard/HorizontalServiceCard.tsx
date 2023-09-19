import { useRef } from "react";
import { servicePresentationType } from "../../../types/servicePresentationType";
import Button from "../../common/Button";
import TestimonialCard from "../TestimonialCard";
import useAnimation from "../../../hooks/useAnimation";
import ServiceFloater from "./ServicesFloater";

const HorizontalServiceCard = ({
  service,
  theme,
}: {
  service: servicePresentationType["services"][0];
  theme: "blue" | "white";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useAnimation({
    ref: containerRef,
  });
  return (
    <div
      ref={containerRef}
      className={`${
        theme === "white" ? "bg-gray-100" : "bg-secondary-500"
      } rounded-[32px] sm:rounded-[64px] p-6 sm:p-16 flex ${
        service.display === "row" ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-7 flex-col`}
    >
      <div className="relative lg:min-w-[50%]">
        <img
          src={service.image}
          className="rounded-[32px] xl:max-h-[520px] w-full h-full object-cover"
          alt="image représentant l'augmentation de vente"
        />
        <ServiceFloater service={service} />
      </div>
      <div className="flex flex-col justify-between xl:gap-0 gap-10">
        <div>
          <h3
            className={`text-4xl ${
              service.card_theme === "white"
                ? "text-secondary-900"
                : "text-white"
            } font-semibold mb-4`}
          >
            {service.title}
          </h3>
          <p className="text-gray-400 text-xl mb-7">{service.text}</p>
          <Button
            text={service.buttonParams.text}
            theme={service.buttonParams.theme}
            url={service.buttonParams.url}
            isTargetBlank={service.buttonParams.isTargetBlank}
            size="py-3"
          />
        </div>

        <TestimonialCard
          testimonial={service.testimonial}
          theme={service.testimonial.theme}
        />
      </div>
    </div>
  );
};

export default HorizontalServiceCard;
