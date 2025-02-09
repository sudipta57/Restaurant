import React from "react";

const CartPage = () => {
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
              My Cart
            </h1>
          </div>
        </div>
      </section>
      <div className="bg-white h-4 "></div>
      <div className="bg-blue-50 py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-red-500 text-white">
                <tr className="text-[25px] font-[400] font-roboto">
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Product Name</th>
                  <th className="p-4 text-left">Unit Price</th>
                  <th className="p-4 text-left">Quantity</th>
                  <th className="p-4 text-left">Total</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Product 1 */}
                <tr className="border-b-2 border-[#CC3333]">
                  <td className="p-4">
                    <img src="/cart/img1.png" alt="Product 1" />
                  </td>
                  <td className="p-4">
                    <h2 className="text-[#2A435D] text-[20px] font-[700] font-roboto">
                      Belgium waffles with strawberries
                    </h2>
                  </td>
                  <td className="p-4 text-[#2A435D] text-[20px] font-[700] font-roboto">
                    ₹150
                  </td>
                  <td className="p-4 flex items-center gap-2 mt-6">
                    <button className="border border-red-500 text-black px-3 rounded">
                      +
                    </button>
                    <span className="text-[#2A435D] text-[20px] font-[700] font-roboto">
                      1
                    </span>
                    <button className="border border-red-500 text-black px-3 rounded">
                      -
                    </button>
                  </td>
                  <td className="p-4 text-[#2A435D] text-[20px] font-[700] font-roboto">
                  ₹150
                  </td>
                  <td className="p-4 text-red-500 cursor-pointer text-[20px] font-[700] font-roboto">
                    X
                  </td>
                </tr>
                {/* Product 2 */}
                <tr className="border-b-2 border-[#CC3333]">
                  <td className="p-4">
                    <img src="/cart/img2.png" alt="Product 2" />
                  </td>
                  <td className="p-4">
                    <h2 className="text-[#2A435D] text-[20px] font-[700] font-roboto">
                      Chicken skewers
                    </h2>
                  </td>
                  <td className="p-4 text-[#2A435D] text-[20px] font-[700] font-roboto">
                    ₹150
                  </td>
                  <td className="p-4 flex items-center gap-2 mt-6">
                    <button className="border border-red-500 text-black px-3 rounded">
                      +
                    </button>
                    <span className="text-[#2A435D] text-[20px] font-[700] font-roboto">
                      2
                    </span>
                    <button className="border border-red-500 text-black px-3 rounded">
                      -
                    </button>
                  </td>
                  <td className="p-4 text-[#2A435D] text-[20px] font-[700] font-roboto">
                  ₹300
                  </td>
                  <td className="p-4 text-red-500 cursor-pointer text-[20px] font-[700] font-roboto">
                    X
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
        </div>
      </div>
      {/* Shipping and Cart Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 bg-white p-8">
            {/* Calculate Shipping */}
            <div className="bg-[#F5F8FD] p-6 rounded-lg shadow self-start">
              <h3 className="text-[35px] font-bold text-[#EE3A43] mb-4 font-roboto">
                CALCULATE SHIPPING
              </h3>
              <form className=" max-w-[50%]">
                <select className="mb-6 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-[#EE3A43] text-white">
                  <option>Select Your payment gateway</option>
                  <option>Gateway 1</option>
                  <option>Gateway 2</option>
                </select>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="mb-6 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-[#EE3A43] bg-transparent"
                  />
                  <input
                    type="text"
                    placeholder="CVC/Date"
                    className="mb-6 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-[#EE3A43] bg-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Coupon Code(if you have)"
                  className="mb-6 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-[#EE3A43] bg-transparent"
                />
                <button
                  type="submit"
                  className=" bg-red-500 text-white py-3 rounded-[10px] mt-20 hover:bg-red-600 w-[208px]"
                >
                  Apply Coupon
                </button>
              </form>
            </div>

            {/* Cart Summary */}
            <div className="bg-[#F5F8FD] p-6 rounded-lg shadow self-start">
              <h3 className="text-[35px] font-bold text-[#EE3A43] mb-4 font-roboto">
                CART SUBTOTAL
              </h3>
              <div className=" max-w-[60%] text-[#EE3A43] text-[18px] font-[400] font-roboto">
                <div className="flex justify-between border-b-2 border-[#EE3A43] pb-5 mb-5">
                  <span>Order Subtotal</span>
                  <span>₹125.96</span>
                </div>
                <div className="flex justify-between border-b-2 border-[#EE3A43] pb-5 mb-5">
                  <span>Shipping</span>
                  <span>Free Shipping</span>
                </div>
                <div className="flex justify-between border-b-2 border-[#EE3A43] pb-5 mb-5">
                  <span>Coupon</span>
                  <span>₹28.00</span>
                </div>
                <div className="flex justify-between font-bold border-b-2 border-[#EE3A43] pb-5 mb-5">
                  <span>Total</span>
                  <span>₹506.00</span>
                </div>

                <button
                  type="button"
                  className="w-[249px] bg-red-500 text-white py-3 mt-5 rounded hover:bg-red-600"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
            {/* News Letter */}
      <div
        className="bg-cover bg-center bg-no-repeat py-12 mt-0 px-2 max-w-[1500px] mx-auto"
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

export default CartPage;
