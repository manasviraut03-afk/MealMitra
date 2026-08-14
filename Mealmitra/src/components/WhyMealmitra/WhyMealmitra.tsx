import "./WhyMealMitra.css";

function WhyMealMitra() {
  const features = [
    {
      icon: "🥗",
      title: "Healthy Choices",
      className: "feature-1",
    },
    {
      icon: "🥬",
      title: "Veg Mode",
      className: "feature-2",
    },
    {
      icon: "🎁",
      title: "Special Offers",
      className: "feature-3",
    },
    {
      icon: "⭐",
      title: "Top Restaurants",
      className: "feature-4",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      className: "feature-5",
    },
    {
      icon: "❤️",
      title: "Your Favorites",
      className: "feature-6",
    },
  ];

  return (
    <section className="why-mealmitra">

      {/* =========================
          Heading
      ========================= */}

      <div className="why-header">

        <h2>
          What's waiting for you on MealMitra?
        </h2>

        <p>
          Discover delicious food, exciting offers and smart
          features made for every craving.
        </p>

      </div>


      {/* =========================
          Main Content
      ========================= */}

      <div className="why-content">


        {/* =========================
            Left Features
        ========================= */}

        <div className="feature-column left-features">

          {features.slice(0, 3).map((feature) => (

            <div
              className={`feature-card ${feature.className}`}
              key={feature.title}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

            </div>

          ))}

        </div>


        {/* =========================
            Center Phone
        ========================= */}

        <div className="phone-container">

          <div className="phone">

            {/* Phone Notch */}
            <div className="phone-notch"></div>


            {/* Phone Screen */}
            <div className="phone-screen">

              {/* Logo */}
              <div className="phone-logo">
                🍽️
              </div>


              {/* App Name */}
              <h3>
                MealMitra
              </h3>


              {/* Subtitle */}
              <p>
                Food made for you
              </p>


              {/* Food Display */}
              <div className="food-display">

                <span>🍕</span>
                <span>🍔</span>
                <span>🍜</span>

              </div>


              {/* Order Box */}
              <div className="order-box">

                <span>
                  🔥
                </span>

                <div>

                  <strong>
                    Hungry?
                  </strong>

                  <small>
                    Order your favourite food
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            Right Features
        ========================= */}

        <div className="feature-column right-features">

          {features.slice(3, 6).map((feature) => (

            <div
              className={`feature-card ${feature.className}`}
              key={feature.title}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyMealMitra;