import React from "react";

const ProfilePage = () => {
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
              My Profile
            </h1>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-[#F5F8FD] flex flex-col items-center py-10">
        {/* Profile Header */}
        <div className="w-full max-w-7xl p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="mb-4">
              <img
              src="/home/photo.png"
                 alt="User Avatar"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Alliy Virgo</h1>
              <p className="text-gray-500">alliyvirgo123@gmail.com</p>
            </div>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Save
          </button>
        </div>

        {/* Account Details */}
        <div className="w-full max-w-7xl font-roboto mt-6 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Account Details</h2>
          </div>
          <div className="mt-6 space-y-4">
            {/* Detail Rows */}
            {[
              { label: "Full Name", value: "Alliy Virgo" },
              { label: "Mobile Number", value: "+447xxx038471" },
              { label: "Email Address", value: "alliyvirgo123@gmail.com" },
              { label: "Gender", value: "Female" },
              { label: "Country", value: "Los Angeles" },
            ].map((detail, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border"
              >
                <div>
                  <p className="text-sm text-gray-500">{detail.label}</p>
                  <p className="text-base font-medium">{detail.value}</p>
                </div>
                <button className="text-pink-500 hover:text-pink-600 flex items-center">
                  <i class="fa-solid fa-pen-to-square"></i>
                  <span className="ml-2 text-sm">Edit</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white h-4 pb-4"></div>

    </>
  );
};

export default ProfilePage;
