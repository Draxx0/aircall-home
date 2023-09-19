import { useRef } from "react";
import { productPresentationType } from "../../types/productPresentationType";
import Link from "../common/Link";
import useAnimation from "../../hooks/useAnimation";

const ProductCard = ({
  data,
}: {
  data: productPresentationType["products"][0];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useAnimation({
    ref: containerRef,
  });
  return (
    <div
      className="flex flex-col justify-between text-center gap-3"
      ref={containerRef}
    >
      <video className="rounded-[32px]" loop autoPlay muted>
        <source src={data.video} type="video/mp4" />
      </video>
      <h3 className="text-secondary-500 text-3xl font-semibold">
        {data.title}
      </h3>
      <p className="text-secondary-500/70 text-lg">{data.text}</p>
      <Link
        text={data.buttonParams.text}
        url={data.buttonParams.url}
        isTargetBlank={data.buttonParams.isTargetBlank}
        theme="black"
        hasChevron
      />
    </div>
  );
};

export default ProductCard;
