import { useState } from "react";

import {
  FiArrowLeft,
  FiLock,
  FiMail,
  FiPhone,
  FiEdit2,
  FiShield,
  FiLogOut,
  FiChevronRight,
  FiCheck,
  FiX,
} from "react-icons/fi";

import "./LoginSecurity.css";


type LoginSecurityProps = {
  onBack: () => void;
  darkMode: boolean;
  onEmailAddress: () => void;
  onPhoneNumber: () => void;
  onLogout: () => void;
};


function LoginSecurity({
  onBack,
  darkMode,
  onEmailAddress,
  onPhoneNumber,
  onLogout,
}: LoginSecurityProps) {

  const [isChangingPassword, setIsChangingPassword] =
    useState(false);

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [twoStepVerification, setTwoStepVerification] =
    useState(false);

  const [saved, setSaved] =
    useState(false);


  /* =================================================
     CHANGE PASSWORD
  ================================================= */

  const handlePasswordSave = () => {

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      return;
    }

    if (newPassword !== confirmPassword) {
      return;
    }

    localStorage.setItem(
      "mealmitraPassword",
      newPassword
    );

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setIsChangingPassword(false);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);

  };


  /* =================================================
     CANCEL PASSWORD
  ================================================= */

  const handlePasswordCancel = () => {

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setIsChangingPassword(false);

  };


  return (

    <div
      className={`login-security-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="login-security-header">

        <button
          type="button"
          className="login-security-back-button"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div>

          <h1>
            Login & Security
          </h1>

          <p>
            Manage your login and account security
          </p>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="login-security-main">


        {/* ===================================================
            SECURITY NOTICE
        =================================================== */}

        <section className="login-security-notice">

          <div className="login-security-notice-icon">

            <FiShield />

          </div>


          <div>

            <h3>
              Keep your account secure
            </h3>

            <p>
              Protect your MealMitra account by keeping
              your login information up to date.
            </p>

          </div>

        </section>


        {/* ===================================================
            LOGIN INFORMATION
        =================================================== */}

        <section className="login-security-section">

          <div className="login-security-section-heading">

            <span>
              LOGIN INFORMATION
            </span>

            <h2>
              Your login details
            </h2>

            <p>
              Manage the information you use to access your account.
            </p>

          </div>


          <div className="login-security-card">


            {/* EMAIL */}

            <div
              className="login-security-row"
              onClick={onEmailAddress}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {

                if (
                  e.key === "Enter" ||
                  e.key === " "
                ) {

                  onEmailAddress();

                }

              }}
            >

              <div className="login-security-row-icon orange">

                <FiMail />

              </div>


              <div className="login-security-row-content">

                <span>
                  Email Address
                </span>

                <strong>
                  {localStorage.getItem(
                    "mealmitraEmailAddress"
                  ) || "Not added yet"}
                </strong>

              </div>


              <FiChevronRight className="login-security-row-arrow" />

            </div>


            {/* PHONE */}

            <div
              className="login-security-row"
              onClick={onPhoneNumber}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {

                if (
                  e.key === "Enter" ||
                  e.key === " "
                ) {

                  onPhoneNumber();

                }

              }}
            >

              <div className="login-security-row-icon red">

                <FiPhone />

              </div>


              <div className="login-security-row-content">

                <span>
                  Phone Number
                </span>

                <strong>
                  {localStorage.getItem(
                    "mealmitraPhoneNumber"
                  ) || "Not added yet"}
                </strong>

              </div>


              <FiChevronRight className="login-security-row-arrow" />

            </div>


          </div>

        </section>


        {/* ===================================================
            PASSWORD
        =================================================== */}

        <section className="login-security-section">

          <div className="login-security-section-heading">

            <span>
              PASSWORD
            </span>

            <h2>
              Account password
            </h2>

            <p>
              Keep your password strong and secure.
            </p>

          </div>


          {!isChangingPassword ? (

            <div className="login-password-card">

              <div className="login-password-left">

                <div className="login-security-row-icon purple">

                  <FiLock />

                </div>


                <div>

                  <h3>
                    Password
                  </h3>

                  <p>
                    Change your account password regularly
                    for better security.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className="login-change-password-button"
                onClick={() =>
                  setIsChangingPassword(true)
                }
              >

                <FiEdit2 />

                Change

              </button>

            </div>

          ) : (

            <div className="login-password-edit-card">


              {/* CURRENT PASSWORD */}

              <div className="login-password-form-group">

                <label>
                  Current Password
                </label>

                <div className="login-password-input">

                  <FiLock />

                  <input
                    type="password"
                    value={currentPassword}
                    placeholder="Enter current password"
                    onChange={(e) =>
                      setCurrentPassword(
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>


              {/* NEW PASSWORD */}

              <div className="login-password-form-group">

                <label>
                  New Password
                </label>

                <div className="login-password-input">

                  <FiLock />

                  <input
                    type="password"
                    value={newPassword}
                    placeholder="Enter new password"
                    onChange={(e) =>
                      setNewPassword(
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="login-password-form-group">

                <label>
                  Confirm New Password
                </label>

                <div className="login-password-input">

                  <FiLock />

                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm new password"
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>


              {/* ACTIONS */}

              <div className="login-password-actions">

                <button
                  type="button"
                  className="login-password-cancel"
                  onClick={handlePasswordCancel}
                >

                  <FiX />

                  Cancel

                </button>


                <button
                  type="button"
                  className="login-password-save"
                  onClick={handlePasswordSave}
                >

                  <FiCheck />

                  Update Password

                </button>

              </div>


            </div>

          )}


        </section>


        {/* ===================================================
            TWO STEP VERIFICATION
        =================================================== */}

        <section className="login-security-section">

          <div className="login-security-section-heading">

            <span>
              ACCOUNT SECURITY
            </span>

            <h2>
              Security preferences
            </h2>

            <p>
              Add an extra layer of protection to your account.
            </p>

          </div>


          <div className="login-security-card">


            <div className="login-security-row">

              <div className="login-security-row-icon yellow">

                <FiShield />

              </div>


              <div className="login-security-row-content">

                <span>
                  Two-Step Verification
                </span>

                <strong>
                  {twoStepVerification
                    ? "Enabled"
                    : "Disabled"}
                </strong>

              </div>


              <button
                type="button"
                className={`login-security-toggle ${
                  twoStepVerification
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setTwoStepVerification(
                    !twoStepVerification
                  )
                }
                aria-label="Toggle two-step verification"
              >

                <span className="login-security-toggle-circle"></span>

              </button>

            </div>


          </div>

        </section>


        {/* ===================================================
            LOGOUT
        =================================================== */}

        <section className="login-security-section">

          <div className="login-security-section-heading">

            <span>
              ACCOUNT ACCESS
            </span>

            <h2>
              Account sessions
            </h2>

            <p>
              Manage access to your MealMitra account.
            </p>

          </div>


          <button
            type="button"
            className="login-logout-card"
            onClick={onLogout}
          >

            <div className="login-logout-icon">

              <FiLogOut />

            </div>


            <div>

              <h3>
                Log out of all devices
              </h3>

              <p>
                Sign out of your MealMitra account on
                all other devices.
              </p>

            </div>


            <FiChevronRight className="login-logout-arrow" />

          </button>

        </section>


        {/* ===================================================
            SECURITY INFORMATION
        =================================================== */}

        <section className="login-security-info">

          <div className="login-security-info-icon">

            <FiCheck />

          </div>


          <div>

            <h3>
              Your account is protected
            </h3>

            <p>
              MealMitra keeps your login information secure
              and gives you control over your account security.
            </p>

          </div>

        </section>


        {/* ===================================================
            SUCCESS MESSAGE
        =================================================== */}

        {saved && (

          <div className="login-security-success">

            <FiCheck />

            Password updated successfully.

          </div>

        )}


      </main>

    </div>

  );

}


export default LoginSecurity;