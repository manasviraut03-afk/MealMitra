import "./FoodDisplay.css";

import pizza from "../../assets/food/pizza.jpg";
import burger from "../../assets/food/burger.jpg";
import pasta from "../../assets/food/pasta.jpg";
import biryani from "../../assets/food/biryani.jpg";
import sandwich from "../../assets/food/sandwich.jpg";
import desserts from "../../assets/food/desserts.jpg";
import drinks from "../../assets/food/drinks.jpg";

function FoodDisplay() {
  const foods = [
    { name: "Pizza", image: pizza, price: "₹299" },
    { name: "Burger", image: burger, price: "₹199" },
    { name: "Pasta", image: pasta, price: "₹249" },
    { name: "Biryani", image: biryani, price: "₹249" },
    { name: "Sandwich", image: sandwich, price: "₹179" },
    { name: "Desserts", image: desserts, price: "₹149" },
    { name: "Drinks", image: drinks, price: "₹99" },
  ];

  return (
    <div className="food-display">
      <h2>Our Popular Dishes</h2>

      <div className="food-container">
        {foods.map((food, index) => (
          <div className="food-card" key={index}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.price}</p>
            <p>⭐⭐⭐⭐⭐</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;