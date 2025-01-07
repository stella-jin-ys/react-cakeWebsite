import React, { useEffect, useState } from "react";
import { CartItem } from "./Products";

type Props = {
  cartItems: CartItem[]; // Receive cartItems
  addToCart: (item: CartItem) => void; // Function to add more items to the cart
  setPayment: React.Dispatch<React.SetStateAction<boolean>>;
  handleRemove: (id: number) => void;
};

export default function Payment({
  cartItems,
  addToCart,
  setPayment,
  handleRemove,
}: Props) {
  const [total, setTotal] = useState(0);

  // Calculate the total price of all items in the cart
  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, [cartItems]);

  const handleChangeQuantity = (id: number, newQuantity: number) => {
    // Update the quantity of an item in the cart
    addToCart({
      ...cartItems.find((item) => item.id === id)!,
      quantity: newQuantity,
    });
  };

  return (
    <div className="flex gap-20 mt-10">
      <div className="flex flex-col">
        <h2 className="font-semibold">Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-10 border-b-2 py-5">
            <div className="w-20 h-20">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p>{item.title}</p>
              <div>
                <span>Amount: </span>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="border-solid border border-slate-300 rounded-md w-20 p-1"
                  onChange={(e) =>
                    handleChangeQuantity(item.id, Number(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-gray-200 rounded-md"
              >
                X
              </button>
              <p className="p-1">${item.price}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-3 py-3">
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>$6</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>${total + 6}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-semibold">Kassa</h2>
        <label htmlFor="email">
          Enter your email address to receive order status
        </label>
        <input
          type="email"
          className="border border-l-slate-400 rounded-md py-1 px-2 w-full"
        />
        <div>
          <input type="checkbox" className="mr-2" />
          <label htmlFor="checkbox">I accept terms and conditions</label>
        </div>
        <div>
          <button className="bg-black text-white w-1/2 rounded-sm py-3">
            Pay now
          </button>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold border-b-2 py-5">Next</h2>
            <div>
              <h2>Shipping</h2>
              <p className="text-slate-500">Choose the way of your shipment</p>
            </div>
            <div>
              <h2>Payment information</h2>
              <p className="text-slate-500">Choose the way of your payment</p>
            </div>
            <div>
              <h2>Order confirmation</h2>
              <p className="text-slate-500">
                Order and get confirmation to your email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
