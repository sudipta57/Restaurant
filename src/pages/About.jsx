import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/About.css";
import { Navigation, Pagination } from "swiper/modules";
import "../components/About.css";
const About = () => {
  const teamMembers = [
    {
      name: "Brain Adams",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
      image: "/about/team1.png",
    },
    {
      name: "Jhon Khan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
      image: "/about/team2.png",
    },
    {
      name: "Jessica Biel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
      image: "/about/team3.png",
    },
  ];
  const slides = [
    {
      title: "Birthday Party",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Wedding Party",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Corporate Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Anniversary Celebration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative">
        <img
          src="/about/bg_banner.png"
          alt="Banner Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 container mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between z-10 mt-4 md:mt-0 space-y-8 md:space-y-0">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl lg:text-6xl font-roboto font-bold md:mb-4">
              About Us
            </h1>
            <p className="text-[24px] font-[400]  mb-6 font-oregano">
              Read our Story, How we started and about the Team
            </p>
          </div>
        </div>
      </section>

      <div className=" bg-[#F5F8FD] p-5 my-5">
        <div className="p-3 md:p-8 border-4 rounded-xl border-[#ED274B] my-14 grid grid-cols-1 md:grid-cols-2 items-center max-w-[1500px] mx-auto">
          <img src="/about/img1.png" alt="img" />
          <div className="mt-10 md:mt-0">
            <h2 className="text-[#2A435D] font-epilogue text-[20px] font-bold mb-10 tracking-widest">
              Opaleye yellowtail snapper, velvet catfish, graveldiver banded
              killifish, Old World rivuline catalufa eagle ray Moorish idol.
              Herring smelt barbeled dragonfish, tommy ruff. velvet catfish.
            </h2>
            <p className="text-[#2A435D] text-[18px] font-[400] font-epilogue tracking-widest">
              Queen danio velvet catfish Sacramento blackfish, bullhead shark,
              Colorado squawfish Russian sturgeon clown triggerfish swamp-eel
              paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe
              eel armorhead catfish, moray eel silverside! Bluegill toadfish,
              orangespine unicorn fish. Hake cookie-cutter shark silver carp
              hawkfish snipe eel armorhead catfish, moray eel silverside!
              Bluegill toadfish, orangespine unicorn fish. Manta Ray Moorish
              idol Bluegill toadfish, orangespine.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1500px] mx-auto">
          <h2 className="text-[60px] font-[700] font-oswald text-center w-80 mx-auto">
            OUR STORY
          </h2>
          <span className="block mt-1 h-[10px] w-[270px] rounded-3xl bg-[#FFD40D] mx-auto md:ms-[700px]"></span>

          <div className="p-8 mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            <div>
              <p className="text-[#2A435D] text-[18px] font-[400] font-epilogue tracking-widest leading-[18px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passage.It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passage
              </p>
            </div>
            <img src="/about/img1.png" alt="img" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFDFDF]">
        <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 md:pt-12 max-w-[1500px] mx-auto">
          {/* Text Section */}
          <div className="py-8 md:py-0">
            <p className="text-[#F3274C] uppercase font-bold tracking-widest text-[18px] font-roboto">
              Tasty and Crunchy
            </p>
            <h2 className="text-black font-[500] text-[36px] mt-2 font-oswald">
              Our Chef
            </h2>
            <p className="text-[#2A435D] max-w-2xl font-roboto text-[18px] font-[400] mt-4 leading-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
              commodo condor consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ullam.
            </p>
            <button className="mt-6 md:ms-[370px] bg-[#F3274C] text-white font-semibold py-2 px-6 rounded hover:bg-red-700 uppercase font-oswald text-[14px]">
              View Our All Menu
            </button>
          </div>
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src="/about/chef.png"
              alt="Chef"
              // className="h-auto max-w-sm"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F5F8FD] mt-2 py-12">
        <div className="text-center mb-8">
          <h2 className="text-[60px] font-bold font-oswald">SPECIAL SERVICE</h2>
          <div className="w-80 h-2 bg-[#FFD40D] mx-auto mt-1 md:mr-[500px] rounded-lg"></div>
          <p className="text-[#F3274C] mt-7 text-[18px] font-[700]">
            WHAT SPECIAL SERVICES WE ARE OFFERING NOW
          </p>
        </div>
        <div className="max-w-[1500px] mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                // Add a custom class `custom-bullet` to style the dots
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 }, // Mobile: 1 slide at a time
              1024: { slidesPerView: 2 }, // Desktop: 2 slides at a time
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 text-center">
                  <h3 className="text-[32px] font-bold text-red-500 mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-[#555555] text-[16px] font-[400]">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="bg-white py-12 px-6 md:px-12 lg:px-20">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-[60px] font-bold text-black uppercase">
            Our Team
          </h2>
          <div className="w-80 h-2 bg-[#FFD40D] mx-auto mt-1 md:mr-[500px] rounded-lg"></div>
          <p className="text-[#F3274C] uppercase text-[18px] mt-3 font-bold tracking-widest font-roboto">
            The hardworking team behind the restaurant
          </p>
        </div>
        {/* Team Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-blue-50 rounded-full border-2 border-red-500 p-6 w-72 h-72 md:w-96 md:h-96 flex flex-col text-center relative items-end justify-end">
                {/* Member Image */}
                <div className="w-20 h-20 md:w-[217px] md:h-[217px] rounded-full overflow-hidden mb-4 absolute top-[-20px] right-[-10px] md:top-[-60px] md:right-[-30px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Member Details */}
                <div className="p-3">
                  <h3 className="text-[25px] font-bold text-black group-hover:text-[#F3274C] transition duration-500">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-[18px] font-[400] mt-2 group-hover:text-[#F3274C] transition duration-500">
                    {member.description}
                  </p>
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex justify-center items-center gap-6 mt-10">
                <a href="#" className="text-red-500 text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-red-500">
                  <img
                    src="/about/facebook.png"
                    alt="img"
                    className="w-[20px]"
                  />
                </a>
                <a href="#" className="text-red-500 text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-red-500 text-xl">
                  <i className="fab fa-linkedin-in"></i>
                </a>
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
    </div>
  );
};

export default About;
