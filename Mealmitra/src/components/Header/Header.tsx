import "./Header.css";
import hero from "../../assets/videos/hero.mp4";

function Header() {
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        src={hero}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        <h1>Every Meal, One Click Away</h1>

        <p>Fresh meals at your doorstep.</p>

        {/* Location + Search */}
        <div className="search-area">

          {/* Location Box */}
          <div className="location-box">
            <span className="location-icon">📍</span>

            <input
              type="text"
              placeholder="Enter your delivery location"
            />

            <span className="arrow">⌄</span>
          </div>

          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
            />

            <span className="search-icon">🔍</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Header;