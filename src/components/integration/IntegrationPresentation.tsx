import { Swiper, SwiperSlide } from "swiper/react";
import { integrationPresentationType } from "../../types/integrationType";
import Button from "../common/Button";
import integrationPresentationData from "./IntegrationPresentationData.json";
import DetailledCard from "./integrationCard/DetailledCard";
import SimpleCard from "./integrationCard/SimpleCard";

const IntegrationPresentation = () => {
  const integrationJson: integrationPresentationType =
    integrationPresentationData as integrationPresentationType;

  const { integrations } = integrationJson;

  const detailedIntegrations = integrations.integrations_data.filter(
    (integration) => integration.integration_name !== undefined
  );

  const simpleIntegrations = integrations.integrations_data.filter(
    (integration) => integration.integration_name === undefined
  );

  return (
    <div className="bg-secondary-700 mt-7 py-[80px]">
      <div className="lg:container px-4">
        <h2 className="text-4xl font-bold text-white text-center mx-auto max-w-2xl">
          {integrations.title}
        </h2>

        <div className="md:grid md:grid-cols-4 md:gap-6 mt-12 hidden">
          {detailedIntegrations.map((integration, index) => (
            <DetailledCard integration={integration} key={index} />
          ))}
        </div>

        <div className="space-y-10 mt-12 md:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
            }}
          >
            {detailedIntegrations
              .slice(0, detailedIntegrations.length / 2)
              .map((integration, index) => (
                <SwiperSlide key={index}>
                  <DetailledCard integration={integration} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="space-y-10 mt-12 md:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
            }}
          >
            {detailedIntegrations
              .slice(
                detailedIntegrations.length / 2,
                detailedIntegrations.length
              )
              .map((integration, index) => (
                <SwiperSlide key={index}>
                  <DetailledCard integration={integration} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <p className="md:text-center mt-10 text-white opacity-70 text-2xl">
          {integrations.subtitle}
        </p>

        <div className="md:flex md:gap-6 mt-4 hidden">
          {simpleIntegrations.map((integration, index) => (
            <SimpleCard integration={integration} key={index} />
          ))}
        </div>

        <Swiper
          className="md:hidden mt-4"
          slidesPerView={4}
          breakpoints={{
            450: {
              slidesPerView: 5,
            },
            600: {
              slidesPerView: 7,
            },
          }}
        >
          {simpleIntegrations.map((integration, index) => (
            <SwiperSlide key={index}>
              <SimpleCard integration={integration} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-16">
          <Button
            text="Voir tous les outils"
            theme="white"
            url="/"
            size="py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default IntegrationPresentation;
