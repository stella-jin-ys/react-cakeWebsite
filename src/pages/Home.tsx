import React from "react";
import Header from "../Header";
import logo from "../images/logo.png";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex h-full justify-between">
        <div className="w-2/3 h-full">
          <img
            src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center font-semibold w-1/3">
          <img src={logo} alt="logo" className="w-20 h-20 object-cover" />
          <h1>We come to your house</h1>
          <button
            onClick={() => {
              window.location.hash = "products";
            }}
            className="bg-teal-500 px-8 py-3 rounded-md text-white font-semibold"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
