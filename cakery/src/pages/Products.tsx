import React, { useRef, useState } from "react";
import Card from "../Card";
import cakes from "../cakes.json";
import ProductDetail from "./ProductDetail";
import Payment from "./Payment";
import { ReactComponent as CartIcon } from "../images/cart.svg";

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  hoverImage?: string;
  flavors?: Array<string>;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type Props = {};

export default function Products({}: Props) {
  const cupCakes = cakes.cupcakes;
  const weddingCakes = cakes.weddingcakes;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cake, setCake] = useState("cupCakes");
  const [selectedCard, setSelectedCard] = useState<Product | null>(null);
  const [payment, setPayment] = useState(false);
  const displayedCakes = cake === "cupCakes" ? cupCakes : weddingCakes;

  const detailRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (item: Product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleCardClick = (card: Product) => {
    setSelectedCard(card);
    setPayment(false);
    window.location.hash = `#product-${card.id}`;
  };
  const clickCart: React.MouseEventHandler<SVGSVGElement> = () => {
    setPayment(true); // When cart icon is clicked, go to the Payment view
  };
  const handleRemoveItem = (id: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-center gap-10 pt-10">
        <button
          onClick={() => {
            setCake("cupCakes");
            setSelectedCard(null);
            window.location.hash = "products";
          }}
        >
          Cupcakes
        </button>
        <button
          onClick={() => {
            setCake("weddingCakes");
            setSelectedCard(null);
            window.location.hash = "products";
          }}
        >
          Wedding cakes
        </button>
      </div>
      <div className="absolute right-10">
        <CartIcon
          className="w-16 h-16 text-teal-800 bg-gray-300 rounded-full p-3"
          onClick={clickCart}
        />
        {cartCount > 0 && (
          <span className="absolute top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartCount}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center px-5 ">
        {!selectedCard && (
          <div ref={listRef}>
            <h2 className="text-3xl py-5 w-full max-w-screen-lg">
              {cake === "cupCakes" ? "Cupcakes" : "Wedding cakes"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-screen-lg">
              {displayedCakes.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  hoverImage={
                    cake === "cupCakes" ? item.hoverImage : item.image
                  }
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </div>
          </div>
        )}
        {selectedCard && (
          <div ref={detailRef} className="w-full max-w-screen-lg py-10">
            {payment ? (
              <Payment
                cartItems={cartItems} // Pass cartItems to Payment
                addToCart={addToCart}
                setPayment={setPayment}
                handleRemove={handleRemoveItem}
              />
            ) : (
              <ProductDetail
                id={selectedCard.id}
                title={selectedCard.title}
                image={selectedCard.image}
                price={selectedCard.price}
                flavors={selectedCard.flavors || []}
                setPayment={setPayment}
                addToCart={addToCart}
                cartCount={cartCount}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
