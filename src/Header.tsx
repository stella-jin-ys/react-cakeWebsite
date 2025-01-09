import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="flex justify-between bg-teal-300 px-20 py-5 text-teal-800">
      <ul className="flex gap-20 cursor-pointer">
        <li className="hover:text-white">
          <Link to="home" smooth>
            Home
          </Link>
        </li>
        <li className="hover:text-white">
          <Link to="about">About</Link>
        </li>
        <li className="hover:text-white">
          <Link to="products">Products</Link>
        </li>
        <li className="hover:text-white">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
