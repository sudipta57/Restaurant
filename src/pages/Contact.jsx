import React from "react";

const ContactSection = () => {
  return (
    <>
    <section className="bg-blue-50 py-12">
      <section className="relative">
        <img
          src="/about/bg_banner.png"
          alt="Banner Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 container mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between z-10 mt-4 md:mt-0 space-y-8 md:space-y-0">
          <div className="text-white max-w-lg">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-roboto font-bold mb-2 mt-1 md:mt-0 md:mb-4">
              Contact Us
            </h1>
            <p className="text-sm md:text-lg md:mb-6 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-10">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12 px-6 lg:px-20">
          {/* Open Hours */}
          <div>
            <div className="flex justify-center mb-4">
              <img src="/contact1.png" alt="img" />
            </div>
            <h3 className="text-[24px] font-semibold mt-10 mb-2 text-[#053C3E]">
              OPEN HOURS
            </h3>
            <p className="text-[24px] font-[400] text-[#053C3E]">
              Mon-Fri: 9 AM - 7 PM <br />
              Saturday: 9 AM - 5 PM <br />
              Sunday: Closed
            </p>
          </div>

          {/* Address */}
          <div>
            <div className="flex justify-center mb-4">
              <img src="/contact2.png" alt="img" />
            </div>
            <h3 className="text-[24px] font-semibold mt-10 mb-2 text-[#053C3E]">
              ADDRESS
            </h3>
            <p className="text-[24px] font-[400] text-[#053C3E]">
              00-347 Warszawa, Polonya
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="flex justify-center mb-4">
              <img src="/contact3.png" alt="img" />
            </div>
            <h3 className="text-[24px] font-semibold mt-10 mb-2 text-[#053C3E]">
              SKONTAKTUJ SIĘ
            </h3>
            <p className="text-[24px] font-[400] text-[#053C3E]">
              Biznes / Eventy / Przyjęcia <br />
              Telefon: +48 572 52 3111 <br />
              <span className="text-[#CC3333]">restautant@sample.in</span>
            </p>
          </div>
        </div>

        {/* Map and Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white px-6 lg:px-20 py-20">
          {/* Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.4564307119026!2d20.997024716016285!3d52.23982167976168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd6b122a2be1%3A0x60138b7ec2f95fa5!2s00-347%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sus!4v1675038740941!5m2!1sen!2sus"
              className="w-full h-full min-h-[300px] rounded-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-[40px] font-semibold mb-6 text-[#053C3E]">
              HAVE A QUESTION? <br /> GET IN TOUCH!
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border-b border-gray-300 placeholder:text-[#053C3E80] placeholder:font-[600] focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border-b border-gray-300 placeholder:text-[#053C3E80] placeholder:font-[600] focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 border-b border-gray-300 placeholder:text-[#053C3E80] placeholder:font-[600] focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 border-b border-gray-300 placeholder:text-[#053C3E80] placeholder:font-[600] focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border-b border-gray-300 placeholder:text-[#053C3E80] placeholder:font-[600] focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
              >
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
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

export default ContactSection;
