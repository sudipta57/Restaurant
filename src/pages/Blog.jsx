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
      <div className="bg-[#F5F8FD] min-h-screen py-8 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ]">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden items-center justify-center flex flex-col"
            >
              <img src={item.image} alt={item.title} className="bg-white" />
              <div className="p-4">
                <p className="text-sm text-[#053C3E] font-medium">
                  NEWS • {item.date}
                </p>
                <h3 className="text-lg font-semibold text-[#053C3E] mt-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
