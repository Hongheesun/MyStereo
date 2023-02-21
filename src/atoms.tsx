import { atom, selector } from "recoil";

export const categoriesState = atom({
  key: "categories",
  default: ["Jazz", "Piano", "Fire", "Rain", "Lo-Fi"],
});
