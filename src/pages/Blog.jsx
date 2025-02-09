import React from "react";

const Blog = () => {
  const foodItems = [
    {
      id: 1,
      image: "/blog/img1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      date: "Jan 02, 2025",
    },
    {
      id: 2,
      image: "/blog/img2.png",

      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      date: "Jan 02, 2025",
    },
    {
      id: 3,
      image: "/blog/img3.png",

      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      date: "Jan 02, 2025",
    },
    {
      id: 4,
      image: "/blog/img4.png",

      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      date: "Jan 02, 2025",
    },
    {
      id: 5,
      image: "/blog/img1.png",

      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      date: "Jan 02, 2025",
    },
    {
      id: 6,
      image: "/blog/img1.png",

      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      date: "Jan 02, 2025",
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
            <h1 className="text-4xl lg:text-6xl font-roboto font-bold mb-4">
              Blog
            </h1>
          </div>
        </div>
      </section>
      <div className="bg-[#F5F8FD] min-h-screen py-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ]">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden bg-white items-center  font-[400] justify-center text-left flex flex-col"
            >
              <img src={item.image} alt={item.title} className="" />
              <div className="text-[16px] p-2 bg-[#F5F8FD] font-[300]">
                <p className="text-sm text-[#053C3E] font-medium">
                  NEWS • <span className="font-[300]">{item.date}</span>
                </p>
                <h3 className="text-[30px] font-[400] font-Amiri text-[#053C3E] mt-2 leading-[1.2]">
                  {item.title}
                </h3>
              </div>
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

export default Blog;
