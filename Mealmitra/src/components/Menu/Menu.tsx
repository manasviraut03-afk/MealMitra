import "./Menu.css";

import northIndian from "../../assets/north-indian.png";
import biryani from "../../assets/biryani.png";
import burger from "../../assets/burger.png";
import southIndian from "../../assets/south-indian.png";
import chinese from "../../assets/chinese.png";
import dessert from "../../assets/dessert.png";
import rolls from "../../assets/rolls.png";
import khichdi from "../../assets/khichdi.png";
import momo from "../../assets/momo.png";
import pasta from "../../assets/pasta.png";
import paratha from "../../assets/paratha.png";
import shawarma from "../../assets/shawarma.png";


/* =================================================
   MENU COMPONENT
================================================= */

type MenuProps = {
  vegMode?: boolean;
};


function Menu({
  vegMode = false,
}: MenuProps) {


  /* =================================================
     FOOD CATEGORIES
  ================================================= */

  const menuItems = [
    {
      name: "North Indian",
      image: northIndian,
      isVeg: true,
    },

    {
      name: "Biryani",
      image: biryani,
      isVeg: true,
    },

    {
      name: "Burger",
      image: burger,
      isVeg: true,
    },

    {
      name: "South Indian",
      image: southIndian,
      isVeg: true,
    },

    {
      name: "Chinese",
      image: chinese,
      isVeg: true,
    },

    {
      name: "Desserts",
      image: dessert,
      isVeg: true,
    },

    {
      name: "Rolls",
      image: rolls,
      isVeg: true,
    },

    {
      name: "Khichdi",
      image: khichdi,
      isVeg: true,
    },

    {
      name: "Momo",
      image: momo,
      isVeg: true,
    },

    {
      name: "Pasta",
      image: pasta,
      isVeg: true,
    },

    {
      name: "Paratha",
      image: paratha,
      isVeg: true,
    },

    {
      name: "Shawarma",
      image: shawarma,
      isVeg: false,
    },
  ];


  /* =================================================
     VEG MODE FILTER
  ================================================= */

  const visibleMenuItems = vegMode
    ? menuItems.filter((item) => item.isVeg)
    : menuItems;


  return (
    <section className="menu-section">


      {/* =================================================
          BEST FOOD OPTIONS
      ================================================= */}

      <div className="menu-header">

        <h2>
          {vegMode
            ? "Order our best vegetarian food"
            : "Order our best food options"}
        </h2>

      </div>


      {/* =================================================
          FOOD CATEGORY GRID
      ================================================= */}

      <div className="menu-grid">

        {visibleMenuItems.map((item, index) => (

          <div
            className="menu-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <p>
              {item.name}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}


export default Menu;