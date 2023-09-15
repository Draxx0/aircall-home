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
      <div className="container space-y-8">
        <div className="flex">
          <div className="space-y-4">
            <img src={WhiteLogo} alt="Logo aircall blanc" className="mb-6" />
            <span className="text-2xl max-w-xs block">
              La solution de téléphonie d'entreprise cloud - VoIP
            </span>
            <div className="space-y-3">
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
            <div className="space-y-3">
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
          <div className="grid grid-cols-3 flex-1 gap-y-12 relative">
            {internal_links.map((i_link, index) => (
              <div key={index} className="space-y-6">
                <h6 className="text-xl font-bold">{i_link.title}</h6>
                <ul>
                  {i_link.links.map((link, index) => (
                    <li className="mb-2">
                      <Link
                        text={link.text}
                        url={link.url}
                        theme="white"
                        key={index}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <img
              src={AwsLogo}
              alt="logo aws"
              className="absolute bottom-0 right-0 w-14"
            />
          </div>
        </div>
        <div className="py-6 border-t border-gray-600 flex gap-8">
          <p className="w-1/5 max-w-[50%] opacity-70">Copyright Aircall 2023</p>
          <div className="flex gap-6">
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
