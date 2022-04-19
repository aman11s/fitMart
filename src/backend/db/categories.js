import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Whey Protein",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/whey-protein/ON-Whey-Protein-5-lb.webp",
    alt: "whey-protein",
  },
  {
    _id: uuid(),
    categoryName: "Creatine",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/creatine/dymatize-creatine.webp",
    alt: "creatine",
  },
  {
    _id: uuid(),
    categoryName: "Gainer",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/gainer/mb-gainer.webp",
    alt: "gainer",
  },
  {
    _id: uuid(),
    categoryName: "Multivitamins",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/multi-vitamins/mb-multi-vit.webp",
    alt: "multivitamins",
  },
];
