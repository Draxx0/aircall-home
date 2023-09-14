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

      <div className="grid gap-x-6 gap-y-14 row-grap grid-cols-2 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductPresentation;
