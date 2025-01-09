import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="flex justify-between  px-20 py-5 text-teal-800">
      <ul className="flex gap-20 cursor-pointer">
        <li className="hover:border-b border-teal-600 text-teal-600">
          <Link to="home" smooth>
            Home
          </Link>
        </li>
        <li className="hover:border-b border-teal-600 text-teal-600">
          <Link to="about">About</Link>
        </li>
        <li className="hover:border-b border-teal-600 text-teal-600">
          <Link to="products">Products</Link>
        </li>
        <li className="hover:border-b border-teal-600 text-teal-600">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
