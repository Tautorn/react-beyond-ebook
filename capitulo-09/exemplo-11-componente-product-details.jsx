import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  // Obtém os dados carregados pelo loader
  const product = useLoaderData();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preço: {product.price}</p>
    </div>
  );
};

export default ProductDetails;