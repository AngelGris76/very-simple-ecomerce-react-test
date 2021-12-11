import { createContext } from "react";

export const productsToSale = [
  { id: "a0", description: "Remera", isOnCar: false },
  { id: "a1", description: "Pantalon", isOnCar: false },
  { id: "a2", description: "Zapatilla", isOnCar: false },
  { id: "a3", description: "Pelota", isOnCar: false },
];

export const car = createContext({
  Item: [],
  setItem: () => {},
});
