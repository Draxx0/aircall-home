import { companyType } from "../../types/companyType";
import companyData from "./companyData.json";

const CompanySlider = () => {
  const companiesJson: companyType = companyData;
  const { companies } = companiesJson;
  return (
    <div className="space-y-10 md:px-10">
      <p className="uppercase font-semibold tracking-wide text-center text-gray-400">
        approuvé par plus de 17 000 entreprises
      </p>

      <div className="md:flex md:items-center md:justify-between whitespace-nowrap overflow-x-auto">
        {companies.map((company, index) => (
          <img src={company.image} alt="logo d'entreprise" key={index} />
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;
