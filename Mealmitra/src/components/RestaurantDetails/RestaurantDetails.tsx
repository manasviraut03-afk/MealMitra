import {
  FiArrowLeft,
  FiMapPin,
  FiClock,
  FiStar,
  FiGift,
  FiPlus,
  FiShoppingBag,
} from "react-icons/fi";

import "./RestaurantDetails.css";

import type { CartItem, RestaurantData } from "../../types";

// =========================================================
// WAFFLE IMAGES
// =========================================================

import waffleImg from "../../assets/waffel.jpg";
import chocolateWaffleImg from "../../assets/chocolateWaffel.jpg";
import belgianWaffleImg from "../../assets/belgianWaffel.jpeg";

// =========================================================
// ROLL IMAGES
// =========================================================

import chickenRollImg from "../../assets/ChickenRollImg.jpg";
import eggRollImg from "../../assets/EggRollImg.jpg";
import paneerRollImg from "../../assets/PaneerRollImg.jpg";

// =========================================================
// NORTH INDIAN IMAGES
// =========================================================

import butterChickenImg from "../../assets/ButterChicken.jpeg";
import choleBhatureImg from "../../assets/CholeBhature.jpeg";
import dalMakhniImg from "../../assets/DalMakhni.jpeg";
import biryaniImg from "../../assets/biryani.jpg";

// =========================================================
// HALDIRAM'S IMAGES
// =========================================================

import PaneerButterMasala from "../../assets/PannerButterMasala.jpeg";
import MakaiRoti from "../../assets/MakaiRoti.jpeg";
import BhindiMasala from "../../assets/bhindi Masala.jpg";
import VegThaliImg from "../../assets/Veg Thali.jpg";

// =========================================================
// FOOD ITEM TYPE
// =========================================================

type FoodItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

// =========================================================
// PROPS
// =========================================================

type RestaurantDetailsProps = {
  restaurant: RestaurantData;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
};

// =========================================================
// COMPONENT
// =========================================================

