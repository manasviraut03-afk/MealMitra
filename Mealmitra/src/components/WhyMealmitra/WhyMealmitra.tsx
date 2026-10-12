import { useEffect, useRef, useState } from "react";
import "./WhyMealMitra.css";

function WhyMealMitra() {

  const [animate, setAnimate] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);


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


  /* =====================================================
     START ANIMATION WHEN SECTION COMES INTO VIEW
  ===================================================== */

  useEffect(() => {

    const section = sectionRef.current;

    if (!section) {
      return;
    }


    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setAnimate(false);

            requestAnimationFrame(() => {

              requestAnimationFrame(() => {

                setAnimate(true);

              });

            });

          }

        });

      },

      {
        threshold: 0.15,
      }

    );


    observer.observe(section);


    return () => {

      observer.disconnect();

    };

  }, []);


  return (

    <section
      ref={sectionRef}
      className={`why-mealmitra ${
        animate ? "start-animation" : ""
      }`}
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="background-glow glow-one"></div>

      <div className="background-glow glow-two"></div>

      <div className="background-circle circle-one"></div>

      <div className="background-circle circle-two"></div>


      {/* =========================
          Heading
      ========================= */}

      <div className="why-header">

        <span className="section-small-title">
          WHY MEALMITRA
        </span>

        <h2>
          What's waiting for you on <span>MealMitra?</span>
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

              <div className="feature-card-shine"></div>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <div className="card-bottom-line"></div>

            </div>

          ))}

        </div>


        {/* =========================
            Center Phone
        ========================= */}

        <div className="phone-container">


          {/* Back Glow */}

          <div className="phone-glow"></div>


          {/* Phone Shadow */}

          <div className="phone-shadow"></div>


          {/* Phone */}

          <div className="phone">


            {/* Phone Side Depth */}

            <div className="phone-side"></div>


            {/* Phone Notch */}

            <div className="phone-notch">

              <div className="phone-camera"></div>

            </div>


            {/* Phone Screen */}

            <div className="phone-screen">


              {/* Top Status */}

              <div className="phone-status">

                <span>
                  9:41
                </span>

                <div className="status-icons">

                  <span>●</span>

                  <span>◔</span>

                  <span>▰</span>

                </div>

              </div>


              {/* App Header */}

              <div className="phone-app-header">

                <div className="mini-logo">
                  🍽️
                </div>

                <div>

                  <strong>
                    MealMitra
                  </strong>

                  <small>
                    Good food, good mood
                  </small>

                </div>

              </div>


              {/* Welcome */}

              <div className="phone-welcome">

                <span>
                  Hello 👋
                </span>

                <h3>
                  What are you craving?
                </h3>

              </div>


              {/* Search */}

              <div className="phone-search">

                <span>
                  🔍
                </span>

                <span className="search-text">
                  Search for food...
                </span>

              </div>


              {/* Food Categories */}

              <div className="phone-categories">

                <div className="category active">
                  <span>🍕</span>
                  <small>Pizza</small>
                </div>

                <div className="category">
                  <span>🍔</span>
                  <small>Burger</small>
                </div>

                <div className="category">
                  <span>🍜</span>
                  <small>Noodles</small>
                </div>

                <div className="category">
                  <span>🍛</span>
                  <small>Indian</small>
                </div>

              </div>


              {/* Food Card */}

              <div className="phone-food-card">

                <div className="food-image">
                  🍕
                </div>

                <div className="food-info">

                  <strong>
                    Delicious Pizza
                  </strong>

                  <small>
                    ⭐ 4.8 • 25 min
                  </small>

                  <b>
                    ₹199
                  </b>

                </div>

                <button>
                  +
                </button>

              </div>


              {/* Order Banner */}

              <div className="order-box">

                <div className="order-icon">
                  🔥
                </div>

                <div className="order-text">

                  <strong>
                    Hungry?
                  </strong>

                  <small>
                    Order your favourite food
                  </small>

                </div>

                <span className="order-arrow">
                  →
                </span>

              </div>


              {/* Bottom Navigation */}

              <div className="phone-bottom-nav">

                <div className="bottom-item active">
                  <span>⌂</span>
                  <small>Home</small>
                </div>

                <div className="bottom-item">
                  <span>♡</span>
                  <small>Favourites</small>
                </div>

                <div className="bottom-item">
                  <span>🛒</span>
                  <small>Cart</small>
                </div>

                <div className="bottom-item">
                  <span>◉</span>
                  <small>Profile</small>
                </div>

              </div>

            </div>

          </div>


          {/* Floating Food Elements */}

          <div className="floating-food floating-food-one">
            🍕
          </div>

          <div className="floating-food floating-food-two">
            🍔
          </div>

          <div className="floating-food floating-food-three">
            ✨
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

              <div className="feature-card-shine"></div>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <div className="card-bottom-line"></div>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          Bottom Text
      ========================= */}

      <div className="why-bottom-text">

        <span>
          ✦
        </span>

        <p>
          Everything you need for a better food experience
        </p>

        <span>
          ✦
        </span>

      </div>

    </section>

  );

}

export default WhyMealMitra;