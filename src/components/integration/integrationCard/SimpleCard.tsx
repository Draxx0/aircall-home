import { integrationPresentationType } from "../../../types/integrationType";

const SimpleCard = ({
  integration,
}: {
  integration: integrationPresentationType["integrations"]["integrations_data"][0];
}) => {
  return (
    <div className="rounded-[16px] bg-gradient-custom p-4">
      <img src={integration.image} alt="logo d'outil d'integration" />
    </div>
  );
};

export default SimpleCard;
