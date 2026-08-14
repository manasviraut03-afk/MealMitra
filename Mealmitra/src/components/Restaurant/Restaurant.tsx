import "./Restaurant.css";

import dessert from "../../assets/dessertres.jpg";
import chinese from "../../assets/chineseres.jpg";
import nonveg from "../../assets/nonvegres.jpg";
import veg from "../../assets/vegres.jpg";
import breakfast from "../../assets/breakfastres.jpg";

function Restaurant() {
  const restaurants = [
    {
      image: dessert,
      name: "Belgian Waffle co.",
      category: "Desserts • Bakery",
      price: "₹500 for two",
      location: "Shraddhanand Pet Square, Laxminagar, Nagpur, Maharashtra 440022",
      rating: "4.5",
      offer: "Flat 20% off on pre-booking",
    },
    {
      image: chinese,
      name: "Calcutta Rolls",
      category: "Chinese • Asian",
      price: "₹700 for two",
      location: "Shop No. 216 United bank Of India, N Ambazari Rd, Nagpur, Maharashtra 440010",
      rating: "4.4",
      offer: "Flat 15% off on walk-in",
    },
    {
      image: nonveg,
      name: "Karim's",
      category: "North Indian • Non-Veg",
      price: "₹800 for two",
      location: "Ground Floor, Aman Lifestyle Nelson Square, Rajnagar, Near Sadar, Nagpur",
      rating: "4.6",
      offer: "Flat 25% off on pre-booking",
    },
    {
      image: veg,
      name: "Haldiram's",
      category: "Pure Veg • Indian",
      price: "₹600 for two",
      location: "Plot No. 214, WHC Road, Dharampeth, near Shankar Nagar, Nagpur 440010",
      rating: "4.7",
      offer: "Flat 20% off on walk-in",
    },
    {
      image: breakfast,
      name: " Tanjore ",
      category: "Breakfast • Cafe",
      price: "₹400 for two",
      location:"Ground Floor Pathak House, Abhyankar Nagar Rd, Nagpur 440010",
      rating: "4.3",
      offer: "Flat 10% off on breakfast",
    },
  ];

  return (
    <section className="restaurant-section">
      
      <div className="restaurant-header">
        <h2>Best Restaurants for You</h2>
      </div>

      <div className="restaurant-container">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>

            {/* Restaurant Image */}
            <div
              className="restaurant-image"
              style={{
                backgroundImage: `url(${restaurant.image})`,
              }}
            >
              <div className="image-overlay"></div>

              <div className="restaurant-name">
                <h3>{restaurant.name}</h3>

                <span className="rating">
                  ★ {restaurant.rating}
                </span>
              </div>
            </div>

            {/* Restaurant Details */}
            <div className="restaurant-details">

              <div className="details-top">
                <p>{restaurant.category}</p>
                <span>{restaurant.price}</span>
              </div>

              <p className="location">
                📍 {restaurant.location}
              </p>

              <div className="offer">
                <span>🎁</span>
                {restaurant.offer}
              </div>

              <p className="bank-offer">
                Up to 10% off with bank offers
              </p>

              <p className="extra-offer">
                Get extra ₹50 off using MealMitra
              </p>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Restaurant;