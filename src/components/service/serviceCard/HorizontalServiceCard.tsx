import { servicePresentationType } from "../../../types/servicePresentationType";
import Button from "../../common/Button";
import TestimonialCard from "../TestimonialCard";

const HorizontalServiceCard = ({
  service,
  theme,
}: {
  service: servicePresentationType["services"][0];
  theme: "blue" | "white";
}) => {
  return (
    <div
      className={`${
        theme === "white" ? "bg-gray-100" : "bg-secondary-500"
      } rounded-[64px] p-16 flex ${
        service.display === "row" ? "flex-row" : "flex-row-reverse"
      } gap-7`}
    >
      <div className="relative min-w-[50%]">
        <img
          src={service.image}
          className="rounded-[32px] h-full object-cover"
          alt="image représentant l'augmentation de vente"
        />
        <div className="absolute bottom-4 backdrop-blur-2xl bg-gradient-to-l from-gray-300 to-gray-400  left-4 flex items-center gap-2 p-2 rounded-[24px]">
          {service.image_logos.map((im, index) => (
            <img src={im.image} alt="logo de service" key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between">
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
