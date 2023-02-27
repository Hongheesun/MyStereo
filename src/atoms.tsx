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

export const videoState = atom<boolean>({
  key: "video",
  default: false,
});
