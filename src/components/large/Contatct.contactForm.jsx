import React from "react";
import bgImg from "../../assets/images/contact-bg.png";
import ContactForm from "../medium/Form/ContactForm";
import Conatainer from "../layout/Conatainer";
import ContactInfo from "../medium/Contact.Info";

import Image from "next/image";
import { Phone, Send, Location } from "@/constant/icons";

function ContactContactForm() {
  return (
    <section
      className="h-auto py-24 bg-[#F2F2F2]  flex items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={true}>
        <div className="w-full py-10 ">
          <div className="lg:grid grid-cols-2 grid-rows-1 gap-5">
            <div className="flex flex-col lg:col-span-1 justify-center">
              <p className="!text-darkblue medium-title font-extrabold">
                We're here to answer any questions you have
              </p>
              <p className="text !font-normal !text-darkblue mt-5">
                Feel free to follow us on social media
              </p>
            </div>

            {/* Form Section */}
            <div className="mt-10  lg:mt-0 lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
}

export default ContactContactForm;
