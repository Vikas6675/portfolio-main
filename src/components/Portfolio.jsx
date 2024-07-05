import React from "react";
import estate from "../assets/portfolio/estate.png";
import truckSuvidha from "../assets/portfolio/truck-suvidha.png";
import navbar from "../assets/portfolio/navbar.jpg";
import restaurantMenu from "../assets/portfolio/restaurant-menu.png";
import travel from "../assets/portfolio/travel.png";
import eCommerce from "../assets/portfolio/ecommerce.jpeg";
import zomatoWebpage from "../assets/portfolio/zomata-webpage.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: estate,
      href: "https://vikas-estate.netlify.app/"
    },
    {
      id: 2,
      src: restaurantMenu,
      href: "https://vikas-restaurant-menu.netlify.app/"
    },
    {
      id: 3,
      src: navbar,
      href: ""
    },
    {
      id: 4,
      src: travel,
      href: "https://vikas-travel.netlify.app/"
    },
    {
      id: 5,
      src: truckSuvidha,
      href: "https://vikas-truck-suvidha.netlify.app/"
    },
    {
      id: 6,
      src: eCommerce,
      href: ""
    },
    {
      id: 7,
      src: zomatoWebpage,
      href: "https://vikas-zomato-webpage.netlify.app/"
    },
    {
      id: 8,
      src: reactWeather,
      href: ""
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,href}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}>Demo </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
