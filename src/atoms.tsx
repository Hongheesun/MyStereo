import { atom, selector } from "recoil";
interface ICategory {
  [key: string]: string[];
}

export const categoriesState = atom<ICategory>({
  key: "categories",
  default: {
    categories: ["Jazz", "Piano", "Fire", "Rain", "Lo-Fi", "Classic"],
    play: [],
  },
});
