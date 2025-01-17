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
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto">
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-red-500 text-white">
                <tr>
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
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      +
                    </button>
                    <span>1</span>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      -
                    </button>
                  </td>
                  <td className="p-4 text-[#2A435D] text-[20px] font-[700] font-roboto">
                    $150
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
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      +
                    </button>
                    <span>2</span>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      -
                    </button>
                  </td>
                  <td className="p-4 text-[#2A435D] text-[20px] font-[700] font-roboto">
                    $300
                  </td>
                  <td className="p-4 text-red-500 cursor-pointer text-[20px] font-[700] font-roboto">
                    X
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Shipping and Cart Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 bg-white py-10">
            {/* Calculate Shipping */}
            <div className="bg-[#F5F8FD] p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-red-500 mb-4">
                CALCULATE SHIPPING
              </h3>
              <form className="space-y-4">
                <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option>Select Your payment gateway</option>
                  <option>Gateway 1</option>
                  <option>Gateway 2</option>
                </select>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    placeholder="CVC/Date"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Coupon Code(if you have)"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
                >
                  Apply Coupon
                </button>
              </form>
            </div>

            {/* Cart Summary */}
            <div className="bg-[#F5F8FD] p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-red-500 mb-4">
                CART SUBTOTAL
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Order Subtotal</span>
                  <span>₹125.96</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free Shipping</span>
                </div>
                <div className="flex justify-between">
                  <span>Coupon</span>
                  <span>₹28.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹506.00</span>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-red-500 text-white py-3 mt-6 rounded hover:bg-red-600"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
