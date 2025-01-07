import React, { useState } from "react";
import { CartItem } from "./Products";

type Props = {
  id: number;
  title: string;
  image: string;
  price: number;
  flavors: Array<string>;
  setPayment: React.Dispatch<React.SetStateAction<boolean>>;
  cartCount: number;
  addToCart: (item: CartItem) => void;
};

export default function CardDetail({
  id,
  title,
  image,
  price,
  flavors,
  setPayment,
  cartCount,
  addToCart,
}: Props) {
  const quantity = 1;
  const [value, setValue] = useState(1);
  const [mainImage, setMainImage] = useState(image);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue >= 1 ? newValue : 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-10 mt-10 flex-wrap shrink-1 ">
        <div className="w-96 h-96 overflow-hidden ">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-2xl">${price}</p>
          <div>
            <p className="font-semibold">
              Choose the flavor, just choose three flavors
            </p>
            <div className="flex flex-col">
              <label htmlFor="flavor">
                <input type="checkbox" name="Chocolate" className="mr-3 " />
                Chocolate filled delicacy
              </label>
              <label htmlFor="flavor">
                <input type="checkbox" name="Chocolate" className="mr-3" />
                Chocolate filled with nutella
              </label>
              <label htmlFor="flavor">
                <input type="checkbox" name="Chocolate" className="mr-3" />
                Vanilla filled with dulce de leche
              </label>
              <label htmlFor="flavor">
                <input type="checkbox" name="Chocolate" className="mr-3" />
                Vanilla filled with nutella (+$5.00)
              </label>
              <label htmlFor="flavor">
                <input type="checkbox" name="Chocolate" className="mr-3" />
                Chocolate filled delicacy
              </label>
              <label htmlFor="flavor">
                <input type="checkbox" name="Chocolate" className="mr-3" />
                Chocolate filled delicacy
              </label>
            </div>
            <div className="my-5">
              <p>If it is a gift, write a message FROM: TO:</p>
              <textarea
                name="message"
                id=""
                className="border-solid border border-slate-300 rounded-md w-60"
              />
            </div>
            <div>
              <span>Amount: </span>
              <input
                value={value}
                onChange={onChange}
                type="number"
                className="border-solid border border-slate-300 rounded-md w-20 p-2"
              />
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => addToCart({ id, title, price, image, quantity })}
                className="border-solid border border-slate-300 rounded-md p-2 my-2 w-60"
              >
                Add to cart
              </button>
              <button
                className="border-solid border border-slate-300 rounded-md p-2 w-60 bg-black text-white"
                onClick={() => setPayment(true)}
              >
                Go to payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-start shrink-1">
        <div className="flex gap-2 mt-5 ">
          <button
            className="w-20 h-20 lg:w-32 lg:h-32"
            onClick={() => setMainImage(image)}
          >
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full rounded-sm"
            />
          </button>
          {flavors.map((flavor, i) => (
            <button
              className="w-20 h-20 lg:w-32 lg:h-32"
              onClick={() => setMainImage(flavor)}
            >
              <img
                key={i}
                src={flavor}
                alt="flavor"
                className="object-cover w-full h-full rounded-sm"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
