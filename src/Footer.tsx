import React from "react";
import { ReactComponent as FacebookIcon } from "./images/facebook.svg";
import { ReactComponent as PinIcon } from "./images/pinterest.svg";

export default function () {
  return (
    <div className="flex justify-center bg-gray-100 py-10 ">
      <div className="flex flex-col gap-5 text-center">
        <div className="flex justify-center gap-5 ">
          <div className="bg-gray-200 px-1">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmunamii.com%2F"
              className="flex items-center gap-1"
            >
              <FacebookIcon className="w-4 h-4" /> <span>Share</span>
            </a>
          </div>
          <div>
            <a
              href="https://x.com/intent/post?url=https%3A%2F%2Fmunamii.com%2F&text=LLeg%C3%A1mos%20a%20tu%20casa!%3A&mx=2"
              className="bg-gray-200 px-1"
            >
              X share
            </a>
          </div>
          <div className="bg-gray-200 px-1">
            <a
              href="https://se.pinterest.com/pin/create/button/?description=LLeg%C3%A1mos+a+tu+casa%21&media=https%3A%2F%2Fd2j6dbq0eux0bg.cloudfront.net%2Fimages%2F16830190%2F1498589015.jpg&url=https%3A%2F%2Fmunamii.com%2F"
              className="flex items-center gap-1"
            >
              <PinIcon className="w-4 h-4 " />
              Pin
            </a>
          </div>
        </div>
        <div className="flex gap-5">
          <div>Delivery times</div>
          <div>Payment information</div>
          <div>Return policy</div>
        </div>
        <div>Munamii Cakery Report </div>
        <div>
          <p>Powered by</p>
        </div>
      </div>
    </div>
  );
}
