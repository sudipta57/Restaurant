import React from "react";
import Navbar from "../components/Navbar";
import Delicious from "../components/Delicious";
import Footer from "../components/Footer";

export default function Home() {
  const services = [
    {
      icon: "/home/solution1.png", // Replace with your actual SVG/FontAwesome icon
      title: "Afternoon Tea",
      description: "Nisl quam vestibulum ac quam nec aucan ligula orci varius.",
    },
    {
      icon: "/home/solution2.png", // Replace with your actual SVG/FontAwesome icon
      title: "Takeaway & Delivery",
      description: "Nisl quam vestibulum ac quam nec aucan ligula orci varius.",
    },
    {
      icon: "/home/solution3.png", // Replace with your actual SVG/FontAwesome icon
      title: "Wine & Cocktails",
      description: "Nisl quam vestibulum ac quam nec aucan ligula orci varius.",
    },
    {
      icon: "/home/solution4.png", // Replace with your actual SVG/FontAwesome icon
      title: "Alfresco Dining",
      description: "Nisl quam vestibulum ac quam nec aucan ligula orci varius.",
    },
  ];
  return (
    <div>
      {/* banner section */}
      <section className="relative h-screen">
        <img
          src="/home/banner_bg.png"
          alt="Banner Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute container mx-auto px-6 lg:px-20 md:h-full flex flex-col sm:flex-row items-center justify-between z-10 mt-16 pt-4 md:pt-0 md:mt-0 space-y-8 md:space-y-0">
          <div className="text-white max-w-lg">
            <p className="text-lg font-medium mb-2">Starting at ₹999</p>
            <h1 className="text-4xl lg:text-6xl font-roboto font-bold mb-4">
              The best Food Collection 2024
            </h1>
            <p className="text-lg mb-6 font-roboto">
              Exclusive offer -
              <span className="text-yellow-400 font-bold">35% off</span> this
              week
            </p>
            <div className="md:mt-12 flex flex-col space-y-4">
              <a
                href="#"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md w-40 text-center"
              >
                <span>🚚</span>
                <span>Order Now</span>
              </a>
              <div className="flex items-center bg-white/90 p-1 rounded-md shadow-md w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent flex-1 px-4 py-2 outline-none text-gray-700"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center mt-8 md:mt-0">
            <img
              src="/home/discount_bg.png"
              alt="Discount Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-sm font-bold text-black">Upto</p>
              <p className="text-4xl font-extrabold text-black">35%</p>
              <p className="text-sm font-bold text-black">Discount</p>
            </div>
          </div>
        </div>
      </section>
      {/* Foodi section */}
      <section className="bg-[#F5F8FD] mt-4">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Grid layout for images and text */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/home/foodie_left.png"
                alt="Sprinkling Salt"
                className="rounded-lg w-64 h-full object-cover"
              />
            </div>

            {/* Center Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-red-500 uppercase font-bold text-sm mb-2 font-roboto text-center">
                Welcome to Foodio
              </p>
              <h2 className="text-[60px] font-bold text-gray-800 mb-4 font-oswald  text-center">
                Feel The Taste of Foods
              </h2>
              <p className="text-gray-600 mb-6  text-center">
                Nisl quam vestibulum ac quam nec odio elementum aucan ligula.
                Orci varius natoque pena tibus et maum ac quam nec odio rbine.
              </p>
              <p className="text-gray-800 font-medium mb-2  text-center">
                Monday to Friday – 11:30 TO 2:00
              </p>
              <p className="text-gray-800 font-bold text-lg  text-center">
                +44 1298 123 987
              </p>
            </div>

            {/* Right Section: Stacked Images */}
            <div className="flex flex-col items-center lg:items-end max-w[250px] py-2 space-y-8">
              {/* Top Image */}
              <div className="flex justify-center">
                <img
                  src="/home/foodie_right1.png"
                  alt="Chef at the Door"
                  className="rounded-lg w-100 h-60 object-cover"
                />
              </div>
              {/* Bottom Circular Image */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Circular Image */}
                  <img
                    src="/home/foodie_right2.png"
                    alt="Food Plate"
                    className="rounded-full w-40 h-40 object-cover border-4 border-gray-200 mr-4"
                  />
                  {/* Optional Circular Text (if needed later) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about the food */}
      <div className="mb-4 bg-white p-8">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto">
          {/* Parent Container for Two Sections */}
          <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
            {/* Left Section (Heading) */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <p className="text-red-600 font-semibold mb-2 text-sm uppercase font-roboto">
                About the Food Restaurant
              </p>
              <h1 className="text-[60px] font-bold mb-4 leading-tight">
                New Ground with Dishes to be Enjoyed
              </h1>
            </div>

            {/* Right Section (Text and Image) */}
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-4">
                Nisl quam vestibulum ac quam nec odio eleme aucan ligula. Orci
                varius nat oque pena tibus et urient monte nascete ridiculus mus
                nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan
                ligula.
              </p>
              <div className="flex items-center">
                <img
                  src="/home/about_profile.png" // Replace with actual image URL
                  alt="Willimes James"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-lg">Willimes James</p>
                  <p className="text-gray-600 text-sm">
                    Director and Chief Operations Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Restaurant Card */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/home/about1.png" // Replace with actual restaurant image
              alt="Restaurant"
              className="w-full h-full"
            />
          </div>

          {/* Cocktail Bar Card (Shifted Down and Extended Bottom) */}
          <div className="relative overflow-hidden rounded-lg sm:mt-8 sm:-mb-8">
            <img
              src="/home/about2.png" // Replace with actual cocktail bar image
              alt="Cocktail Bar"
              className="w-full h-full"
            />
          </div>

          {/* Private Dining Card */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/home/about3.png" // Replace with actual private dining image
              alt="Private Dining"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* BBQ Section */}
      <div className="bg-[#F5F8FD] max-w-[1400px] mx-auto px-4 py-8 mb-6">
        {/* Top Section with Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex flex-col items-center">
            <img
              src="/home/dessert.png" // Replace with Dessert icon image URL
              alt="Dessert"
              className="w-20 h-20"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/home/steak.png" // Replace with Steak icon image URL
              alt="Steak"
              className="w-20 h-20"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/home/coffe.png" // Replace with Coffee icon image URL
              alt="Coffee"
              className="w-20 h-20"
            />
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/home/Burger.png" // Replace with Burger icon image URL
              alt="Burger"
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Food Image */}
          <div className="relative">
            <img
              src="/home/bbq_left.png" // Replace with actual food image URL
              alt="BBQ"
              className="rounded-full mx-auto"
            />
          </div>

          {/* Food Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">BBQ</h2>
            <div className="space-y-6">
              {/* Food Item */}
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-bold text-[22px]">Sake BBQ sauce</h3>
                  <p className="text-sm text-gray-600">
                    radish, black sesame seeds, coriander
                  </p>
                </div>
                <p className="text-red-500 font-bold">₹760.00</p>
              </div>
              {/* Food Item */}
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-bold text-[22px]">BBQ baby back ribs</h3>
                  <p className="text-sm text-gray-600">
                    sticky Asian glaze, charred lime, chilli cashews
                  </p>
                </div>
                <p className="text-red-500 font-bold">₹1,354.00</p>
              </div>
              {/* Food Item */}
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-bold text-[22px]">Half smoked chicken</h3>
                  <p className="text-sm text-gray-600">
                    miso butter glaze, charred lime wedge, sake bbq
                  </p>
                </div>
                <p className="text-red-500 font-bold">₹2,877.00</p>
              </div>
              {/* Food Item */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-[22px]">
                    Dusted chicken wings
                  </h3>
                  <p className="text-sm text-gray-600">
                    tossed in Korean hot sauce, pickled radish
                  </p>
                </div>
                <p className="text-red-500 font-bold">₹3,385.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Discover Manue */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-[60px] font-bold">Discover Menu</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Steaks & BBQ Card */}
          <div className="relative text-white rounded-lg shadow-lg">
            {/* Image */}
            <img
              src="/home/discover1.png" // Replace with the actual Steaks & BBQ image URL
              alt="Steaks & BBQ"
              className="w-full h-full"
            />

            {/* Top Left Text Section */}
            <div className="absolute top-4 left-4  p-4 rounded-lg">
              <h3 className="text-[48px] font-bold font-oswald">
                Steaks & BBQ
              </h3>
              <p className="text-sm mt-2">
                canonical classics to obscure tiki drinks
              </p>
            </div>

            {/* Bottom Left Price Badge */}
            <div className="absolute bottom-[1px] left-6 z-30 transform translate-y-1/2">
              {/* Circle */}
              <div className="bg-yellow-400 text-red-600 w-20 h-20 flex flex-col items-center justify-center rounded-full font-bold text-center text-base">
                ₹4,160
                <span className="text-sm font-medium text-black">person</span>
              </div>
            </div>
          </div>

          {/* Cocktails Card */}
          <div className="relative text-white rounded-lg shadow-lg">
            {/* Image */}
            <img
              src="/home/discover2.png" // Replace with the actual Steaks & BBQ image URL
              alt="Steaks & BBQ"
              className="w-full h-full"
            />

            {/* Top Left Text Section */}
            <div className="absolute top-4 left-4  p-4 rounded-lg">
              <h3 className="text-[48px] font-bold font-oswald">Cocktails</h3>
              <p className="text-sm mt-2">
                canonical classics to obscure tiki drinks{" "}
              </p>
            </div>

            {/* Bottom Left Price Badge */}
            <div className="absolute bottom-[1px] left-6 z-30 transform translate-y-1/2">
              {/* Circle */}
              <div className="bg-yellow-400 text-red-600 w-20 h-20 flex flex-col items-center justify-center rounded-full font-bold text-center text-base">
                ₹1,110
                <span className="text-sm font-medium text-black">person</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience Section */}
      <div className="bg-[#F5F8FD] py-16 px-4 mt-4">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-red-500 font-semibold text-lg uppercase">
              About the Food Restaurant
            </h2>
            <h1 className="text-[60px] font-[500] text-gray-800 mt-4 font-oswald max-w-[800px] mx-auto">
              Perfect Place For An Exceptional Experience
            </h1>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            {/* <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532634896-26909d0d98ec"
              alt="Chef"
              className="w-full h-auto"
            />
          </div> */}

            {/* Middle Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="/home/experience1.png"
                alt="Food Delivery"
                className="w-full h-auto"
              />
            </div>

            {/* Right Section */}
            <div>
              <p className="text-[#555555] mt-4">
                Nisi quam vestibulum ac quam nec odio elementum sceisue the
                aucan ligula. Orci varius natoque pena culus mus nellenetuesque
                ha um ac quam nec odio aibulum ac quam nec odio elrbine.
              </p>
              <div className="flex items-center space-x-4 my-8">
                <div className="w-14 h-14 flex items-center justify-center  rounded-full">
                  <img src="/home/online_food.png" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-fredoka">
                    Online Food Ordering
                  </h3>
                  <p className="text-gray-600">
                    Easy food delivery from the best restaurants.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center  rounded-full">
                  <img src="/home/health_food.png" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-fredoka">
                    100% Healthy Food
                  </h3>
                  <p className="text-gray-600">
                    Eating a wide variety of nutritious healthy foods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* how we work */}
      <div className="max-w-[1800px] mx-auto">
        <img src="/home/howWeWork.png" alt="" />
      </div>
      <div className="bg-gray-50 min-h-screen flex justify-center items-center">
        <Delicious />
      </div>
      {/* solution Section */}
      <div className=" bg-gray-50 flex flex-col items-center px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-16 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="text-left md:w-1/2">
            <h2 className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Best Solutions
            </h2>
            <h1 className="text-[60px] font-bold text-gray-800 mt-2 max-w-sm font-oswald">
              We Provide Best Services
            </h1>
          </div>

          {/* Right Section */}
          <div className="text-gray-600 md:w-1/2 mt-6 md:mt-0">
            <p>
              Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci
              varius nat oque pena tibus et urient monte nascete ridiculus mus
              nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan
              ligula. Nisl quam nestibulum ac quam nec odio elementu sceisue the
              aucan ligula. Orci varius natoque pena culus mus nellentesque ha
              um ac quam nec odio aibulum ac quam nec odio elrbine.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full py-12 bg-[#F5F8FD] rounded-lg ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 py-8  rounded-lg "
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />{" "}
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* food ordering section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F5F8FD] px-6 lg:px-20 md:mt-20">
        {/* Left Side Content */}
        <div className="max-w-lg">
          <h2 className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Best App for Foods Ordering
          </h2>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mt-4 font-oswald">
            Manage Your Restaurant Anytime! Anywhere!
          </h1>
          <ul className="mt-6 text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold text-lg mr-2">●</span>
              Higher Reach - Minimal Effort
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold text-lg mr-2">●</span>
              Showcase your Brand
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold text-lg mr-2">●</span>
              Exclusive offers & discounts
            </li>
          </ul>
          <div className="mt-6 flex p-4 space-x-4">
            <a
              href="#"
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
            >
              <i className="fab fa-google-play mr-2"></i>Google Play
            </a>
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <i className="fab fa-apple mr-2"></i>App Store
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src="/home/order.png"
            alt="Food Delivery App"
            className="max-w-full mb-0"
          />
        </div>
      </div>
      {/* Packages Section */}
      <div className="bg-blue-50 py-12 px-6 mt-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-red-500 font-semibold text-lg uppercase mb-2">
            Packages
          </h2>
          <h1 className="text-[60px] font-bold font-oswald max-w-[850px] mx-auto">
            A Collection of Unique Experiences
          </h1>
        </div>

        {/* Packages Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Left Package: Valentine's Day */}
          <div className="bg-blue-50 py-12 px-6 flex justify-center items-center">
            {/* Container */}
            <div className="flex flex-wrap md:flex-nowrap ">
              {/* Left Section (Text with Circle) */}
              <div className="relative flex-shrink-0 flex items-center justify-center md:w-1/2 p-6">
                {/* Circle Background */}
                <div className="absolute w-[310px] h-[290px] rounded-full bg-white p-2">
                  <div className=" w-[290px] h-[275px] rounded-full border-4 border-yellow-400 bg-white mr-2"></div>
                </div>
                {/* Text Content */}
                <div className="relative text-left ">
                  <h3 className="text-lg w-40 font-bold mb-4">
                    Valentine's Day Private Table
                  </h3>
                  <ul className="space-y-2 text-left text-gray-600">
                    <li>• Candle Light Dinner</li>
                    <li>• Red Wine</li>
                    <li>• Romantic Music</li>
                    <li>• Quality Food</li>
                  </ul>
                </div>
              </div>

              {/* Right Section (Image) */}
              <div className="md:w-1/2 relative -ml-10 z-10">
                <img
                  src="/home/package1.png"
                  alt="Valentine's Day Dinner"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Package: Birthday Party */}
          <div className="bg-blue-50 py-12 px-6 flex justify-center items-center">
            {/* Container */}
            <div className="flex flex-wrap md:flex-nowrap ">
              {/* Left Section (Text with Circle) */}
              <div className="relative flex-shrink-0 flex items-center justify-center md:w-1/2 p-6">
                {/* Circle Background */}
                <div className="absolute w-[310px] h-[290px] rounded-full bg-white p-2">
                  <div className=" w-[290px] h-[275px] rounded-full border-4 border-yellow-400 bg-white mr-2"></div>
                </div>
                {/* Text Content */}
                <div className="relative text-left ">
                  <h3 className="text-lg w-40 font-bold mb-4">
                    Birthday Party Event Special
                  </h3>
                  <ul className="space-y-2 text-left text-gray-600">
                    <li>• Balloons for decorations</li>
                    <li>• Cake and Pastries</li>
                    <li>• Soft Drink</li>
                    <li>• Dinner and Chocolates</li>
                  </ul>
                </div>
              </div>

              {/* Right Section (Image) */}
              <div className="md:w-1/2 relative -ml-10 z-10">
                <img
                  src="/home/package2.png"
                  alt="Valentine's Day Dinner"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News Section */}
      <div className="bg-white py-12 px-6 max-w-[1300px] mx-auto mt-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-[60px] font-bold font-oswald">Recent News</h2>
          <div className="mt-2 w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Single Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Card Image */}
            <div className="relative">
              <img
                src="/home/news1.png"
                alt="News Item"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Card Content */}
            <div className="p-4">
              <h3 className="absolute mb-2 bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                April 6, 2024
              </h3>
              <br></br>
              <h3 className="text-xl font-semibold mb-2 mt-2">
                Creamy Chicken Alfredo
              </h3>
              <div className="flex items-center mt-3">
                <img
                  src="/home/about_profile.png"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <p className="ml-3 text-sm text-gray-600">Willimes Thomas</p>
              </div>
            </div>
          </div>

          {/* Duplicate the Card for Additional News */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/home/news2.png"
                alt="News Item"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="absolute mb-4 bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                April 6, 2024
              </h3>
              <br></br>
              <h3 className="text-xl font-semibold mb-2 mt-2">
                Air Fryer Salmon
              </h3>
              <div className="flex items-center mt-3">
                <img
                  src="/home/about_profile.png"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <p className="ml-3 text-sm text-gray-600">Willimes Thomas</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/home/news3.png"
                alt="News Item"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="absolute mb-2 bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                April 6, 2024
              </h3>
              <br></br>
              <h3 className="text-xl font-semibold mb-2 mt-2">
                Supporting Food Flavors
              </h3>
              <div className="flex items-center mt-3">
                <img
                  src="/home/about_profile.png"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <p className="ml-3 text-sm text-gray-600">Willimes Thomas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
