import React from "react";
import Header from "../Header";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../images/instagram.svg";
import { ReactComponent as WhatsappIcon } from "../images/whatsapp.svg";
import Footer from "../Footer";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div>
      <div className="flex justify-center items-center gap-5 my-10">
        <div className="w-1/2">
          <h2 className="text-4xl pb-5 text-center">Shipping and delivery</h2>
          <p>
            Home delivery service: Guayaquil and Samborondón with additional
            cost.
          </p>
          <p>
            Pick up location: Sector Via la Costa cdla. Urb. Puerto Azul.Request
            GPS Location.
          </p>
          <p>
            Orders must be placed 2 days in advance for greater security,
            preparation and availability.
          </p>
          <p>Contact us for more information.</p>
          <p>Tuesday to Saturday </p>
          <p>9 am to 2 pm</p>

          <div className="flex gap-8 text-blue-600 justify-center py-10">
            <div>
              <a
                href="https://www.facebook.com/munamiicupcakes"
                className="flex items-center gap-2"
              >
                <FacebookIcon className="w-6 h-6" />
                <span>Facebook</span>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/munamii.cakery/"
                className="flex items-center gap-2"
              >
                <InstagramIcon className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5930985750248"
                className="flex items-center gap-2"
              >
                <WhatsappIcon className="w-6 h-6" />
                <span>Whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
