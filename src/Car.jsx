import { useContext } from "react";
import { car } from "./data";
import Button from "./Button";

const Car = () => {
  const { carItem, setCarItem } = useContext(car);

  let elements = carItem.map((item) => <p>{item.description}</p>);
  elements;

  return (
    <>
      <h2>Carrito</h2>
      {carItem.length ? (
        <div>
          {elements} <Button text="finalizar compra" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Car;
