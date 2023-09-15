import WhiteLogo from "../../../assets/images/logo-white.webp";
import { footerType } from "../../../types/footerType";
import Link from "../Link";
import RoundedLink from "../RoundedLink";
import FooterData from "./FooterData.json";
import AwsLogo from "../../../assets/icons/aws.webp";

const Footer = () => {
  const footerJson: footerType = FooterData as footerType;
  const { medias_links, internal_links, legal_menus } = footerJson;
  const medias = medias_links.filter(
    (medias_link) => medias_link.type === "media"
  );
  const stores = medias_links.filter(
    (medias_link) => medias_link.type === "store"
  );
  return (
    <footer className="bg-secondary-500 rounded-t-[64px] pt-[96px] pb-[48px] text-white">
      <div className="lg:container px-4 lg:space-y-8">
        <div className="md:flex relative space-y-4 md:space-y-0">
          <div className=" md:space-y-4">
            <img src={WhiteLogo} alt="Logo aircall blanc" className="mb-6" />
            <span className="text-2xl md:max-w-xs block">
              La solution de téléphonie d'entreprise cloud - VoIP
            </span>
            <div className="space-y-3 md:block flex items-center gap-5">
              <span>Suivez-nous</span>
              <ul className="flex gap-4">
                {medias.map((media, index) => (
                  <RoundedLink
                    key={index}
                    path={media.path}
                    url={media.url}
                    alt={media.alt}
                  />
                ))}
              </ul>
            </div>
            <div className="space-y-3 md:block flex items-center gap-5">
              <span>App mobile</span>
              <ul className="flex gap-4">
                {stores.map((store, index) => (
                  <RoundedLink
                    key={index}
                    path={store.path}
                    url={store.url}
                    alt={store.alt}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-1 gap-y-12 gap-x-4 pb-20 md:pb-0">
            {internal_links.map((i_link, index) => (
              <div
                key={index}
                className="space-y-6 md:border-none border-t border-gray-600 md:pt-0 pt-4"
              >
                <h6 className="text-xl font-bold">{i_link.title}</h6>
                <ul>
                  {i_link.links.map((link, index) => (
                    <li className="mb-2" key={index}>
                      <Link text={link.text} url={link.url} theme="white" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <img
            src={AwsLogo}
            alt="logo aws"
            className="absolute bottom-0 left-0 lg:left-auto lg:right-0 w-14"
          />
        </div>
        <div className="py-6 lg:border-t lg:border-gray-600 flex lg:flex-row flex-col lg:gap-8 gap-3">
          <p className="w-1/5 max-w-[50%] opacity-70">Copyright Aircall 2023</p>
          <div className="flex lg:flex-row flex-col gap-3 lg:gap-6">
            {legal_menus.map((menu, index) => (
              <a key={index} href={menu.url} className="hover:opacity-70">
                {menu.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
