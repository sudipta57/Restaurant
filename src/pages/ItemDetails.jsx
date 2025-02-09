import React from "react";

const ItemDetails = () => {
  const foodItems = [
    {
      id: 1,
      name: "Chicken Supreme Pizza",
      description:
        "Topped with chicken, onion, capsicum, black olive & Green chilli",
      price: "₹150",
      image: "/shop/img1.png",
    },
    {
      id: 2,
      name: "Hamburger Burger with Beef",
      description:
        "Topped with chicken, onion, capsicum, black olive & Green chilli",
      price: "₹150",
      image: "/shop/img2.png",
    },
    {
      id: 3,
      name: "Belgium waffles with strawberries",
      description:
        "Topped with chicken, onion, capsicum, black olive & Green chilli",
      price: "₹150",
      image: "/shop/img3.png",
    },
    {
      id: 4,
      name: "Chicken skewers",
      description:
        "Topped with chicken, onion, capsicum, black olive & Green chilli",
      price: "₹150",
      image: "/shop/img4.png",
    },
    {
      id: 5,
      name: "Mutton or lamb biriyani",
      description:
        "Topped with chicken, onion, capsicum, black olive & Green chilli",
      price: "₹150",
      image: "/shop/img5.png",
    },
  ];
  return (
    <>
      <section className="relative mt-16">
        <img
          src="/cart/bg.png"
          alt="Banner Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 top-1/2 container mx-auto px-6 lg:px-20 flex flex-col sm:flex-row justify-between z-10 mt-4 md:mt-0 space-y-8 md:space-y-0">
          <div className="text-white">
            <h1 className="text-2xl lg:text-[35px] font-roboto font-bold mb-4">
              Belgium waffles with strawberries
            </h1>
          </div>
        </div>
      </section>
      <div className="bg-white min-h-screen py-10 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="grid gap-4">
            {/* Large Image */}
            <img
              src="/itemdetails/img1.png"
              alt="Large Waffle"
              className="rounded-lg shadow-md object-cover w-full"
            />
            {/* Small Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/itemdetails/img2.png"
                alt="Small Waffle 1"
                className="rounded-lg shadow-md object-cover w-full"
              />
              <img
                src="/itemdetails/img3.png"
                alt="Small Waffle 2"
                className="rounded-lg shadow-md object-cover w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-end">
            {/* Text Section */}
            <div className="mb-6">
              <p className="text-[#2A435D] text-[18px] font-[400] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="my-6">
              <p className="text-[#2A435D] text-[18px] font-[400] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Button */}
            <a
              href="#"
              className="bg-[#EF294C] text-white px-6 py-3 rounded-md w-36 text-center flex space-x-1 font-oswald justify-between md:mt-20"
            >
              <img src="/home/car-icon.png" alt="img" />
              <span>Order Now</span>
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-8 px-4">
        <h2 className="text-[#EF294C] text-[35px] font-bold font-roboto text-center">
          See more items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto mt-10">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-[#F5F8FD] shadow-lg border-gray-300 rounded-lg overflow-hidden px-3 cursor-pointer"
              onClick={() => {
                navigate("/item-details");
              }}
            >
              <div className="p-4">
                <h3 className="font-roboto text-[#2A435D] font-bold text-[20px] ">
                  {item.name}
                </h3>
                <p className="text-[18px] text-[#2A435D] font-[400] font-roboto mt-3">
                  {item.description}
                </p>
                <p className="text-[#2A435D] font-bold text-[20px] mt-2">
                  From {item.price}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-[150px] h-[150px] object-cover flex-shrink-0"
              />
            </div>
          ))}
        </div>
        <div>
          <img src="/shop/banner2.png" alt="banner2" className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto mt-10">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-[#F5F8FD] shadow-lg border-gray-300 rounded-lg overflow-hidden px-3 cursor-pointer"
              onClick={() => {
                navigate("/item-details");
              }}
            >
              <div className="p-4">
                <h3 className="font-roboto text-[#2A435D] font-bold text-[20px] ">
                  {item.name}
                </h3>
                <p className="text-[18px] text-[#2A435D] font-[400] font-roboto mt-3">
                  {item.description}
                </p>
                <p className="text-[#2A435D] font-bold text-[20px] mt-2">
                  From {item.price}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-[150px] h-[150px] object-cover flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* News Letter */}
      <div
        className="bg-cover bg-center bg-no-repeat py-12 px-2 max-w-[1500px] mx-auto"
        style={{
          backgroundImage: "url('/home/newsLetter_bg.png')", // Replace with your actual image URL
        }}
      >
        <div className="max-w-6xl mx-auto  p-8 rounded-lg  flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Left Section */}
          <div className="sm:w-1/2 text-center sm:text-left">
            <h2 className="text-[46px] text-[#212121] font-[700] mb-4 font-oswald">
              Subscribe Our Newsletter <br /> To Get More Offers
            </h2>
            <p className="text-[#5C5C5B] font-[400] font-oswald">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque.
            </p>
          </div>

          {/* Right Section */}
          <div className="sm:w-1/2">
            <form className="flex flex-col gap-4">
              {/* Email Input with Icon */}
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-4 max-w-[423px] focus-within:ring-2 focus-within:ring-yellow-500 bg-white">
                <img
                  src="/home/email.png"
                  alt="Email Icon"
                  className="w-4 h-3 text-gray-500 mr-3"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full focus:outline-none"
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="bg-[#FFC222] text-white font-bold px-6 py-2 shadow-md transition duration-300 max-w-[210px] h-[54px]"
              >
                Subscribe Now
              </button>
            </form>

            {/* Checkbox and Label */}
            <div className="flex items-center mt-4 text-sm">
              <input
                type="checkbox"
                id="agree"
                className="mr-2 accent-yellow-500 focus:ring-yellow-500"
              />
              <label htmlFor="agree" className="text-[#5C5C5B] font-oswald">
                I Agree To The{" "}
                <a href="#" className="text-black underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F8FD] h-4 my-7"></div>
      {/* Ens section */}
      <div
        className="bg-cover bg-center bg-no-repeat py-12 mt-4 mb-4 max-w-[1500px] mx-auto"
        style={{
          backgroundImage: "url('/home/insta_bg.png')", // Replace with your image URL
        }}
      >
        <div className="text-center py-8 px-6 mt-20 pt-10">
          {/* Instagram Icon */}
          <div className="flex justify-center items-center">
            <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <img src="/home/insta.png" />{" "}
              {/* FontAwesome for Instagram Icon */}
            </div>
          </div>

          {/* Title and Subtext */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-oswald">
            Follow @shawonetc3
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Join our community to inspire your desires
          </p>

          {/* Image Grid */}
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
