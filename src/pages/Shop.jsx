import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
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
  const foodItems2 = [
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
  ];
  const navigate = useNavigate();
  return (
    <>
      <section className="relative mt-16">
        <img
          src="/cart/bg.png"
          alt="Banner Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 container mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between z-10 mt-4 md:mt-0 space-y-8 md:space-y-0">
          <div className="text-white max-w-lg">
            <h1 className="text-2xl lg:text-6xl font-roboto font-bold md:mb-4">
              Shop
            </h1>
            <p className="md:text-[24px] md:mb-6 font-oregano font-[400] hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>
      <div className="min-h-screen py-8 px-4">
        {/* Title */}
        <h1 className="text-2xl md:text-[35px] font-bold font-roboto text-center text-[#2A435D] mb-6">
          It's the food and groceries you Love, delivered
        </h1>

        {/* Search Bar */}
        <div className="flex justify-between max-w-[450px] mx-auto space-x-2 items-center mb-6">
          <input
            type="text"
            placeholder="Search your Items"
            className="w-3/4 p-3 py-4 rounded-[20px] border-4 border-[#CC3333] focus:outline-none bg-[#F5F8FD]"
          />
          <button className="px-6 py-2 text-[30px] bg-[#CC3333] text-white font-[700] rounded-[20px] hover:bg-red-600">
            Go
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1500px] mx-auto">
          {/* Left Column */}
          <div className="col-span-2 gap-4">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-[#F5F8FD] shadow-lg border-gray-300 rounded-lg overflow-hidden px-3 my-3 cursor-pointer"
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

          {/* Right Column */}
          <div className="col-span-2">
            <div className="h-full">
              <img
                src="/shop/banner1.png"
                alt="Delicious Food Menu "
                className="w-[670px] h-[530px]"
              />
              {foodItems2.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-[#F5F8FD] shadow-lg border-gray-300 rounded-lg overflow-hidden px-3 my-3 cursor-pointer"
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
        </div>

        <div>
          <img
            src="/shop/banner2.png"
            alt="banner2"
            className="mx-auto w-[1300px] h-[412px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1500px] mx-auto mt-10">
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

export default Shop;
