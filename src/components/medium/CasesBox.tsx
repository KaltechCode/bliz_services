import React from "react";
import Primary from "../small/Buttons/Primary";

function CasesBox({
  image,
  name,
  text,
}: {
  image: string;
  name: string;
  text: string;
}) {
  return (
    <div
      className={`relative left-0 top-0 min-h-[300px] md:w-full md:h-auto md:aspect-square xl:aspect-[20/16] shadow-md rounded-lg bg-no-repeat bg-cover bg-center group overflow-hidden transition-all duration-1000`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute left-0 top-0 h-full w-full group-hover:translate-y-0  group-hover:bg-gradient-to-t from-slate-900/90 transition-all duration-[2s] via-slate-900/80 to-slate-700/60 bg-opacity-10 ">
        <div className="absolute bottom-16 left-1/2 w-[90%] -translate-x-1/2 px-5 pt-3 z-10 overflow-y-scroll no-scrollbar opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[2s] ease-out">
          <p className="text-white h-[200px]">{text}</p>
        </div>
        <h2 className="absolute bottom-4 left-5 z-10  text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[.5] ease-out">
          <Primary text="Contact Us" url="/apply/study" />
        </h2>
      </div>
      <h2 className="absolute bottom-0 left-0 px-4 z-10 text-lg font-semibold text-white opacity-100 group-hover:opacity-0 w-full bg-darkblue/70 bg-opacity-10 py-2">
        {name}
      </h2>
    </div>
  );
}

export default CasesBox;
