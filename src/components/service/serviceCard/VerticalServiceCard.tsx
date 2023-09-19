import { useRef } from "react";
import { servicePresentationType } from "../../../types/servicePresentationType";
import Button from "../../common/Button";
import TestimonialCard from "../TestimonialCard";
import useAnimation from "../../../hooks/useAnimation";
import ServiceFloater from "./ServicesFloater";

const ServiceCard = ({
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
      } rounded-[32px] sm:rounded-[64px] p-6 sm:p-16 w-full lg:w-1/2`}
    >
      <div className="mb-14 space-y-6">
        <div className="relative">
          <img
            src={service.image}
            className="rounded-[32px] w-full lg:max-h-[300px] object-cover"
            alt="image représentant l'augmentation de vente"
          />
          <ServiceFloater service={service} />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl text-secondary-500 font-semibold">
            {service.title}
          </h3>
          <p className="text-secondary-500/70 text-lg">{service.text}</p>
          <Button
            text={service.buttonParams.text}
            theme={service.buttonParams.theme}
            url={service.buttonParams.url}
            isTargetBlank={service.buttonParams.isTargetBlank}
            size="py-3"
          />
        </div>
      </div>
      <TestimonialCard
        testimonial={service.testimonial}
        theme={service.testimonial.theme}
      />
    </div>
  );
};

export default ServiceCard;
