import "./Header.css";
import hero from "../../assets/videos/hero.mp4";

import {
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

import { FiChevronDown } from "react-icons/fi";

interface HeaderProps {
  onSearch: () => void;
  onLocationClick: () => void;
  selectedLocation: string;
}

function Header({
  onSearch,
  onLocationClick,
  selectedLocation,
}: HeaderProps) {
  return (
    <section className="hero">

      {/* HERO VIDEO */}
      <video
        className="hero-video"
        src={hero}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* HERO CONTENT */}
      <div className="hero-content">

        {/* HEADING */}
        <div className="hero-heading-section">

          <h1>
            Every Meal, One Click Away
          </h1>

          <p>
            Fresh meals at your doorstep.
          </p>

        </div>


        {/* SEARCH AREA */}
        <div className="search-area">

          {/* LOCATION BOX */}
          <div
            className="location-box"
            onClick={onLocationClick}
          >

            <div className="location-icon">
              <FaMapMarkerAlt />
            </div>

            <span className="location-text">
              {selectedLocation ||
                "Enter your delivery location"}
            </span>

            <div className="arrow">
              <FiChevronDown />
            </div>

          </div>


          {/* SEARCH BOX */}
          <div
            className="search-box"
            onClick={onSearch}
          >

            <span className="search-placeholder">
              Search for restaurant, item or more
            </span>

            <div className="search-icon">
              <FaSearch />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Header;