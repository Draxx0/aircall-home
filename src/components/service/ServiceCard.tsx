import { servicePresentationType } from "../../types/servicePresentationType";
import Button from "../common/Button";
import TestimonialCard from "./TestimonialCard";

const ServiceCard = ({
  service,
  theme,
}: {
  service: servicePresentationType["services"][0];
  theme: "blue" | "white";
}) => {
  return (
    <>
      {theme === "white" ? (
        <div className="bg-gray-100 rounded-[32px] p-[72px] ">
          <div className="mb-14 space-y-6">
            <div className="relative">
              <img
                src={service.image}
                className="rounded-[32px] max-h-[300px] min-w-[475px] object-cover"
                alt="image représentant l'augmentation de vente"
              />
              <div className="absolute bottom-4 backdrop-blur-2xl bg-gradient-to-l from-gray-300 to-gray-400  left-4 flex items-center gap-2 p-2 rounded-[24px]">
                {service.image_logos.map((im, index) => (
                  <img src={im.image} alt="logo de service" key={index} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl text-secondary-900 font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-400 text-lg">{service.text}</p>
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
      ) : (
        <div className="bg-secondary-500 rounded-[32px] p-[72px] ">
          <div className="mb-14 space-y-6">
            <div className="relative">
              <img
                src={service.image}
                className="rounded-[32px] max-h-[300px] min-w-[475px] object-cover"
                alt="image représentant l'augmentation de vente"
              />
              <div className="absolute bottom-4 backdrop-blur-2xl bg-gradient-to-l from-gray-300 to-gray-400  left-4 flex items-center gap-2 p-2 rounded-[24px]">
                {service.image_logos.map((im, index) => (
                  <img src={im.image} alt="logo de service" key={index} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl text-secondary-900 font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-400 text-lg">{service.text}</p>
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
      )}
    </>
  );
};

export default ServiceCard;
