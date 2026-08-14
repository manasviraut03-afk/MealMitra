import "./Navbar.css";
import { FaUser } from "react-icons/fa";

type NavbarProps = {
  onSignIn: () => void;
  loggedInUser: string | null;
  onLogout: () => void;
};

function Navbar({
  onSignIn,
  loggedInUser,
  onLogout,
}: NavbarProps) {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        MealMitra
      </div>

      {/* Navigation */}
      <div className="nav-right">

        <a href="#">Home</a>

        <a href="#">Offers</a>

        <a href="#">About Us</a>

        {/* Veg Mode */}
        <div className="veg-mode">
          <span>Veg</span>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        {/* PROFILE */}
        <div className="profile-container">

          <button
            className={`profile-btn ${
              loggedInUser ? "logged-in" : ""
            }`}
            onClick={
              loggedInUser
                ? onLogout
                : onSignIn
            }
            type="button"
            title={
              loggedInUser
                ? "Click to logout"
                : "Sign In"
            }
          >
            <FaUser />
          </button>

          {loggedInUser && (
            <span className="user-name">
              {loggedInUser}
            </span>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;