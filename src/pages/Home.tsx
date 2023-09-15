import HeaderImage from "../assets/images/header_image.webp";
import GetFreeTryInput from "../components/GetFreeTryInput";
import DemoBlock from "../components/common/DemoBlock";
import Section from "../components/common/Section";
import CompanySlider from "../components/company/CompanySlider";
import IntegrationPresentation from "../components/integration/IntegrationPresentation";
import ProductPresentation from "../components/product/ProductPresentation";
import ServicePresentation from "../components/service/ServicePresentation";

const Home = () => {
  return (
    <>
      <header className="lg:container">
        <div className="pt-8 pb-24 flex items-center justify-between">
          <div className="space-y-7 max-w-[55%] text-secondary-500">
            <h1 className="text-6xl leading-20 font-bold">
              La téléphonie d'entreprise connectée à vos outils
            </h1>
            <p className="text-2xl">
              Facile à installer. Simple à utiliser. Intégrée à vos outils.
            </p>
            <div className="max-w-lg">
              <GetFreeTryInput />
            </div>
          </div>
          <div>
            <img
              src={HeaderImage}
              className="rounded-[32px] w-[500px] h-[500px] object-cover"
              alt="image représentant la téléphonie d'entreprise"
            />
          </div>
        </div>
      </header>

      <Section isContainer>
        <CompanySlider />
      </Section>

      <Section isContainer>
        <ProductPresentation />
      </Section>

      <Section isContainer>
        <ServicePresentation />
      </Section>

      <Section>
        <IntegrationPresentation />
      </Section>

      <Section isContainer>
        <DemoBlock />
      </Section>
    </>
  );
};

export default Home;
