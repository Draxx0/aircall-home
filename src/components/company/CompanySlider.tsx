import { companyType } from "../../types/companyType";

const CompanySlider = ({
  companies,
}: {
  companies: companyType["companies"];
}) => {
  return (
    <>
      {companies.map((company, index) => (
        <img src={company.image} alt="logo d'entreprise" key={index} />
      ))}
    </>
  );
};

export default CompanySlider;
