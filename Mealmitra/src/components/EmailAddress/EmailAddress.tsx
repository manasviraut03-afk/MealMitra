import { useState } from "react";
import {
  FiArrowLeft,
  FiMail,
  FiCheck,
  FiX,
} from "react-icons/fi";

import "./EmailAddress.css";

interface EmailAddressProps {
  onBack: () => void;
  darkMode: boolean;
}

const EmailAddress = ({
  onBack,
  darkMode,
}: EmailAddressProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    localStorage.setItem(
      "mealmitraEmailAddress",
      email
    );

    setMessage("Email address saved successfully.");
  };

  return (
    <div
      className={`email-address-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >

      {/* HEADER */}
      <header className="email-address-header">

        <button
          className="email-address-back-button"
          onClick={onBack}
        >
          <FiArrowLeft />
        </button>

        <div>
          <h1>Email Address</h1>
          <p>Manage your email address</p>
        </div>

      </header>

      {/* MAIN */}
      <main className="email-address-main">

        {/* NOTICE */}
        <div className="email-address-notice">

          <div className="email-address-notice-icon">
            <FiMail />
          </div>

          <div>
            <h3>Keep your email updated</h3>

            <p>
              Your email address helps us keep your account
              secure and send you important updates.
            </p>
          </div>

        </div>

        {/* SECTION */}
        <section className="email-address-section">

          <div className="email-address-heading">

            <span>EMAIL ADDRESS</span>

            <h2>Your email address</h2>

            <p>
              Add or update the email address associated with
              your MealMitra account.
            </p>

          </div>

          {/* CARD */}
          <div className="email-address-card">

            <div className="email-address-form-group">

              <label>Email Address</label>

              <div className="email-address-input">

                <FiMail />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>

            {/* ACTIONS */}
            <div className="email-address-actions">

              <button
                type="button"
                className="email-address-cancel"
                onClick={onBack}
              >
                <FiX />
                Cancel
              </button>

              <button
                type="button"
                className="email-address-save"
                onClick={handleSave}
              >
                <FiCheck />
                Save Email
              </button>

            </div>

          </div>

        </section>

        {/* MESSAGE */}
        {message && (
          <div className="email-address-message">
            {message}
          </div>
        )}

      </main>

    </div>
  );
};

export default EmailAddress;