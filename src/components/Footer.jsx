import React from "react";

export default function Footer() {
  return (
    <div>
      {/* News Letter */}
      <div
        className="bg-cover bg-center bg-no-repeat py-12 px-6"
        style={{
          backgroundImage: "url('/home/newsLetter_bg.png')", // Replace with your actual image URL
        }}
      >
        <div className="max-w-4xl mx-auto  p-8 rounded-lg  flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Left Section */}
          <div className="sm:w-1/2 text-center sm:text-left">
            <h2 className="text-[46px] font-bold mb-4 font-oswald">
              Subscribe Our Newsletter <br /> To Get More Offers
            </h2>
            <p className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque.
            </p>
          </div>

          {/* Right Section */}
          <div className="sm:w-1/2">
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition duration-300"
              >
                Subscribe Now
              </button>
            </form>
            <div className="flex items-center mt-4 text-sm">
              <input
                type="checkbox"
                id="agree"
                className="mr-2 accent-yellow-500 focus:ring-yellow-500"
              />
              <label htmlFor="agree" className="text-gray-600">
                I Agree To The{" "}
                <a href="#" className="text-yellow-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Ens section */}
      <div
        className="bg-cover bg-center bg-no-repeat py-12 mt-4 mb-4"
        style={{
          backgroundImage: "url('/home/insta_bg.png')", // Replace with your image URL
        }}
      >
        <div className="max-w-5xl mx-auto text-center py-8 px-6">
          {/* Instagram Icon */}
          <div className="flex justify-center items-center">
            <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <img src="/home/insta.png" />{" "}
              {/* FontAwesome for Instagram Icon */}
            </div>
          </div>

          {/* Title and Subtext */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Follow @shawonetc3
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Join our community to inspire your desires
          </p>

          {/* Image Grid */}
        </div>
      </div>
      <footer
        className="relative bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: "url('/home/footer_bg.png')", // Replace with your image URL
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info Section */}
          <div className="bg-red-500 text-white p-4 rounded-md text-left">
            <div className=" text-center py-4 ">
              <img src="/home/logo.png" />
              <p className="text-left uppercase">Food & Restaurant</p>
            </div>
            <p className="mt-4 text-sm">
              <strong>Tuesday - Saturday:</strong> 12:00pm - 23:00pm
            </p>
            <p className="text-sm text-gray-300">Closed on Sunday</p>
            <p className="mt-2 text-sm">
              5 star rated on <strong>TripAdvisor</strong>
            </p>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-yellow-500 text-lg font-bold mb-4">
              About
              <span className="block mt-0 h-1 w-10 bg-yellow-500"></span>
            </h2>

            <ul className="space-y-2 text-black">
              <li>Fredoka One</li>
              <li>Special Dish</li>
              <li>Reservation</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Menu Section */}
          <div>
            <h2 className="text-yellow-500 text-lg font-bold mb-4">
              Menu
              <span className="block mt-0 h-1 w-10 bg-yellow-500"></span>
            </h2>
            <ul className="space-y-2 text-black">
              <li>Steaks</li>
              <li>Burgers</li>
              <li>Cocktails</li>
              <li>Bar B Q</li>
              <li>Desserts</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-yellow-500 text-lg font-bold mb-4">
              Newsletter
              <span className="block mt-0 h-1 w-10 bg-yellow-500"></span>
            </h2>
            <p className="text-gray-300 mb-4">Get recent news and updates.</p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 max-w-7xl mx-auto border-t-4 border-yellow-300 pt-4 text-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>Copyright @ RESTRO | developed by SECWEBXPERTS PVT. LTD.</p>
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
