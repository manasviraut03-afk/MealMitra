import { useState } from "react";

import {
  FiArrowLeft,
  FiLogOut,
  FiCheck,
  FiX,
  FiShield,
} from "react-icons/fi";

import "./Logout.css";


interface LogoutProps {
  onBack: () => void;
  darkMode: boolean;
  onLogout: () => void;
}


const Logout = ({
  onBack,
  darkMode,
  onLogout,
}: LogoutProps) => {

  const [loggedOut, setLoggedOut] = useState(false);


  /* =================================================
     LOG OUT OF ALL DEVICES
  ================================================= */

  const handleLogout = () => {

    /*
      Remove login/session information only.

      We are NOT removing:
      - saved addresses
      - email address
      - phone number
      - orders
      - other account information
    */

    localStorage.removeItem("mealmitraUser");
    localStorage.removeItem("mealmitraToken");
    localStorage.removeItem("mealmitraSession");

    /*
      Show logout success message first.
    */

    setLoggedOut(true);

  };


  /* =================================================
     LOGOUT SUCCESS SCREEN
  ================================================= */

  if (loggedOut) {

    return (

      <div
        className={`logout-page ${
          darkMode ? "dark-mode" : ""
        }`}
      >


        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="logout-header">

          <button
            type="button"
            className="logout-back-button"
            onClick={onBack}
            aria-label="Go back"
          >

            <FiArrowLeft />

          </button>


          <div>

            <h1>
              Account Logout
            </h1>

            <p>
              Manage your account sessions
            </p>

          </div>

        </header>


        {/* =====================================================
            MAIN
        ===================================================== */}

        <main className="logout-main">


          <section className="logout-success-card">


            <div className="logout-success-icon">

              <FiCheck />

            </div>


            <h2>
              You have been logged out
            </h2>


            <p>
              Your MealMitra account has been logged out
              from all other devices successfully.
            </p>


            <button
              type="button"
              className="logout-success-button"
              onClick={onLogout}
            >

              <FiArrowLeft />

              Back to Login

            </button>


          </section>


        </main>


      </div>

    );

  }


  return (

    <div
      className={`logout-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="logout-header">

        <button
          type="button"
          className="logout-back-button"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div>

          <h1>
            Log out of all devices
          </h1>

          <p>
            Manage your account sessions
          </p>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="logout-main">


        {/* ===================================================
            SECURITY NOTICE
        =================================================== */}

        <section className="logout-notice">

          <div className="logout-notice-icon">

            <FiShield />

          </div>


          <div>

            <h3>
              Keep your account secure
            </h3>

            <p>
              Logging out of all devices helps protect your
              MealMitra account if you are signed in somewhere
              you no longer use.
            </p>

          </div>

        </section>


        {/* ===================================================
            SECTION
        =================================================== */}

        <section className="logout-section">


          <div className="logout-heading">

            <span>
              ACCOUNT ACCESS
            </span>

            <h2>
              Log out of all devices
            </h2>

            <p>
              Sign out of your MealMitra account on all other
              devices and sessions.
            </p>

          </div>


          {/* =================================================
              LOGOUT CARD
          ================================================= */}

          <div className="logout-card">


            <div className="logout-card-icon">

              <FiLogOut />

            </div>


            <div className="logout-card-content">

              <h3>
                Are you sure you want to log out?
              </h3>

              <p>
                This will sign you out of your MealMitra
                account on all other devices where your
                account is currently active.
              </p>


              <div className="logout-warning">

                <FiShield />

                <span>
                  Your saved account information will not be deleted.
                </span>

              </div>

            </div>


          </div>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="logout-actions">


            <button
              type="button"
              className="logout-cancel"
              onClick={onBack}
            >

              <FiX />

              Cancel

            </button>


            <button
              type="button"
              className="logout-confirm"
              onClick={handleLogout}
            >

              <FiLogOut />

              Log out of all devices

            </button>


          </div>


        </section>


      </main>


    </div>

  );

};


export default Logout;