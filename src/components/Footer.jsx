import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#F5F8FD] ">
      {/* News Letter */}
     
      {/* <div className="bg-[#F5F8FD] h-9 my-7"></div> */}

      <footer
        className="relative bg-cover bg-center bg-no-repeat py-12 max-w-[1500px] mx-auto"
        style={{
          backgroundImage: "url('/home/footer_bg.png')", // Replace with your image URL
        }}
      >
        <div className="px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info Section */}
          <div className="bg-[#F3274C] text-white p-4 rounded-[22px] text-left md:min-w-[292px] md:min-h-[273px]">
            <div className=" text-center py-4 ">
              <img src="/home/logo.png" />
              <p className="text-left uppercase text-fugazOne mt-1">
                Food & Restaurant
              </p>
            </div>
            <p className="mt-2 text-[14px] font-[500] font-oswald">
              <strong>Tuesday - Saturday:</strong> 12:00pm - 23:00pm
            </p>
            <p className="text-[12px] font-oswald font-[500] text-white underline mt-3">
              Closed on Sunday
            </p>
            <p className="mt-10 text-[12px] font-[500] font-oswald">
              5 star rated on <strong>TripAdvisor</strong>
            </p>
          </div>

          {/* About Section */}
          <div className="md:ms-10">
            <h2 className="text-black text-[20px] font-oswald font-[500] mb-4">
              About
              <span className="block mt-0 h-1 w-14 bg-[#FFD40D]"></span>
            </h2>

            <ul className="space-y-2 text-black">
              <li className="text-[12px] font-[400] font-roboto">
                Fredoka One
              </li>
              <li className="text-[12px] font-[400] font-roboto">
                Special Dish
              </li>
              <li className="text-[12px] font-[400] font-roboto">
                Reservation
              </li>
              <li className="text-[12px] font-[400] font-roboto">Contact</li>
            </ul>
          </div>

          {/* Menu Section */}
          <div>
            <h2 className="text-black text-[20px] font-oswald font-[500] mb-4">
              Menu
              <span className="block mt-0 h-1 w-14 bg-[#FFD40D]"></span>
            </h2>
            <ul className="space-y-2 text-black">
              <li className="text-[12px] font-[400] font-roboto">Steaks</li>
              <li className="text-[12px] font-[400] font-roboto">Burgers</li>
              <li className="text-[12px] font-[400] font-roboto">Cocktails</li>
              <li className="text-[12px] font-[400] font-roboto">Bar B Q</li>
              <li className="text-[12px] font-[400] font-roboto">Desserts</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-black text-[20px] font-oswald font-[500] mb-4">
              Newsletter
              <span className="block mt-0 h-1 w-28 bg-[#FFD40D]"></span>
            </h2>
            <p className="text-[12px] font-[400] font-roboto mb-4">
              Get recent news and updates.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-[#DEDEDE] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-[#C6C6C6]"
              />
              <div className="relative w-[112px] h-[54px] border-2 border-[#F3274C] rounded-[9px]">
                <button
                  type="submit"
                  className="absolute top-[3px] right-1 w-[118px] bg-[#F3274C] text-white rounded-[9px] flex items-center justify-center h-[45px]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 mx-auto border-t-8 border-[#FFD40D] pt-4 text-center text-sm text-[#000000] max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>
            <span className="text-[#F3274C] font-[500] font-roboto">Copyright @ RETRO </span>| Developed By SECWEBXPERTS PVT. LTD.

            </p>
            <p>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