function RestaurantDetails({
  restaurant,
  onBack,
  onAddToCart,
}: RestaurantDetailsProps) {

  // =========================================================
  // RESTAURANT NAME AND CATEGORY
  // =========================================================

  const restaurantName = restaurant.name.toLowerCase();

  const restaurantCategory =
    restaurant.category.toLowerCase();

  // =========================================================
  // FOOD ITEMS
  // =========================================================

  let foodItems: FoodItem[] = [];

  // =========================================================
  // WAFFLE RESTAURANT
  // =========================================================

  if (
    restaurantName.includes("waffle") ||
    restaurantName.includes("waffel") ||
    restaurantCategory.includes("waffle") ||
    restaurantCategory.includes("waffel")
  ) {

    foodItems = [

      {
        name: "Special Waffle",
        description:
          "Delicious freshly prepared waffle with rich toppings and creamy chocolate.",
        price: "₹180",
        image: waffleImg,
      },

      {
        name: "Chocolate Waffle",
        description:
          "Crispy golden waffle topped with delicious chocolate and sweet drizzle.",
        price: "₹220",
        image: chocolateWaffleImg,
      },

      {
        name: "Belgian Waffle",
        description:
          "Classic Belgian style waffle served with premium toppings and fresh cream.",
        price: "₹250",
        image: belgianWaffleImg,
      },

      {
        name: "Classic Waffle",
        description:
          "Soft and crispy waffle served with sweet syrup and delicious toppings.",
        price: "₹160",
        image: waffleImg,
      },

    ];

  }

  // =========================================================
  // CALCUTTA ROLL RESTAURANT
  // =========================================================

  else if (
    restaurantName.includes("roll") ||
    restaurantName.includes("calcutta") ||
    restaurantCategory.includes("roll")
  ) {

    foodItems = [

      {
        name: "Chicken Roll",
        description:
          "Juicy chicken wrapped in a soft paratha with onions and tasty sauces.",
        price: "₹140",
        image: chickenRollImg,
      },

      {
        name: "Egg Roll",
        description:
          "Fresh egg cooked with soft paratha, onions and delicious spicy sauces.",
        price: "₹110",
        image: eggRollImg,
      },

      {
        name: "Paneer Roll",
        description:
          "Soft paneer pieces wrapped in paratha with fresh vegetables and tasty sauces.",
        price: "₹130",
        image: paneerRollImg,
      },

      {
        name: "Special Chicken Roll",
        description:
          "Special chicken roll prepared with onions, sauces and flavorful spices.",
        price: "₹170",
        image: chickenRollImg,
      },

    ];

  }

  // =========================================================
  // KARIM'S / NORTH INDIAN RESTAURANT
  // =========================================================

  else if (
    restaurantName.includes("karim") ||
    restaurantCategory.includes("north indian") ||
    restaurantCategory.includes("north-indian")
  ) {

    foodItems = [

      {
        name: "Butter Chicken",
        description:
          "Tender chicken cooked in a rich creamy tomato gravy with aromatic Indian spices.",
        price: "₹280",
        image: butterChickenImg,
      },

      {
        name: "Chole Bhature",
        description:
          "Spicy chickpeas served with soft and fluffy bhature for a delicious North Indian meal.",
        price: "₹180",
        image: choleBhatureImg,
      },

      {
        name: "Dal Makhni",
        description:
          "Creamy black lentils slow cooked with butter and traditional Indian spices.",
        price: "₹160",
        image: dalMakhniImg,
      },

      {
        name: "Chicken Biryani",
        description:
          "Fragrant basmati rice cooked with tender chicken, herbs and flavorful spices.",
        price: "₹250",
        image: biryaniImg,
      },

    ];

  }

  // =========================================================
  // HALDIRAM'S RESTAURANT
  // =========================================================

  else if (
    restaurantName.includes("haldiram") ||
    restaurantName.includes("haldirams")
  ) {

    foodItems = [

      {
        name: "Paneer Butter Masala",
        description:
          "Soft paneer cooked in a rich creamy tomato gravy with aromatic Indian spices.",
        price: "₹220",
        image: PaneerButterMasala,
      },

      {
        name: "Makai Roti",
        description:
          "Traditional Indian corn flour roti served fresh and perfect with North Indian curries.",
        price: "₹80",
        image: MakaiRoti,
      },

      {
        name: "Bhindi Masala",
        description:
          "Fresh okra cooked with onions, tomatoes and delicious Indian spices.",
        price: "₹160",
        image: BhindiMasala,
      },

      {
        name: "Veg Thali",
        description:
          "Complete vegetarian meal served with delicious curries, roti, rice and traditional sides.",
        price: "₹220",
        image: VegThaliImg,
      },

    ];

  }

  // =========================================================
  // DEFAULT MENU
  // =========================================================

  else {

    foodItems = [

      {
        name: "Special Chicken",
        description:
          "Freshly prepared delicious chicken dish with special spices and sauces.",
        price: "₹180",
        image: butterChickenImg,
      },

      {
        name: "Chicken Biryani",
        description:
          "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
        price: "₹250",
        image: biryaniImg,
      },

      {
        name: "Dal Makhni",
        description:
          "Creamy lentils cooked with butter and traditional Indian spices.",
        price: "₹160",
        image: dalMakhniImg,
      },

      {
        name: "Chole Bhature",
        description:
          "Delicious spicy chickpeas served with soft and fluffy bhature.",
        price: "₹180",
        image: choleBhatureImg,
      },

    ];

  }

  // =========================================================
  // ADD ITEM TO CART
  // =========================================================

  const handleAddItem = (item: FoodItem) => {

    const cartItem: CartItem = {
      id: Date.now(),
      name: item.name,
      price: Number(item.price.replace("₹", "")),
      image: item.image,
      quantity: 1,
    };

    onAddToCart(cartItem);
  };

  // =========================================================
  // PAGE
  // =========================================================

  return (

    <div className="restaurant-details-page">

      {/* =====================================================
          TOP NAVBAR
      ===================================================== */}

      <header className="restaurant-details-navbar">

        <button
          type="button"
          className="restaurant-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <FiArrowLeft />
        </button>

        <h2>
          Restaurant Details
        </h2>

        <div className="restaurant-navbar-space"></div>

      </header>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <main className="restaurant-details-wrapper">

        {/* ===================================================
            RESTAURANT HERO
        =================================================== */}

        <section className="restaurant-hero-section">

          <div className="restaurant-hero-image">

            <img
              src={restaurant.image}
              alt={restaurant.name}
            />

            <div className="restaurant-hero-overlay"></div>

          </div>


          {/* RESTAURANT TITLE */}

          <div className="restaurant-main-info">

            <div className="restaurant-title-content">

              <h1>
                {restaurant.name}
              </h1>

              <p className="restaurant-category">
                {restaurant.category}
              </p>

            </div>


            {/* RATING */}

            <div className="restaurant-rating-box">

              <FiStar />

              <span>
                {restaurant.rating}
              </span>

            </div>

          </div>

        </section>


        {/* ===================================================
            ABOUT
        =================================================== */}

        <section className="restaurant-about-section">

          <h2>
            About {restaurant.name}
          </h2>

          <p>
            Enjoy delicious food, fresh ingredients and a
            comfortable dining experience at {restaurant.name}.
          </p>

        </section>


        {/* ===================================================
            RESTAURANT INFORMATION
        =================================================== */}

        <section className="restaurant-info-grid">

          <div className="restaurant-info-card">

            <div className="restaurant-info-icon">
              <FiMapPin />
            </div>

            <div className="restaurant-info-content">

              <span>
                Location
              </span>

              <strong>
                {restaurant.location}
              </strong>

            </div>

          </div>


          <div className="restaurant-info-card">

            <div className="restaurant-info-icon">
              <FiClock />
            </div>

            <div className="restaurant-info-content">

              <span>
                Delivery Time
              </span>

              <strong>
                20–30 mins
              </strong>

            </div>

          </div>


          <div className="restaurant-info-card">

            <div className="restaurant-info-icon">
              <FiShoppingBag />
            </div>

            <div className="restaurant-info-content">

              <span>
                Average Price
              </span>

              <strong>
                {restaurant.price}
              </strong>

            </div>

          </div>

        </section>


        {/* ===================================================
            SPECIAL OFFER
        =================================================== */}

        <section className="restaurant-special-offer">

          <div className="special-offer-icon">
            <FiGift />
          </div>

          <div className="special-offer-content">

            <h3>
              Special Offer
            </h3>

            <p>
              {restaurant.offer}
            </p>

          </div>

        </section>


        {/* ===================================================
            POPULAR ITEMS
        =================================================== */}

        <section className="restaurant-menu-section">

          <div className="restaurant-menu-header">

            <h2>
              Popular Items
            </h2>

            <p>
              Customer favourites from this restaurant
            </p>

          </div>


          {/* FOOD LIST */}

          <div className="restaurant-food-list">

            {foodItems.map((item, index) => (

              <article
                className="restaurant-food-card"
                key={index}
              >

                {/* FOOD INFORMATION */}

                <div className="restaurant-food-content">

                  {/* VEG INDICATOR */}

                  <span className="veg-indicator">
                    <span></span>
                  </span>


                  {/* FOOD NAME */}

                  <h3>
                    {item.name}
                  </h3>


                  {/* HIGHLY REORDERED */}

                  <div className="food-reorder">

                    <span className="reorder-bar"></span>

                    <span>
                      Highly reordered
                    </span>

                  </div>


                  {/* DESCRIPTION */}

                  <p>
                    {item.description}
                  </p>


                  {/* PRICE */}

                  <strong className="food-price">
                    {item.price}
                  </strong>

                </div>


                {/* FOOD IMAGE */}

                <div className="restaurant-food-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  {/* ADD BUTTON */}

                  <button
                    type="button"
                    className="food-add-button"
                    onClick={() => handleAddItem(item)}
                  >

                    <FiPlus />

                    <span>
                      Add
                    </span>

                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ===================================================
            BOTTOM OFFER
        =================================================== */}

        <div className="restaurant-bottom-offer">

          <FiGift />

          <span>
            Get extra ₹50 OFF using MealMitra
          </span>

        </div>

      </main>

    </div>

  );
}

export default RestaurantDetails;