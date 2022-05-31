import { v4 as uuid } from "uuid";
import product1 from "../../assets/shoes-final.jpg"
import product2 from "../../assets/product2.jpg"
import product3 from "../../assets/product3.jpg"
import product4 from "../../assets/product4.jpg"
import product5 from "../../assets/product5.jpg"
import product6 from "../../assets/product6.jpg"
import product7 from "../../assets/product7.jpg"
import product8 from "../../assets/product8.jpg"
import product9 from "../../assets/product9.jpg"
import product10 from "../../assets/product10.jpg"
import product11 from "../../assets/product11.jpg"
import product12 from "../../assets/product12.jpg"
import product13 from "../../assets/product13.jpg"
import product14 from "../../assets/product14.jpg"
import product15 from "../../assets/product15.jpg"
import product16 from "../../assets/product16.jpg"
import product17 from "../../assets/product17.jpg"
import product18 from "../../assets/product18.jpg"
import product19 from "../../assets/product19.jpg"
import product20 from "../../assets/product20.jpg"
import product21 from "../../assets/product21.jpg"
import product22 from "../../assets/product22.jpg"
import product23 from "../../assets/product23.jpg"
import product24 from "../../assets/product24.jpg"
import product25 from "../../assets/product25.jpg"


export const products = [
  {
    _id: uuid(),
    imgUrl: product1,
    description: "Mens Feather Weight White Orange Sneakers",
    isTrending: false,
    isFavourite: false,
    title: "Nike",
    productCategory: "Men Sneakers",
    newPrice: 1750,
    oldPrice: 2499,
    discount: 67,
    outOfStock: false,
    isFast: true,
    itemCategory: "men",
    itemRating: 4.8
  },
  {
    _id: uuid(),
    imgUrl: product2,
    isTrending: true,
    description: "Womens Light Weight Black Addidas Running Shoes",
    isFavourite: false,
    title: "Adidas",
    productCategory: "Women Shoes",
    newPrice: 750,
    oldPrice: 1499,
    discount: 75,
    outOfStock: true,
    isFast: true,
    itemCategory: "women",
    itemRating: 3.9
  },
  {
    _id: uuid(),
    imgUrl: product3,
    isTrending: false,
    description: "Boys Black Sandals comfortable and durable",
    isFavourite: false,
    title: "Bata",
    productCategory: "Boys Sandals",
    newPrice: 2750,
    oldPrice: 3499,
    discount: 46,
    outOfStock: false,
    isFast: false,
    itemCategory: "boys",
    itemRating: 2.9
  },
  {
    _id: uuid(),
    imgUrl: product4,
    isTrending: true,
    description: "Womens Light Weight Pink Running Shoes",
    isFavourite: false,
    title: "Sparx",
    productCategory: "Women Running Shoes - Premium",
    newPrice: 2554,
    oldPrice: 3499,
    discount: 27,
    outOfStock: false,
    isFast: true,
    itemCategory: "women",
    itemRating: 1.1
  },
  {
    _id: uuid(),
    imgUrl: product5,
    isTrending: false,
    description: "Premium Category Shoes for Girls",
    isFavourite: false,
    title: "Nike",
    productCategory: "Girls Shoes - Premium",
    newPrice: 3750,
    oldPrice: 4499,
    discount: 21,
    outOfStock: true,
    isFast: false,
    itemCategory: "girls",
    itemRating: 1.8
  },
  {
    _id: uuid(),
    imgUrl: product6,
    isTrending: true,
    description: "Boys Printed All Star Converse.",
    isFavourite: false,
    title: "All Star",
    productCategory: "Boys Converse",
    newPrice: 1750,
    oldPrice: 2499,
    discount: 27,
    outOfStock: false,
    isFast: true,
    itemCategory: "boys",
    itemRating: 2.5
  },
  {
    _id: uuid(),
    imgUrl: product7,
    isTrending: false,
    description: "Addidas Gym Shoes for Men Comfortable and Durable",
    isFavourite: false,
    title: "Addidas Collection",
    productCategory: "Addidas Vintage for Men",
    newPrice: 3750,
    oldPrice: 4499,
    discount: 90,
    outOfStock: false,
    isFast: false,
    itemCategory: "men",
    itemRating: 3.6
  },
  {
    _id: uuid(),
    imgUrl: product8,
    isTrending: false,
    description: "Nike Running Shoes for Girls Comfortable and Light Weight",
    isFavourite: false,
    title: "Nike",
    productCategory: "Girls Running Shoes",
    newPrice: 2750,
    oldPrice: 3499,
    discount: 44,
    outOfStock: true,
    isFast: true,
    itemCategory: "girls",
    itemRating: 4.2
  },
  {
    _id: uuid(),
    imgUrl: product9,
    isTrending: true,
    description: "Puma Funky Sneakers for Women Black and Gold",
    isFavourite: false,
    title: "Puma",
    productCategory: "Women Running Shoes",
    newPrice: 3750,
    oldPrice: 4499,
    discount: 39,
    outOfStock: false,
    isFast: false,
    itemCategory: "women",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product10,
    isTrending: true,
    isFavourite: false,
    title: "Nike Collection",
    productCategory: "Men Running Shoes",
    newPrice: 1644,
    oldPrice: 3499,
    discount: 53,
    outOfStock: false,
    isFast: false,
    itemCategory: "men",
    itemRating: 4.7
  },
  {
    _id: uuid(),
    imgUrl: product11,
    isTrending: true,
    isFavourite: false,
    title: "Nike Sneaker Collection",
    productCategory: "Women Sneakers",
    newPrice: 1674,
    oldPrice: 2499,
    discount: 33,
    outOfStock: false,
    isFast: false,
    itemCategory: "women",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product12,
    isTrending: true,
    isFavourite: false,
    title: "Bata Collection",
    productCategory: "Women Heels",
    newPrice: 899,
    oldPrice: 4499,
    discount: 80,
    outOfStock: false,
    isFast: false,
    itemCategory: "women",
    itemRating: 4.0
  },
  {
    _id: uuid(),
    imgUrl: product13,
    isTrending: true,
    isFavourite: false,
    title: "K-SWiss",
    productCategory: "Men Sneakers",
    newPrice: 3159,
    oldPrice: 3999,
    discount: 21,
    outOfStock: false,
    isFast: true,
    itemCategory: "men",
    itemRating: 4.9
  },
  {
    _id: uuid(),
    imgUrl: product14,
    isTrending: true,
    isFavourite: false,
    title: "The Wedding Collection",
    productCategory: "Women Heels",
    newPrice: 494,
    oldPrice: 1499,
    discount: 67,
    outOfStock: false,
    isFast: false,
    itemCategory: "women",
    itemRating: 4.5
  },
  // from here
  {
    _id: uuid(),
    imgUrl: product15,
    isTrending: true,
    isFavourite: false,
    title: "NX-90 Collection",
    productCategory: "Men Sneakers",
    newPrice: 3600,
    oldPrice: 4499,
    discount: 20,
    outOfStock: false,
    isFast: true,
    itemCategory: "men",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product16,
    isTrending: true,
    isFavourite: false,
    title: "Eeneral",
    productCategory: "Boys Boots",
    newPrice: 899,
    oldPrice: 4499,
    discount: 80,
    outOfStock: false,
    isFast: false,
    itemCategory: "boys",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product17,
    isTrending: true,
    isFavourite: false,
    title: "The Girls Store",
    productCategory: "Girls Shoes",
    newPrice: 3600,
    oldPrice: 4499,
    discount: 20,
    outOfStock: false,
    isFast: false,
    itemCategory: "girls",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product18,
    isTrending: true,
    isFavourite: false,
    title: "Bata Collection",
    productCategory: "Girls Winter Shoes",
    newPrice: 494,
    oldPrice: 1499,
    discount: 67,
    outOfStock: false,
    isFast: false,
    itemCategory: "girls",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product19,
    isTrending: true,
    isFavourite: false,
    title: "Bata Collection",
    productCategory: "Girls Shoes",
    newPrice: 3159,
    oldPrice: 3999,
    discount: 21,
    outOfStock: false,
    isFast: false,
    itemCategory: "girls",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product20,
    isTrending: true,
    isFavourite: false,
    title: "The Boys Store",
    productCategory: "Boys Shoes",
    newPrice: 494,
    oldPrice: 1499,
    discount: 67,
    outOfStock: false,
    isFast: false,
    itemCategory: "boys",
    itemRating: 4.9
  },
  {
    _id: uuid(),
    imgUrl: product21,
    isTrending: true,
    isFavourite: false,
    title: "Bata Collection",
    productCategory: "Girls Shoes",
    newPrice: 494,
    oldPrice: 1499,
    discount: 67,
    outOfStock: false,
    isFast: false,
    itemCategory: "girls",
    itemRating: 4.5
  },
  {
    _id: uuid(),
    imgUrl: product22,
    isTrending: true,
    isFavourite: false,
    title: "The Boys Store",
    productCategory: "Boys Shoes",
    newPrice: 3159,
    oldPrice: 3999,
    discount: 21,
    outOfStock: false,
    isFast: true,
    itemCategory: "boys",
    itemRating: 3.0
  },
  {
    _id: uuid(),
    imgUrl: product23,
    isTrending: true,
    isFavourite: false,
    title: "Addidas Collection",
    productCategory: "Mens Running Shoes",
    newPrice: 494,
    oldPrice: 1499,
    discount: 67,
    outOfStock: false,
    isFast: false,
    itemCategory: "men",
    itemRating: 2.5
  },
  {
    _id: uuid(),
    imgUrl: product24,
    isTrending: true,
    isFavourite: false,
    title: "The Wild Collection",
    productCategory: "Women Heels",
    newPrice: 750,
    oldPrice: 1499,
    discount: 50,
    outOfStock: true,
    isFast: false,
    itemCategory: "women",
    itemRating: 3.9
  },
  {
    _id: uuid(),
    imgUrl: product25,
    isTrending: true,
    isFavourite: false,
    title: "Nike Collection",
    productCategory: "Men Sneakers",
    newPrice: 750,
    oldPrice: 2499,
    discount: 70,
    outOfStock: true,
    isFast: false,
    itemCategory: "men",
    itemRating: 3.5
  }
  
];
