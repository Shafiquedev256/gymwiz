"use client";

import { useState } from "react";
import { FooterSection } from "../components/footer";
import HeaderSection from "../components/header";

export type ProductCardPropsEL = {
  name: string;
  image: string;
  price: number;
  setAdded: any;
  id: number;
  quantity: number;
};

const StorePage: React.FC = () => {
  const [added, setAdded] = useState(false);
  return (
    <section className='bg-gray-100'>
      {added && (
        <div className=' font-body fixed top-8 z-50 left-0 w-[100%] flex items-center justify-center'>
          <div className=' bg-green-600 rounded-md text-white font-semibold  p-2 my-4 text-center'>
            Item added !
          </div>
        </div>
      )}
      <HeaderSection />
      <div className=' min-h-screen'>
        <h1 className='title tracking-wide text-2xl md:text-3xl font-bold text-center my-8'>
          Supplements and Gym Equipment
        </h1>
        <div className='md:grid flex flex-col   justify-center items-center  md:grid-cols-3 lg:grid-cols-4 md:gap-6'>
          {products.map((product, index) => (
            <div key={product.id}>
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                setAdded={setAdded}
                id={product.id}
                quantity={product.quantity}
              />
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </section>
  );
};

export default StorePage;

const products = [
  {
    name: "Protein Powder",
    image: "/sup1.jpg",
    price: 29.99,
    quantity: 0,
    id: 1,
  },
  {
    name: "Dumbbells (Set of 2)",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6545/6545965_sd.jpg",
    price: 49.99,
    quantity: 0,
    id: 2,
  },
  {
    name: "Yoga Mat",
    image:
      "https://img.freepik.com/free-photo/rolled-up-yoga-mat-floor_23-2147802572.jpg?ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    price: 19.99,
    quantity: 0,
    id: 3,
  },
  {
    name: "Creatine Supplement",
    image:
      "https://img.freepik.com/free-psd/protein-powder-container-3d-illustration_1419-2944.jpg?ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    price: 24.99,
    quantity: 0,
    id: 4,
  },
];

const ProductCard: React.FC<ProductCardPropsEL> = ({
  name,
  image,
  price,
  setAdded,
  id,
  quantity,
}) => {
  const handleItems = () => {
    const oldCart = localStorage.getItem("cart");
    let newCart = [];

    if (oldCart) {
      const cart = JSON.parse(oldCart);

      let itemExists = false;

      newCart = cart.map((item: ProductCardPropsEL) => {
        if (item.name === name) {
          itemExists = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!itemExists) {
        newCart.push({ name, image, price, setAdded, id, quantity: 1 });
      }
    } else {
      newCart = [{ name, image, price, setAdded, id, quantity: 1 }];
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 3000);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <div className=' flex flex-col  m-3   text-black w-[280px]  h-[299px] rounded-md bg-white '>
        <img
          className='w-full h-[60%] rounded-t-md'
          src={image}
          alt={name + quantity}
        />
        <div className='p-3 h-[30%]'>
          <div className='font-bold text-lg mb-2'>{name}</div>
          <p className='text-gray-600'>${price.toFixed(2)}</p>
          <div className='  flex flex-row justify-center items-center'>
            <button
              onClick={handleItems}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
