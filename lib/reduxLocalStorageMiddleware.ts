// import { Middleware } from "@reduxjs/toolkit";
// import { RootState } from "./store";

// export const reduxLocalStorageMiddleware: Middleware =
//   (store) => (next) => (action) => {
//     const result = next(action);
//     const state = store.getState() as RootState;
//     localStorage.setItem("cart", JSON.stringify(state.cart.items));
//     return result;
//   };

// export const loadStateFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem("cart");
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };
