import { useState } from "react";

import {
  FiArrowLeft,
  FiPhone,
  FiCheck,
  FiX,
} from "react-icons/fi";

import "./PhoneNumber.css";


interface PhoneNumberProps {
  onBack: () => void;
  darkMode: boolean;
}


const PhoneNumber = ({
  onBack,
  darkMode,
}: PhoneNumberProps) => {

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  /* =================================================
     SAVE PHONE NUMBER
  ================================================= */

  const handleSave = () => {

    if (!phone) {
      setMessage("Please enter your phone number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    localStorage.setItem(
      "mealmitraPhoneNumber",
      phone
    );

    setMessage(
      "Phone number saved successfully."
    );

  };


  return (

    <div
      className={`phone-number-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="phone-number-header">

        <button
          type="button"
          className="phone-number-back-button"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div>

          <h1>
            Phone Number
          </h1>

          <p>
            Manage your phone number
          </p>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="phone-number-main">


        {/* ===================================================
            NOTICE
        =================================================== */}

        <div className="phone-number-notice">

          <div className="phone-number-notice-icon">

            <FiPhone />

          </div>


          <div>

            <h3>
              Keep your phone number updated
            </h3>

            <p>
              Your phone number helps us keep your account
              secure and allows us to contact you when needed.
            </p>

          </div>

        </div>


        {/* ===================================================
            SECTION
        =================================================== */}

        <section className="phone-number-section">


          <div className="phone-number-heading">

            <span>
              PHONE NUMBER
            </span>

            <h2>
              Your phone number
            </h2>

            <p>
              Add or update the phone number associated with
              your MealMitra account.
            </p>

          </div>


          {/* =================================================
              CARD
          ================================================= */}

          <div className="phone-number-card">


            <div className="phone-number-form-group">

              <label>
                Phone Number
              </label>


              <div className="phone-number-input">

                <FiPhone />

                <span className="phone-country-code">
                  +91
                </span>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => {

                    const value =
                      e.target.value.replace(
                        /\D/g,
                        ""
                      );

                    setPhone(value);

                  }}
                />

              </div>

            </div>


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="phone-number-actions">


              <button
                type="button"
                className="phone-number-cancel"
                onClick={onBack}
              >

                <FiX />

                Cancel

              </button>


              <button
                type="button"
                className="phone-number-save"
                onClick={handleSave}
              >

                <FiCheck />

                Save Number

              </button>


            </div>


          </div>


        </section>


        {/* ===================================================
            MESSAGE
        =================================================== */}

        {message && (

          <div className="phone-number-message">

            {message}

          </div>

        )}


      </main>


    </div>

  );

};


export default PhoneNumber;