import HeaderImage from "../assets/images/header_image.webp";
import GetFreeTryInput from "../components/GetFreeTryInput";

const Home = () => {
  return (
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
  );
};

export default Home;
