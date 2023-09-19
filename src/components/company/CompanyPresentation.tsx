import { companyType } from "../../types/companyType";
import Slider from "../common/Slider";
import CompanySlider from "./CompanySlider";
import companyData from "./companyData.json";

const CompanyPresentation = () => {
  const companiesJson: companyType = companyData;
  const { companies } = companiesJson;
  return (
    <>
      <div className="space-y-10 mb-10 md:mb-0 md:px-10 md:mt-10 ">
        <p className="uppercase font-semibold tracking-widest text-center text-secondary-900/70">
          approuvé par plus de 17 000 entreprises
        </p>

        <div className="hidden md:flex md:items-center md:justify-between whitespace-nowrap overflow-x-auto">
          {companies.map((company, index) => (
            <img src={company.image} alt="logo d'entreprise" key={index} />
          ))}
        </div>
      </div>

      <Slider isMdHidden>
        <>
          <CompanySlider companies={companies} />
          <CompanySlider companies={companies} />
        </>
      </Slider>
    </>
  );
};

export default CompanyPresentation;
