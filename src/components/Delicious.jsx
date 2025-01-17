import React from "react";

export default function Delicious() {
  const menuItems = {
    breakfast: [
      {
        title: "Dasi Breakfast",
        description: "Sausage, three rashers of streaky bacon, two fried eggs",
        price: "₹760.00",
      },
      {
        title: "Three Meat Skillet",
        description: "Hickory House bacon, sausage, ham, cheddar cheese",
        price: "₹760.00",
      },
      {
        title: "Breakfast Bowl",
        description:
          "Three eggs, tater tots, choice of bacon or sausage, shredded cheese",
        price: "₹760.00",
      },
    ],
    lunch: [
      {
        title: "Potato Skins",
        description: "Sour cream, bacon, cheddar cheese, olive oil",
        price: "₹760.00",
      },
      {
        title: "Apple Pie Pancakes",
        description:
          "Spices. Slather with butter and dunk them in some homemade vanilla",
        price: "₹760.00",
      },
      {
        title: "Sweet Cream Waffle",
        description: "Refrigerated. 2 Eggs ; Baking & Spices. 2 cups",
        price: "₹760.00",
      },
      {
        title: "Caesar Wrap",
        description:
          "This classic handheld with tender chicken, Parmesan cheese and chopped",
        price: "₹760.00",
      },
    ],
    dinner: [
      {
        title: "Beef Lasagna Food",
        description:
          "2 olive oil, plus a little for the dish; 750g lean beef mince; 90g pack prosciutto",
        price: "₹760.00",
      },
      {
        title: "Chicken Mayo Roll",
        description:
          "Cook the chicken in a grill pan, once the chicken is cooked place chicken",
        price: "₹760.00",
      },
      {
        title: "Mutton Curry",
        description: "Mutton Curry",
        price: "₹760.00",
      },
    ],
  };

  return (
    <div>
      <div className="text-gray-800">
        <h1 className="text-[60px] font-[700] text-center mb-10 font-oswald">
          Delicious Menus
          <span className="block mt-1 h-1 w-16 bg-yellow-500 mx-auto"></span>
        </h1>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {/* Breakfast Section */}
          <MenuSection
            title="Breakfast"
            items={menuItems.breakfast}
            isLarge={false}
          />
          {/* Lunch Section */}
          <MenuSection title="Lunch" items={menuItems.lunch} isLarge={true} />
          {/* Dinner Section */}
          <MenuSection
            title="Dinner"
            items={menuItems.dinner}
            isLarge={false}
          />
        </div>
      </div>
    </div>
  );
}
const MenuSection = ({ title, items, isLarge }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-xl p-6 w-80 ${
        isLarge ? "h-[550px]" : "h-[450px]"
      } flex flex-col`}
    >
      <h2 className="text-2xl font-bold mb-4">
        {title}
        <span className="block mt-1 h-1 w-10 bg-yellow-500"></span>
      </h2>
      <ul className="flex-grow overflow-y-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className="border-b border-gray-200 py-4 last:border-none"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-red-500 font-bold">{item.price}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
