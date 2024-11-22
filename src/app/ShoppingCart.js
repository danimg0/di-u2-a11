import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Queso",
    count: 5,
  },
  {
    id: 2,
    name: "Espaguetis",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    //Uso el set del estado para poner un array de productos
    //Cuando el id del producto individual sea igual al id que yo le paso, retorno el producto con el contador añadido
    //Si no, retorno el producto normal 
    //Cada retorno es lo que voy añadiendo al map
    setProducts(products.map(p => {
      if (p.id === productId) {
        return {...p, count: p.count + 1}
      } else {
        //Si no voy a modificar el objeto, no hace falta que le ponga los 3 puntos.
        return p
      }
    }))
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
