import React from "react";
import FAQContainer from "./FAQ.Container";
import Conatainer from "../layout/Conatainer";

interface Items {
  title: string;
  content: string;
}

const FAQ = ({ data }: { data: Items[] }) => {
  return (
    <section className="h-auto py-20  lg:py-20  xl:py-24  flex items-center bg-white">
      <Conatainer full={false}>
        <h2 className="session-title-text !text-black font-optima">
          Frequently Ask Questions.
        </h2>

        <FAQContainer data={data} className="" />
      </Conatainer>
    </section>
  );
};

export default FAQ;
