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

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type MenuProps = {
  onAddToCart: (item: CartItem) => void;
};

function Menu({ onAddToCart }: MenuProps) {
  // =========================
  // FOOD CATEGORIES
  // =========================

  const menuItems = [
    { name: "North Indian", image: northIndian },
    { name: "Biryani", image: biryani },
    { name: "Burger", image: burger },
    { name: "South Indian", image: southIndian },
    { name: "Chinese", image: chinese },
    { name: "Desserts", image: dessert },
    { name: "Rolls", image: rolls },
    { name: "Khichdi", image: khichdi },
    { name: "Momo", image: momo },
    { name: "Pasta", image: pasta },
    { name: "Paratha", image: paratha },
    { name: "Shawarma", image: shawarma },
  ];

  // =========================
  // POPULAR FOOD
  // =========================

  const popularFoods = [
    {
      id: 1,
      name: "Chicken Biryani",
      image: biryani,
      price: 249,
      rating: 4.6,
    },
    {
      id: 2,
      name: "Veg Burger",
      image: burger,
      price: 149,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Chinese Noodles",
      image: chinese,
      price: 199,
      rating: 4.4,
    },
    {
      id: 4,
      name: "Momos",
      image: momo,
      price: 129,
      rating: 4.7,
    },
    {
      id: 5,
      name: "Pasta",
      image: pasta,
      price: 179,
      rating: 4.5,
    },
  ];

  return (
    <section className="menu-section">

      {/* =========================
          BEST FOOD OPTIONS
      ========================= */}

      <div className="menu-header">
        <h2>Order our best food options</h2>
      </div>

      <div className="menu-grid">

        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>

            <img
              src={item.image}
              alt={item.name}
            />

            <p>{item.name}</p>

          </div>
        ))}

      </div>


      {/* =========================
          POPULAR FOOD
      ========================= */}

      <div className="popular-header">

        <h2>Popular Food on MealMitra</h2>

        <p>
          Delicious favourites picked specially for you
        </p>

      </div>


      {/* =========================
          FOOD CARDS
      ========================= */}

      <div className="food-grid">

        {popularFoods.map((food) => (

          <div className="food-card" key={food.id}>

            {/* Food Image */}

            <div className="food-image">

              <img
                src={food.image}
                alt={food.name}
              />

            </div>


            {/* Food Details */}

            <div className="food-details">

              <h3>{food.name}</h3>

              <div className="food-rating">
                ⭐ {food.rating}
              </div>


              <div className="food-bottom">

                <span className="food-price">
                  ₹{food.price}
                </span>


                {/* ADD BUTTON */}

                <button
                  className="add-cart-btn"
                  onClick={() =>
                    onAddToCart({
                      id: food.id,
                      name: food.name,
                      price: food.price,
                      image: food.image,
                      quantity: 1,
                    })
                  }
                >
                  + Add
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Menu;