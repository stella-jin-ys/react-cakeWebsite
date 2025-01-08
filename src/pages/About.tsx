import React from "react";
import Header from "../Header";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex p-10 gap-10 justify-center border-t-2 my-20 ">
      <div className="w-1/3 ">
        <h2 className="text-4xl pb-5 text-center">About</h2>
        <p className="">
          At Munamii Cakery, every cake and box of cupcakes we make has a very
          special value for us. We don't just want to bring a dessert to your
          table, but rather a unique experience for you, which will become an
          unforgettable memory. We have been in the pastry market for more than
          8 years and now we offer you a new way to buy through our website.
        </p>
      </div>
      <div className="text-center flex flex-col gap-3 w-40 h-40">
        <div>
          <img
            src="https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/16830190/1593284287541.jpg"
            alt="Isabella"
            className="rounded-full"
          />
        </div>
        <h2>Isabella Carmigniani</h2>
        <h2>Founding owner</h2>
      </div>
    </div>
  );
}
