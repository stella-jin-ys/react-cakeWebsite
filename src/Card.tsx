import { useState } from "react";

type Props = {
  image: string;
  title: string;
  price: number;
  hoverImage: string;
  onClick: () => void;
};

export default function Card({
  image,
  title,
  price,
  hoverImage,
  onClick,
}: Props) {
  const [currenImage, setCurrentImage] = useState(image);
  const onHover = () => {
    setCurrentImage(hoverImage);
  };
  const onLeave = () => {
    setCurrentImage(image);
  };
  return (
    <div
      className="border rounded-md overflow-hidden shadow-md  max-w-[300px] h-full flex flex-col "
      onClick={onClick}
    >
      {/* Image Section */}
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="h-2/3 bg-gray-100"
      >
        <img
          src={currenImage}
          alt={title}
          className="w-full h-60 rounded-lg object-cover px-5 py-10 hover:"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between items-center p-3 bg-white ">
        {/* Title and Price */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-lg ">${price}</p>
        </div>

        {/* Button */}
        <button className="border-solid border py-1 px-7 rounded-md mt-3 w-full max-w-[8rem]">
          Buy Now
        </button>
      </div>
    </div>
  );
}
