import { productPresentationType } from "../../types/productPresentationType";
import ProductCard from "./ProductCard";
import productPresentationData from "./productPresentationData.json";

const ProductPresentation = () => {
  const productsJson: productPresentationType = productPresentationData;
  const { products } = productsJson;
  return (
    <>
      <h2 className="mx-auto mb-16 text-center text-4xl font-bold text-secondary-500 max-w-xl">
        Une mise en place rapide pour une téléphonie cloud sur mesure
      </h2>

      <div className="md:grid md:gap-x-6 md:gap-y-14 md:row-grap md:grid-cols-2 md:max-w-5xl md:mx-auto flex flex-col gap-10 py-3">
        {products.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductPresentation;
