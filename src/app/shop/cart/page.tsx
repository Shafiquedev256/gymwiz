"use client";
import HeaderSection from "@/app/components/header";
import { useEffect, useState } from "react";
import { ProductCardPropsEL } from "../page";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  id: string;
};

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState<ProductCardPropsEL[] | []>([]);

  useEffect(() => {
    const cartStore = localStorage.getItem("cart");
    if (cartStore) {
      setCartItems(JSON.parse(cartStore));
    }
  }, []);

  const handleWhatsAppRedirect = () => {
    const products = cartItems?.map(
      (item: ProductCardPropsEL) => ` ${item.name} - $ ${item.price} `
    );
    const phoneNumber = "+256705746131"; // Replace with your WhatsApp number
    const message = `Hello i'm checking out this \n \n${JSON.stringify(products)}\n No. ${cartItems.length}  total = $ ${totalPrice}`; // Pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
  };

  useEffect(() => {
    let count = 0;
    if (cartItems) {
      cartItems.map((element: ProductCardPropsEL) => {
        count += element.price * element.quantity;
      });
      setTotalPrice(Math.ceil(count * 100) / 100);
    }
  }, [cartItems]);
  return (
    <>
      <HeaderSection />
      <div className='w-[100%] overflow-hidden'>
        {cartItems && cartItems.length > 0 ? (
          <section className='w-screen font-body min-h-screen bg-gray-100 pb-32 md:flex md:flex-row-reverse '>
            <div className='md:w-2/5 md:bg-white md:rounded md:p-2 md:h-fit md:my-4 md:mx-2 md:items-center'>
              <div className='font-bold text-sm text-gray-400 p-2'>
                CART SUMMARY
              </div>
              <div className='flex flex-row w-[100%] items-center justify-between p-2 bg-gray-100 '>
                <div className='font-bold text-sm  '>subtotal</div>
                <div className='font-bold '>Ugs {totalPrice}</div>
              </div>
              <div className='font-bold text-sm text-gray-400 p-2'>
                CART({cartItems.length})
              </div>
              <button
                onClick={handleWhatsAppRedirect}
                className=' md:bg-red-500 md:w-[100%] md:p-3 md:m-2 md:rounded md:text-white md:font-bold hidden  md:block '
              >
                check out (Ugs {totalPrice})
              </button>
            </div>

            <section className='md:w-3/5 font-body'>
              {cartItems.map((item: ProductCardPropsEL) => (
                <div
                  key={item.name}
                  className='p-2 bg-white shadow-sm w-[95%]  my-4 mx-2 rounded'
                >
                  <div className='flex flex-row '>
                    <img src={item.image} className='w-36 md:w-44 rounded' />
                    <div className='ml-2'>
                      <div className='text-sm text-gray-700'>{item.name}</div>
                      <div className='font-bold'>Ugs {item.price}</div>
                    </div>
                  </div>

                  <div className='flex flex-row justify-between pt-1'>
                    <button
                      onClick={() => {
                        const allItem = localStorage.getItem("cart");
                        if (allItem) {
                          const newCart = JSON.parse(allItem);
                          const updated = newCart.filter(
                            (itemel: ProductCardProps) =>
                              itemel.name !== item.name
                          );
                          setCartItems(updated);
                          localStorage.setItem("cart", JSON.stringify(updated));
                        }
                      }}
                      className='btn bg-red-600 md:text-sm text-xs p-1 md:p-2 rounded-md text-white font-semibold'
                    >
                      remove
                    </button>
                    <div>
                      <span className='text-green-500'>{item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <div className='w-screen font-body flex items-center justify-center md:hidden'>
              <div className='w-screen flex items-center justify-center md:hidden'>
                <button
                  onClick={handleWhatsAppRedirect}
                  className=' bg-red-500 w-64 p-3 mt-3 rounded text-white font-bold md:hidden '
                >
                  check out
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div className='font-body'>OOPS! your cart is empty</div>
        )}
      </div>
    </>
  );
};

export default Cart;
