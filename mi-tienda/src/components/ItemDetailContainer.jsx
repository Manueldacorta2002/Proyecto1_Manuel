import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      const mockProducts = [
        { id: 1, name: "Juego PS4 1", description: "Descripción del juego PS4 1" },
        { id: 2, name: "Juego PS4 2", description: "Descripción del juego PS4 2" },
        { id: 3, name: "Juego PS5 1", description: "Descripción del juego PS5 1" },
        { id: 4, name: "Juego PS5 2", description: "Descripción del juego PS5 2" },
      ];

      const selectedProduct = mockProducts.find((p) => p.id === parseInt(productId));
      setProduct(selectedProduct);
    };

    fetchProduct();
  }, [productId]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;