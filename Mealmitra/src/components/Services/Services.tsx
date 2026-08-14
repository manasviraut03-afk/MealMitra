import "./Services.css";

function Services() {
  return (
    <section className="services">

      <div className="services-title">
        <h2>What are you craving?</h2>
        <p>Delicious food, delivered right to your doorstep.</p>
      </div>

      <div className="service-cards">

        {/* Food Delivery */}
        <div className="service-card food-delivery">
          <div className="card-content">
            <h3>FOOD DELIVERY</h3>
            <p>Fresh meals from your favourite restaurants</p>
            <span>FAST & FRESH</span>
          </div>

          <button className="arrow-btn">→</button>
        </div>


        {/* Trending Food */}
        <div className="service-card trending-food">
          <div className="card-content">
            <h3>TRENDING FOOD</h3>
            <p>Discover dishes everyone is loving</p>
            <span>MOST LOVED</span>
          </div>

          <button className="arrow-btn">→</button>
        </div>


        {/* Special Offers */}
        <div className="service-card special-offers">
          <div className="card-content">
            <h3>SPECIAL OFFERS</h3>
            <p>Delicious food at amazing prices</p>
            <span>UP TO 50% OFF</span>
          </div>

          <button className="arrow-btn">→</button>
        </div>

      </div>

    </section>
  );
}

export default Services;