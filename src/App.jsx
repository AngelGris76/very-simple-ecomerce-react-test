import { car, productsToSale } from "./data.jsx";
import { useState, useContext } from "react";
import ProductList from "./ProductList";
import Car from "./Car";
import Button from "./Button";

const App = () => {
  // view en true, renderiza la lista de productos, sino el carrito
  const productsInCar = useContext(car);
  const [view, setView] = useState(true);
  const [carItem, setCarItem] = useState([]);

  const changeCarItem = (newItem) => {
    let value;
    newItem.isOnCar = true;
    value = carItem.concat(newItem);
    setCarItem(value);
  };

  // valueForProvider :objeto que concuerda con el objeto generado por useContext(car)
  const valueForProvider = { carItem, changeCarItem };

  const changeState = () => {
    setView(!view);
  };

  return (
    <>
      <car.Provider value={valueForProvider}>
        {view ? <ProductList allProducts={productsToSale} /> : <Car />}
      </car.Provider>
      <div>
        {view ? (
          <Button text="Mostrar carrito" click={changeState} />
        ) : (
          <Button text="Mostrar productos" click={changeState} />
        )}
      </div>
    </>
  );
};

export default App;
