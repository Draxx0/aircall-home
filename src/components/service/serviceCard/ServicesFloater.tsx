import { servicePresentationType } from "../../../types/servicePresentationType";

const ServiceFloater = ({
  service,
}: {
  service: servicePresentationType["services"][0];
}) => {
  return (
    <div className="absolute bottom-4 backdrop-blur-2xl bg-gradient-custom left-4 flex items-center gap-2 p-2 rounded-[24px]">
      {service.image_logos.map((im, index) => (
        <img
          src={im.image}
          alt="logo de service"
          key={index}
          className="w-9 sm:w-12"
        />
      ))}
    </div>
  );
};

export default ServiceFloater;
