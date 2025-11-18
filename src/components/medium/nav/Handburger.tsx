"use client";
import Link from "next/link";

type Props = {
  handBurger: boolean;
  ref: any;
};

function Handburger({ handBurger, ref }: Props) {
  // const [dropdown, setDropdown] = useState(false);

  // const handleDropdown = () => {
  //   setDropdown(!dropdown);
  // };
  return (
    <>
      {handBurger && (
        <div
          className="fixed top-0 left-0 h-[100vh]  max-h-[100vh] w-[35%] bg-darkblue z-50 opacity-90 border-r-2 border-pink py-7 px-5"
          ref={ref}
        >
          <nav className="h-full w-full mt-10">
            <ul className=" md:hidden flex flex-col gap-7 h-[100%]">
              <li>
                <Link href={"/"} className="link">
                  HOME
                </Link>
              </li>
              <li>
                <Link href={"/employment"} className="link">
                  STUDY ABROAD
                </Link>
              </li>
              <li>
                <Link href={"/contact-us"} className="link">
                  WORK ABROAD
                </Link>
              </li>
              {/* <li
                className="relative top-0 left-0 flex gap-3 items-center "
                onClick={() => handleDropdown()}
              >
                <p className="link">DIGITAL LITERACY</p>

                <ArrowDown
                  color="#fff"
                  className={`cursor-pointer ${dropdown && "rotate-180"}`}
                />
                <div
                  className={`absolute left-0 top-[40px] z-10 w-[200px] bg-white rounded-xl  px-4 py-5 ${
                    dropdown
                      ? "h-[200px] flex transition-all duration-500"
                      : "hidden h-[0]"
                  }`}
                ></div>
              </li> */}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Handburger;
