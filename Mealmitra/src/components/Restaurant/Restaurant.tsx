import "./Restaurant.css"; 
 
import dessert from "../../assets/dessertres.jpg"; 
import chinese from "../../assets/chineseres.jpg"; 
import nonveg from "../../assets/nonvegres.jpg"; 
import veg from "../../assets/vegres.jpg"; 
import breakfast from "../../assets/breakfastres.jpg"; 
 
 
/* ========================= 
   TYPES 
========================= */ 
 
export type RestaurantData = { 
  image: string; 
  name: string; 
  category: string; 
  price: string; 
  location: string; 
  rating: string; 
  offer: string; 
 
  // VEG MODE 
  isVeg: boolean; 
}; 
 
 
type RestaurantProps = { 
  onRestaurantClick?: ( 
    restaurant: RestaurantData 
  ) => void; 
 
  // VEG MODE 
  vegMode?: boolean; 
}; 
 
 
/* ========================= 
   COMPONENT 
========================= */ 
 
function Restaurant({ 
  onRestaurantClick, 
  vegMode = false, 
}: RestaurantProps) { 
 
 
  /* ========================= 
     RESTAURANT DATA 
  ========================= */ 
 
  const restaurants: RestaurantData[] = [ 
 
    { 
      image: dessert, 
      name: "Belgian Waffle co.", 
      category: "Desserts • Bakery", 
      price: "₹500 for two", 
      location: 
        "Shraddhanand Pet Square, Laxminagar, Nagpur, Maharashtra 440022", 
      rating: "4.5", 
      offer: "Flat 20% off on pre-booking", 
 
      // VEG 
      isVeg: true, 
    }, 
 
 
    { 
      image: chinese, 
      name: "Calcutta Rolls", 
      category: "Chinese • Asian", 
      price: "₹700 for two", 
      location: 
        "Shop No. 216 United bank Of India, N Ambazari Rd, Nagpur, Maharashtra 440010", 
      rating: "4.4", 
      offer: "Flat 15% off on walk-in", 
 
      // VEG 
      isVeg: true, 
    }, 
 
 
    { 
      image: nonveg, 
      name: "Karim's", 
      category: "North Indian • Non-Veg", 
      price: "₹800 for two", 
      location: 
        "Ground Floor, Aman Lifestyle Nelson Square, Rajnagar, Near Sadar, Nagpur", 
      rating: "4.6", 
      offer: "Flat 25% off on pre-booking", 
 
      // NON-VEG 
      isVeg: false, 
    }, 
 
 
    { 
      image: veg, 
      name: "Haldiram's", 
      category: "Pure Veg • Indian", 
      price: "₹600 for two", 
      location: 
        "Plot No. 214, WHC Road, Dharampeth, near Shankar Nagar, Nagpur 440010", 
      rating: "4.7", 
      offer: "Flat 20% off on walk-in", 
 
      // VEG 
      isVeg: true, 
    }, 
 
 
    { 
      image: breakfast, 
      name: "Tanjore", 
      category: "Breakfast • Cafe", 
      price: "₹400 for two", 
      location: 
        "Ground Floor Pathak House, Abhyankar Nagar Rd, Nagpur 440010", 
      rating: "4.3", 
      offer: "Flat 10% off on breakfast", 
 
      // VEG 
      isVeg: true, 
    }, 
 
  ]; 
 
 
  /* ========================= 
     VEG MODE FILTER 
  ========================= */ 
 
  const filteredRestaurants = vegMode 
    ? restaurants.filter( 
        (restaurant) => restaurant.isVeg 
      ) 
    : restaurants; 
 
 
  return ( 
 
    <section className="restaurant-section"> 
 
 
      {/* ========================= 
          HEADER 
      ========================= */} 
 
      <div className="restaurant-header"> 
 
        <h2> 
          {vegMode 
            ? "Best Veg Restaurants for You" 
            : "Best Restaurants for You"} 
        </h2> 
 
      </div> 
 
 
      {/* ========================= 
          RESTAURANT CONTAINER 
      ========================= */} 
 
      <div className="restaurant-container"> 
 
        {filteredRestaurants.map( 
          ( 
            restaurant, 
            index 
          ) => ( 
 
            <div 
              className="restaurant-card" 
              key={`${restaurant.name}-${index}`} 
              onClick={() => 
                onRestaurantClick?.( 
                  restaurant 
                ) 
              } 
            > 
 
 
              {/* ========================= 
                  RESTAURANT IMAGE 
              ========================= */} 
 
              <div 
                className="restaurant-image" 
                style={{ 
                  backgroundImage: 
                    `url(${restaurant.image})`, 
                }} 
              > 
 
                <div className="image-overlay"></div> 
 
 
                {/* VEG INDICATOR */} 
 
                {restaurant.isVeg && ( 
 
                  <span className="veg-indicator"> 
                    ● VEG 
                  </span> 
 
                )} 
 
 
                {/* RESTAURANT NAME */} 
 
                <div className="restaurant-name"> 
 
                  <h3> 
                    {restaurant.name} 
                  </h3> 
 
 
                  {/* RATING */} 
 
                  <span className="rating"> 
 
                    ★ {restaurant.rating} 
 
                  </span> 
 
                </div> 
 
              </div> 
 
 
              {/* ========================= 
                  RESTAURANT DETAILS 
              ========================= */} 
 
              <div className="restaurant-details"> 
 
 
                {/* CATEGORY + PRICE */} 
 
                <div className="details-top"> 
 
                  <p> 
                    {restaurant.category} 
                  </p> 
 
                  <span> 
                    {restaurant.price} 
                  </span> 
 
                </div> 
 
 
                {/* LOCATION */} 
 
                <p className="location"> 
 
                  📍 {restaurant.location} 
 
                </p> 
 
 
                {/* MAIN OFFER */} 
 
                <div className="offer"> 
 
                  <span> 
                    🎁 
                  </span> 
 
                  <span> 
                    {restaurant.offer} 
                  </span> 
 
                </div> 
 
 
                {/* BANK OFFER */} 
 
                <p className="bank-offer"> 
 
                  Up to 10% off with bank offers 
 
                </p> 
 
 
                {/* EXTRA OFFER */} 
 
                <p className="extra-offer"> 
 
                  Get extra ₹50 off using MealMitra 
 
                </p> 
 
 
              </div> 
 
 
            </div> 
 
          ) 
        )} 
 
      </div> 
 
 
      {/* ========================= 
          NO VEG RESTAURANTS 
      ========================= */} 
 
      {vegMode && 
        filteredRestaurants.length === 0 && ( 
 
          <div className="no-veg-restaurants"> 
 
            <h3> 
              No veg restaurants available 
            </h3> 
 
            <p> 
              We couldn't find any veg restaurants 
              right now. 
            </p> 
 
          </div> 
 
        )} 
 
    </section> 
 
  ); 
 
} 
 
 
export default Restaurant; 