import { productPresentationType } from "../../types/productPresentationType";
import Link from "../common/Link";

const ProductCard = ({
  data,
}: {
  data: productPresentationType["products"][0];
}) => {
  return (
    <div className="flex flex-col justify-between text-center gap-3">
      <video className="rounded-[32px]" loop autoPlay muted>
        <source src={data.video} type="video/mp4" />
      </video>
      <h3 className="text-secondary-500 text-3xl font-semibold">
        {data.title}
      </h3>
      <p className="text-gray-400 text-lg">{data.text}</p>
      <Link
        text={data.buttonParams.text}
        url={data.buttonParams.url}
        isTargetBlank={data.buttonParams.isTargetBlank}
        theme="black"
      />
    </div>
  );
};

export default ProductCard;
