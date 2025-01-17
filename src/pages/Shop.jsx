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
            <p className="md:text-lg md:mb-6 font-roboto hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>
      <div className="min-h-screen py-8 px-4">
        {/* Title */}
        <h1 className="text-2xl md:text-[35px] font-bold font-roboto text-center text-[#2A435D] mb-6">
          It’s the food and groceries you Love, delivered
        </h1>

        {/* Search Bar */}
        <div className="flex justify-between max-w-[400px] mx-auto items-center mb-6">
          <input
            type="text"
            placeholder="Search your Items"
            className="w-3/4 p-3 rounded-lg border-4 border-[#CC3333] focus:outline-none"
          />
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
            Go
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
          {/* Left Column */}
          <div className="col-span-2 gap-4">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-[#F5F8FD] border border-gray-300 rounded-lg overflow-hidden shadow-md px-3 my-3 cursor-pointer"
                onClick={() => {
                  navigate("/item-details");
                }}
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

          {/* Right Column */}
          <div className="col-span-1">
            <div className="h-full">
              <img src="/shop/banner1.png" alt="Delicious Food Menu" />
              {foodItems2.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-[#F5F8FD] border border-gray-300 rounded-lg overflow-hidden shadow-md px-3 my-3"
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

export default Shop;
