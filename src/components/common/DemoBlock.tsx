import DemoBlocBg from "../../assets/images/demo-bloc-bg.svg";
import WhiteLogo from "../../assets/images/logo-white.webp";
import Button from "./Button";

const DemoBlock = () => {
  return (
    <div className="relative p-5 md:py-14 md:px-10">
      <img
        src={DemoBlocBg}
        alt="fond bleu du bloc de demo"
        className="absolute inset-0 h-full w-full rounded-[32px]"
      />
      <div className="relative z-10 text-center">
        <img
          src={WhiteLogo}
          alt="Logo aircall blanc"
          className="mx-auto mb-4"
        />
        <h2 className="text-white font-bold text-4xl mb-4">
          Prêt à déployer la téléphonie de votre entreprise ?
        </h2>
        <p className="text-white opacity-70 text-2xl mb-6 mt-8">
          Découvrez la solution maintenant
        </p>
        <Button text="Demander une démo" theme="white" url="/" size="py-3" />
      </div>
    </div>
  );
};

export default DemoBlock;
