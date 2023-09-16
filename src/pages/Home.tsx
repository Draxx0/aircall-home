import HeaderImage from "../assets/images/header_image.webp";
import GetFreeTryInput from "../components/GetFreeTryInput";
import Button from "../components/common/Button";
import DemoBlock from "../components/common/DemoBlock";
import Section from "../components/common/Section";
import CompanyPresentation from "../components/company/CompanyPresentation";
import IntegrationPresentation from "../components/integration/IntegrationPresentation";
import ProductPresentation from "../components/product/ProductPresentation";
import ServicePresentation from "../components/service/ServicePresentation";

const Home = () => {
  return (
    <>
      <header className="lg:container">
        <div className="pt-8 pb-0 2xl:pb-24 flex md:flex-row flex-col md:items-center gap-10 md:gap-0 md:justify-between">
          <div className="space-y-7 px-4 lg:px-0 md:max-w-[55%] text-secondary-500">
            <h1 className="text-[40px] max-w-sm md:max-w-none md:text-6xl leading-10 md:leading-20 font-bold">
              La téléphonie d'entreprise connectée à vos outils
            </h1>
            <p className="text-2xl max-w-sm lg:max-w-none">
              Facile à installer. Simple à utiliser. Intégrée à vos outils.
            </p>
            <div className="hidden md:block max-w-lg">
              <GetFreeTryInput />
            </div>
            <div className="md:hidden">
              <Button text="Essai gratuit" theme="green" url="/" size="py-3" />
            </div>
          </div>
          <div>
            <img
              src={HeaderImage}
              className="2xl:rounded-[32px] 2xl:max-w-[500px] 2xl:max-h-[500px] object-cover md:-bottom-10 md:top-0 md:max-w-[350px] md:min-h-[530px] lg:min-h-[450px] xl:h-[370px] xl:min-h-0  xl:min-w-[550px] md:absolute md:right-0 2xl:static"
              alt="image représentant la téléphonie d'entreprise"
            />
          </div>
        </div>
      </header>

      <div className="2xl:hidden bg-white rounded-t-[64px] h-10 relative md:h-20 -top-10 lg:top-2 md:top-0"></div>

      <Section isContainer>
        <CompanyPresentation />
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
