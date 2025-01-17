import React from "react";

const ContactSection = () => {
  return (
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
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                <i className="fas fa-clock text-2xl"></i>
              </div>
            </div>
            <h3 className="text-[24px] font-semibold mb-2 text-[#053C3E]">
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
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-2xl"></i>
              </div>
            </div>
            <h3 className="text-[24px] font-semibold mb-2 text-[#053C3E]">
              ADDRESS
            </h3>
            <p className="text-[24px] font-[400] text-[#053C3E]">
              00-347 Warszawa, Polonya
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-2xl"></i>
              </div>
            </div>
            <h3 className="text-[24px] font-semibold mb-2 text-[#053C3E]">
              SKONTAKTUJ SIĘ
            </h3>
            <p className="text-[24px] font-[400] text-[#053C3E]">
              Biznes / Eventy / Przyjęcia <br />
              Telefon: +48 572 52 3111 <br />
              <span className="text-red-500">restautant@sample.in</span>
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
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
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
  );
};

export default ContactSection;
