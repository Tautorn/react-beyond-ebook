import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  // Obtém o parâmetro "id" da URL
  const { id } = useParams();

  useEffect(() => {
    const fetchClothing = async () => {
      const { product } = await getClothingById(id);   
      if (product) {
        setProduct(product);
      }
    };
    fetchClothing();
  }, [id]);

  if (!product) {
    return <p>Carregando detalhes da roupa...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preço: {product.price}</p>
    </div>
  );
};

export default ProductDetails;