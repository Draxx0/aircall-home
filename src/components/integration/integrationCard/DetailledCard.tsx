import { integrationPresentationType } from "../../../types/integrationType";

const DetailledCard = ({
  integration,
}: {
  integration: integrationPresentationType["integrations"]["integrations_data"][0];
}) => {
  return (
    <a
      href="/"
      className="cursor-pointer flex items-center gap-2 px-4 py-3 rounded-[16px] relative
      before:w-full before:h-full before:absolute before:inset-0 before:rounded-[16px] before:bg-gradient-custom before:hover:opacity-100 before:transition before:duration-200 before:ease-in-out before:backdrop-blur-2xl before:opacity-[66%] before:block before:z-0"
    >
      <img
        src={integration.image}
        className="w-12 relative z-10"
        alt="image représentant l'augmentation de vente"
      />
      <div className="relative z-10">
        <h3 className="text-white text-xl font-semibold">
          {integration.integration_name}
        </h3>
        <span className="text-white font-semibold opacity-50">
          {integration.integration_role}
        </span>
      </div>
    </a>
  );
};

export default DetailledCard;
