import { servicePresentationType } from "../../types/servicePresentationType";
import servicePresentationData from "./ServicePresentationData.json";
import ServiceCard from "./ServiceCard";

const ServicePresentation = () => {
  const servicesJson: servicePresentationType =
    servicePresentationData as servicePresentationType;
  const { services } = servicesJson;

  const twoFirstServices = services.slice(0, 2);

  return (
    <>
      <h2 className="mb-16 text-center text-4xl font-bold text-secondary-500 max-w-2xl mx-auto">
        Créez de la valeur à partir de vos appels
      </h2>

      <div className="flex justify-between gap-6">
        {twoFirstServices.map((service, index) => (
          <ServiceCard service={service} key={index} theme="white" />
        ))}
      </div>
    </>
  );
};

export default ServicePresentation;
