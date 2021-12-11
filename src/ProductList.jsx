import { useContext } from "react";
import { useState } from "react";
import { car } from "./data";

import Button from "./Button";
import Product from "./Product";

const ProductList = ({ allProducts }) => {
  const [index, setIndex] = useState(0);
  const { item, changeCarItem } = useContext(car);

  const beforeButtonClick = () => {
    if (index === 0) {
      setIndex(allProducts.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const afterButtonClick = () => {
    if (index === allProducts.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <h2>Lista de productos, utiliza los botones para recorrer la tienda</h2>
      <Product item={allProducts[index]} />
      <div>
        <Button text="Anterior" click={beforeButtonClick} />
        <Button text="Siguiente" click={afterButtonClick} />
        {/*la siguiente linea rederiza el boton, solo si el item no esta en el carro*/}
        {!allProducts[index].isOnCar && (
          <Button
            text="Agregar al carrito"
            click={() => changeCarItem(allProducts[index])}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
