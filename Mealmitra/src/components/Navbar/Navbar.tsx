import { FiUser } from "react-icons/fi";
import "./Navbar.css";

interface NavbarProps {
  onSignIn: () => void;
  loggedInUser: string | null;
  onProfile: () => void;
  onHome?: () => void;
  onOffers?: () => void;
  onAbout?: () => void;

  // VEG MODE
  onVegMode?: () => void;
  vegMode?: boolean;
}

function Navbar({
  onSignIn,
  loggedInUser,
  onProfile,
  onHome,
  onOffers,
  onAbout,
  onVegMode,
  vegMode = false,
}: NavbarProps) {

  return (
    <nav className="navbar">

      {/* =====================================================
          LOGO
      ===================================================== */}

      <div
        className="navbar-logo"
        onClick={onHome}
      >
        MealMitra
      </div>


      {/* =====================================================
          NAV LINKS
      ===================================================== */}

      <div className="navbar-links">

        {/* HOME */}

        <button
          className="navbar-link"
          onClick={onHome}
        >
          Home
        </button>


        {/* OFFERS */}

        <button
          className="navbar-link"
          onClick={onOffers}
        >
          Offers
        </button>


        {/* ABOUT */}

        <button
          className="navbar-link"
          onClick={onAbout}
        >
          About Us
        </button>


        {/* =================================================
            VEG MODE
        ================================================= */}

        <button
          type="button"
          className={`veg-mode ${
            vegMode ? "veg-mode-active" : ""
          }`}
          onClick={onVegMode}
          aria-pressed={vegMode}
        >

          <span className="veg-text">
            Veg
          </span>


          <span className="veg-toggle">

            <span className="veg-circle"></span>

          </span>

        </button>


        {/* =================================================
            PROFILE / SIGN IN
        ================================================= */}

        {loggedInUser ? (

          <button
            className="profile-button"
            onClick={onProfile}
          >

            <span className="profile-icon">
              <FiUser />
            </span>

            <span className="profile-name">
              {loggedInUser}
            </span>

          </button>

        ) : (

          <button
            className="sign-in-button"
            onClick={onSignIn}
          >

            <span className="profile-icon">
              <FiUser />
            </span>

            <span className="profile-name">
              Sign In
            </span>

          </button>

        )}

      </div>

    </nav>
  );
}

export default Navbar;