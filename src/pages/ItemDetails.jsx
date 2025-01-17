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
            <h1 className="text-2xl lg:text-6xl font-roboto font-bold mb-4">
              Belgium waffles with strawberries
            </h1>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          <div>
            {/* Text Section */}
            <div className="mb-6">
              <p className="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 text-base leading-relaxed">
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
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md flex items-center space-x-2 hover:bg-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21l6-11m5 0h-9m0 0L9 3"
                />
              </svg>
              <span>Order Now</span>
            </button>
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
              className="flex items-center justify-between bg-[#F5F8FD] border border-gray-300 rounded-lg overflow-hidden shadow-md px-3 mb-2"
            >
              <div className="p-4">
                <h3 className="text-lg text-[#2A435D] font-bold text-[20px] ">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-[#2A435D] font-bold text-[20px] mt-2">
                  From {item.price}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover flex-shrink-0"
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
              className="flex items-center justify-between bg-[#F5F8FD] border border-gray-300 rounded-lg overflow-hidden shadow-md px-3 mb-2"
            >
              <div className="p-4">
                <h3 className="text-lg text-[#2A435D] font-bold text-[20px] ">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-[#2A435D] font-bold text-[20px] mt-2">
                  From {item.price}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
