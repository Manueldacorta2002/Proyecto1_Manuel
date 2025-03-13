import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = () => {
      const mockProducts = [
        { id: 1, name: "Juego PS4 1", category: "ps4" },
        { id: 2, name: "Juego PS4 2", category: "ps4" },
        { id: 3, name: "Juego PS5 1", category: "ps5" },
        { id: 4, name: "Juego PS5 2", category: "ps5" },
      ];

      const filteredProducts = categoryId
        ? mockProducts.filter((product) => product.category === categoryId)
        : mockProducts;

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;