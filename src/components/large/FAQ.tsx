import React from "react";
import FAQContainer from "./FAQ.Container";
import Conatainer from "../layout/Conatainer";

interface Items {
  title: string;
  content: string;
}

const FAQ = ({ data }: { data: Items[] }) => {
  return (
    <section className="h-auto py-20 md:min-h-[100vh]  lg:py-0 lg:min-h-[100vh]  xl:py-16 3k:max-h-[800px] flex items-center bg-white casesSection-landscape">
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
