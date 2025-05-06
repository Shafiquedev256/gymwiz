"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FooterSection } from "../components/footer";
import HeaderSection from "../components/header";

export type ProductCardPropsEL = {
  name: string;
  image: string;
  price: number;
  setAdded: Dispatch<SetStateAction<boolean>>;
  id: number;
  quantity: number;
};

const StorePage: React.FC = () => {
  const [added, setAdded] = useState(false);
  return (
    <section className='bg-white'>
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
          Supplements and Accessories
        </h1>
        <div className='grid grid-cols-2 mx-2 mb-8 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6'>
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
    name: "GS 100% WHEY™",
    image:
      "https://content.optimumnutrition.com/i/on/on-gold-standard-100-whey-protein_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-us,en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp",
    price: 0,
    quantity: 0,
    id: 1,
  },
  {
    name: "Serious Mass",
    image:
      "https://content.optimumnutrition.com/i/on/on-serious-mass_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-us,en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp",
    price: 0,
    quantity: 0,
    id: 2,
  },
  {
    name: "GS® Pre-Workout",
    image:
      "https://content.optimumnutrition.com/i/on/on-gold-standard-pre-workout_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-us,en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp",
    price: 0,
    quantity: 0,
    id: 3,
  },
  {
    name: "OPTI-WOMEN®",
    image:
      "https://content.optimumnutrition.com/i/on/on-opti-women_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-us,en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp",
    price: 0,
    quantity: 0,
    id: 4,
  },
  {
    name: "OPTI-MEN®",
    image:
      "https://content.optimumnutrition.com/i/on/on-opti-men_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-us,en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp",
    price: 0,
    quantity: 0,
    id: 5,
  },

  {
    name: "CREATINE",
    image: "/store11.jpg",
    price: 0,
    quantity: 0,
    id: 7,
  },
  {
    name: "Vimto® Bundle",
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrx/nrx02906/g/24.jpg",
    price: 0,
    quantity: 0,
    id: 8,
  },
  {
    name: "BlueLab Whey",
    image:
      "https://www.usn.co.uk/cdn/shop/files/UK_BlueLabWhey_908g_Straw.webp?v=1743670811&width=493",
    price: 0,
    quantity: 0,
    id: 9,
  },
  {
    name: "Muscle Fuel Anabolic",
    image:
      "https://www.usn.co.uk/cdn/shop/files/Productonwhite-2kg-Ban.webp?v=1737700277&width=493",
    price: 0,
    quantity: 0,
    id: 10,
  },
  {
    name: "Diet Fuel Ultralean",
    image:
      "https://www.usn.co.uk/cdn/shop/files/Productonwhite1kgStraw.webp?v=1737973744&width=493",
    price: 0,
    quantity: 0,
    id: 11,
  },
  {
    name: "Protein shaker",
    image: "/store-asset5.png",
    price: 0,
    quantity: 0,
    id: 12,
  },
  {
    name: "Masstech Elite 6lbs",
    image: "/masstech-removebg-preview.png",
    price: 0,
    quantity: 0,
    id: 13,
  },
  {
    name: "Power Lifting Knee Wraps",
    image: "/store1.jpg",
    price: 0,
    quantity: 0,
    id: 14,
  },
  {
    name: "Weight lifting gloves. S M L",
    image: "/store2.jpg",
    price: 0,
    quantity: 0,
    id: 15,
  },
  {
    name: "THE RIPPER FAT BURNER",
    image: "/store3.jpg",
    price: 0,
    quantity: 0,
    id: 16,
  },
  {
    name: "CLA WEIGHT LOSS",
    image: "/store4.jpg",
    price: 0,
    quantity: 0,
    id: 17,
  },
  {
    name: "Vapor X5 Pre-Workout",
    image: "/store5.jpg",
    price: 0,
    quantity: 0,
    id: 18,
  },
  {
    name: "USN CREATINE",
    image: "/store6.jpg",
    price: 0,
    quantity: 0,
    id: 19,
  },
  {
    name: "CREATINE",
    image: "/store7.jpg",
    price: 0,
    quantity: 0,
    id: 20,
  },
  {
    name: "Bennie hat",
    image: "/store8.png",
    price: 0,
    quantity: 0,
    id: 21,
  },
  {
    name: "NITROTECH RIPPED (4LBS)",
    image: "/store9.jpg",
    price: 0,
    quantity: 0,
    id: 22,
  },
  {
    name: "Cap",
    image: "/store10.png",
    price: 0,
    quantity: 0,
    id: 23,
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
      <div className=' flex flex-col  justify-between md:m-3 m-2 w-[1fr] h-[100%]   text-black md:w-[250px]  md:h-[299px]  bg-white '>
        <img
          className='w-full h-4/6 mb-2 border-[#dedede] rounded-[2px] border-[2px] '
          src={image}
          alt={name + quantity}
        />
        <div className='pb-3'>
          <div className='font-bold text-lg whitespace-nowrap text-center'>
            {name}
          </div>
          <p className='text-lg font-bold text-red-500 text-center'>
            Ugs {price}
          </p>
          <div className='  flex flex-row justify-center items-center'>
            <button
              onClick={handleItems}
              className='bg-red-500 mt-2 rounded-[2px] hover:bg-red-700 text-white font-bold py-2 px-4 w-[100%]'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
