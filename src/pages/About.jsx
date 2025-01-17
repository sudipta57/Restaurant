import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const About = () => {
  const teamMembers = [
    {
      name: "Brain Adams",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
      image:
        "https://s3-alpha-sig.figma.com/img/c3c4/535f/3e85261a87acc706245494acf011466f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBCrlPKcWyLnqV6NDtwUwEEabmQAcetneFrM3Pa2Wu-qIkJYrIix~hOvtTiCuJu1b9IhfUUMile5wVr~AHECEAursoMC9L86MWi3diiToWX3zYT5phrFrevh0L2jbESB7mxpm0m9Id6HTcBGzWO1KnRtz7AStxuFqXvXZQejvHdoJXfx1Q4aZRbCe6U~0uw7e2g2Buhr8GR2-nGcrGwpO9zOu1aXVhsjEB8cBqtkmjxClHLGHYZXeNUi92pcQ0VLUGfv~ZQz7kB8aoqDt82NP2UBffTcDKVyvxNIp66d4Hn~fQZ4sDxiXcKcuZQKKMQSdFjPhT4Z0tBsHQNv3YDrVw__",
    },
    {
      name: "Jhon Khan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
      image:
        "https://s3-alpha-sig.figma.com/img/c3c4/535f/3e85261a87acc706245494acf011466f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBCrlPKcWyLnqV6NDtwUwEEabmQAcetneFrM3Pa2Wu-qIkJYrIix~hOvtTiCuJu1b9IhfUUMile5wVr~AHECEAursoMC9L86MWi3diiToWX3zYT5phrFrevh0L2jbESB7mxpm0m9Id6HTcBGzWO1KnRtz7AStxuFqXvXZQejvHdoJXfx1Q4aZRbCe6U~0uw7e2g2Buhr8GR2-nGcrGwpO9zOu1aXVhsjEB8cBqtkmjxClHLGHYZXeNUi92pcQ0VLUGfv~ZQz7kB8aoqDt82NP2UBffTcDKVyvxNIp66d4Hn~fQZ4sDxiXcKcuZQKKMQSdFjPhT4Z0tBsHQNv3YDrVw__",
    },
    {
      name: "Jessica Biel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
      image:
        "https://s3-alpha-sig.figma.com/img/c3c4/535f/3e85261a87acc706245494acf011466f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBCrlPKcWyLnqV6NDtwUwEEabmQAcetneFrM3Pa2Wu-qIkJYrIix~hOvtTiCuJu1b9IhfUUMile5wVr~AHECEAursoMC9L86MWi3diiToWX3zYT5phrFrevh0L2jbESB7mxpm0m9Id6HTcBGzWO1KnRtz7AStxuFqXvXZQejvHdoJXfx1Q4aZRbCe6U~0uw7e2g2Buhr8GR2-nGcrGwpO9zOu1aXVhsjEB8cBqtkmjxClHLGHYZXeNUi92pcQ0VLUGfv~ZQz7kB8aoqDt82NP2UBffTcDKVyvxNIp66d4Hn~fQZ4sDxiXcKcuZQKKMQSdFjPhT4Z0tBsHQNv3YDrVw__",
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
    <div className="bg-[#F5F8FD] mt-16 md:mt-20">
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
            <p className="text-lg mb-6 font-roboto">
              Read our Story, How we started and about the Team
            </p>
          </div>
        </div>
      </section>

      <div className="p-3 md:p-8 border-4 rounded-xl border-[#ED274B] m-10 my-14 grid grid-cols-1 md:grid-cols-2 items-center">
        <img src="/about/img1.png" alt="img" />
        <div className="mt-10 md:mt-0">
          <h2 className="text-[#2A435D] font-epilogue text-[20px] font-bold mb-10">
            Opaleye yellowtail snapper, velvet catfish, graveldiver banded
            killifish, Old World rivuline catalufa eagle ray Moorish idol.
            Herring smelt barbeled dragonfish, tommy ruff. velvet catfish.
          </h2>
          <p className="text-[#2A435D] text-[18px] font-[400]">
            Queen danio velvet catfish Sacramento blackfish, bullhead shark,
            Colorado squawfish Russian sturgeon clown triggerfish swamp-eel
            paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe
            eel armorhead catfish, moray eel silverside! Bluegill toadfish,
            orangespine unicorn fish. Hake cookie-cutter shark silver carp
            hawkfish snipe eel armorhead catfish, moray eel silverside! Bluegill
            toadfish, orangespine unicorn fish. Manta Ray Moorish idol Bluegill
            toadfish, orangespine.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <h2 className="text-[60px] font-[700] font-oswald text-center border-[#FFD40D] border-b-8 w-80 mx-auto">
          OUR STORY
        </h2>
        <div className="p-8 mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div>
            <p className="text-[#2A435D] text-[18px] font-[400]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passage.It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passage
            </p>
          </div>
          <img src="/about/img1.png" alt="img" />
        </div>
      </div>

      <div className="bg-[#FFDFDF] flex items-center justify-between px-8 md:px-16 lg:px-24 md:py-12">
        {/* Text Section */}
        <div className="max-w-lg py-8 md:py-0">
          <p className="text-[#F3274C] uppercase font-bold tracking-widest text-[18px] font-roboto">
            Tasty and Crunchy
          </p>
          <h2 className="text-black font-[600] text-[36px] mt-2 font-oswald">
            Our Chef
          </h2>
          <p className="text-[#2A435D] text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
            commodo condor consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ullam.
          </p>
          <button className="mt-6 bg-[#F3274C] text-white font-semibold py-2 px-6 rounded hover:bg-red-700">
            View Our All Menu
          </button>
        </div>
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://s3-alpha-sig.figma.com/img/b0c1/7f8b/ad34b3e723a385afe5513657da3e4ce4?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eoj4RlRVNk~G2zAvbMqiQtOkPIrSaHcZm4E8dBlGiZJzjt9Ifp43Uwk0R1CNcMlOnMhgf5eMe87hz3aDBEumhMiEDsd34M3Q7NGuQP-tnoosBeWRUBE1yixpASx6gFrk42mmCNOYmrZwOz2E9E~9mxTB8Kwa~cDSIbaOXoIxy4KU7WnIqAaUz6y905fieRsIvRSAzA3djkANjqhl1t9rSslnzzd95rfgnDfVapQXfvuZlRN5wI6sJ~HHZwcbqlCs9Ll5O4bEeS0xMt-lkUXpiTW0R0peAdRnj5HcN3riL8DGmdCby19aNGJ0sC8mWiNy5IGR22xkTN0rNkUQfSO9~w__"
            alt="Chef"
            // className="h-auto max-w-sm"
          />
        </div>
      </div>

      <div className="bg-[#F5F8FD] py-12">
        <div className="text-center mb-8">
          <h2 className="text-[60px] font-bold font-oswald">SPECIAL SERVICE</h2>
          <div className="w-80 h-2 bg-[#FFD40D] mx-auto mt-1 md:mr-[500px] rounded-lg"></div>
          <p className="text-[#F3274C] mt-7 text-[18px] font-[700]">
            WHAT SPECIAL SERVICES WE ARE OFFERING NOW
          </p>
        </div>
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            // slidesPerView={2}
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
          <h2 className="text-3xl font-bold text-black">Our Team</h2>
          <div className="w-36 h-2 bg-[#FFD40D] mx-auto mt-1 md:mr-[580px] rounded-lg"></div>
          <p className="text-[#F3274C] uppercase text-[18px] mt-3 font-bold tracking-widest">
            The hardworking team behind the restaurant
          </p>
        </div>
        {/* Team Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
          {teamMembers.map((member, index) => (
            <div>
              <div
                key={index}
                className="bg-blue-50 rounded-full border-2 border-red-500 p-6 w-72 h-72 md:w-96 md:h-96 flex flex-col  text-center relative items-end justify-end"
              >
                {/* Member Image */}
                <div className="w-20 h-20 md:w-[217px] md:h-[217px] rounded-full overflow-hidden mb-4 absolute top-[-20px] right-[-10px] md:top-[-60px] md:right-[-30px] border-4 border-[#F3274C]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Member Details */}
                <div className="p-3">
                  <h3 className="text-[25px] font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-[18px] font-[400] mt-2">
                    {member.description}
                  </p>
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex justify-center items-center gap-6 mt-10">
                <a href="#" className="text-red-500 text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-red-500 text-xl">
                  <i className="fab fa-facebook-f"></i>
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
    </div>
  );
};

export default About;
