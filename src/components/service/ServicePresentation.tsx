import { servicePresentationType } from "../../types/servicePresentationType";
import servicePresentationData from "./ServicePresentationData.json";
import HorizontalServiceCard from "./serviceCard/HorizontalServiceCard";
import VerticalServiceCard from "./serviceCard/VerticalServiceCard";

const ServicePresentation = () => {
  const servicesJson: servicePresentationType =
    servicePresentationData as servicePresentationType;
  const { services } = servicesJson;

  const twoFirstServices = services.slice(0, 2);
  const twoLastServices = services.slice(2, 4);

  return (
    <>
      <h2 className="mb-16 text-center text-4xl font-bold text-secondary-500 max-w-2xl mx-auto">
        Créez de la valeur à partir de vos appels
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        {twoFirstServices.map((service, index) => (
          <VerticalServiceCard service={service} key={index} theme="white" />
        ))}
      </div>

      <div className="mt-6 space-y-7">
        {twoLastServices.map((service, index) => (
          <HorizontalServiceCard
            service={service}
            key={index}
            theme={service.card_theme}
          />
        ))}
      </div>
    </>
  );
};

export default ServicePresentation;
