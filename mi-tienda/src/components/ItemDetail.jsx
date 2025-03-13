import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${product.name}`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;