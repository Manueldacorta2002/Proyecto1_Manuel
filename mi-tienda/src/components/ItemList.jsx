import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;