import { useState } from "react";

import {
  FiArrowLeft,
  FiSliders,
  FiDatabase,
  FiBell,
  FiMapPin,
  FiActivity,
  FiInfo,
  FiCheck,
} from "react-icons/fi";

import "./PrivacyPreferences.css";


// =========================================================
// PROPS
// =========================================================

type PrivacyPreferencesProps = {
  onBack: () => void;
  darkMode: boolean;
};


// =========================================================
// COMPONENT
// =========================================================

function PrivacyPreferences({
  onBack,
  darkMode,
}: PrivacyPreferencesProps) {

  // =======================================================
  // PERSONALIZED EXPERIENCE
  // =======================================================

  const [personalizedExperience, setPersonalizedExperience] =
    useState(true);


  // =======================================================
  // ACTIVITY BASED RECOMMENDATIONS
  // =======================================================

  const [activityRecommendations, setActivityRecommendations] =
    useState(true);


  // =======================================================
  // LOCATION BASED RECOMMENDATIONS
  // =======================================================

  const [locationRecommendations, setLocationRecommendations] =
    useState(true);


  // =======================================================
  // PROMOTIONAL PERSONALIZATION
  // =======================================================

  const [promotionalPersonalization, setPromotionalPersonalization] =
    useState(false);


  return (

    <div
      className={`privacy-preferences-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="privacy-preferences-header">

        <button
          type="button"
          className="privacy-preferences-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <FiArrowLeft />
        </button>


        <div className="privacy-preferences-header-title">

          <div className="privacy-preferences-header-icon">
            <FiSliders />
          </div>


          <div>

            <h1>
              Privacy Preferences
            </h1>

            <p>
              Control how MealMitra uses your information
            </p>

          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="privacy-preferences-main">


        {/* ===================================================
            INTRO
        =================================================== */}

        <section className="privacy-preferences-intro">

          <div className="privacy-preferences-intro-icon">
            <FiSliders />
          </div>


          <div>

            <span>
              YOUR CHOICES MATTER
            </span>

            <h2>
              Control your privacy preferences.
            </h2>

            <p>
              Choose how MealMitra uses your activity and
              preferences to personalize your experience.
            </p>

          </div>

        </section>


        {/* ===================================================
            PERSONALIZATION
        =================================================== */}

        <section className="privacy-preferences-section">

          <div className="privacy-preferences-section-heading">

            <span>
              PERSONALIZATION
            </span>

            <h2>
              Your experience
            </h2>

            <p>
              Manage how MealMitra personalizes your experience.
            </p>

          </div>


          <div className="privacy-preferences-list">


            {/* =================================================
                PERSONALIZED EXPERIENCE
            ================================================= */}

            <div className="privacy-preferences-list-item">

              <div className="privacy-preferences-list-left">

                <div className="privacy-preferences-icon orange">
                  <FiDatabase />
                </div>


                <div>

                  <h3>
                    Personalized Experience
                  </h3>

                  <p>
                    Get recommendations based on your activity
                    and preferences.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`privacy-preferences-toggle ${
                  personalizedExperience ? "active" : ""
                }`}
                onClick={() =>
                  setPersonalizedExperience(
                    !personalizedExperience
                  )
                }
                aria-label="Toggle personalized experience"
              >

                <span className="privacy-preferences-toggle-circle"></span>

              </button>

            </div>


            {/* =================================================
                ACTIVITY RECOMMENDATIONS
            ================================================= */}

            <div className="privacy-preferences-list-item">

              <div className="privacy-preferences-list-left">

                <div className="privacy-preferences-icon purple">
                  <FiActivity />
                </div>


                <div>

                  <h3>
                    Activity-Based Recommendations
                  </h3>

                  <p>
                    Use your orders and activity to suggest
                    restaurants and dishes.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`privacy-preferences-toggle ${
                  activityRecommendations ? "active" : ""
                }`}
                onClick={() =>
                  setActivityRecommendations(
                    !activityRecommendations
                  )
                }
                aria-label="Toggle activity recommendations"
              >

                <span className="privacy-preferences-toggle-circle"></span>

              </button>

            </div>


          </div>

        </section>


        {/* ===================================================
            LOCATION
        =================================================== */}

        <section className="privacy-preferences-section">

          <div className="privacy-preferences-section-heading">

            <span>
              LOCATION
            </span>

            <h2>
              Location preferences
            </h2>

            <p>
              Control how your location is used for recommendations.
            </p>

          </div>


          <div className="privacy-preferences-list">


            {/* =================================================
                LOCATION RECOMMENDATIONS
            ================================================= */}

            <div className="privacy-preferences-list-item">

              <div className="privacy-preferences-list-left">

                <div className="privacy-preferences-icon yellow">
                  <FiMapPin />
                </div>


                <div>

                  <h3>
                    Location-Based Recommendations
                  </h3>

                  <p>
                    Use your location to show nearby restaurants
                    and food options.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`privacy-preferences-toggle ${
                  locationRecommendations ? "active" : ""
                }`}
                onClick={() =>
                  setLocationRecommendations(
                    !locationRecommendations
                  )
                }
                aria-label="Toggle location recommendations"
              >

                <span className="privacy-preferences-toggle-circle"></span>

              </button>

            </div>


          </div>

        </section>


        {/* ===================================================
            NOTIFICATIONS & PROMOTIONS
        =================================================== */}

        <section className="privacy-preferences-section">

          <div className="privacy-preferences-section-heading">

            <span>
              COMMUNICATION
            </span>

            <h2>
              Promotions & notifications
            </h2>

            <p>
              Choose how personalized promotional content is shown.
            </p>

          </div>


          <div className="privacy-preferences-list">


            {/* =================================================
                PROMOTIONAL PERSONALIZATION
            ================================================= */}

            <div className="privacy-preferences-list-item">

              <div className="privacy-preferences-list-left">

                <div className="privacy-preferences-icon orange">
                  <FiBell />
                </div>


                <div>

                  <h3>
                    Promotional Personalization
                  </h3>

                  <p>
                    Receive offers and promotions based on
                    your interests and activity.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`privacy-preferences-toggle ${
                  promotionalPersonalization ? "active" : ""
                }`}
                onClick={() =>
                  setPromotionalPersonalization(
                    !promotionalPersonalization
                  )
                }
                aria-label="Toggle promotional personalization"
              >

                <span className="privacy-preferences-toggle-circle"></span>

              </button>

            </div>


          </div>

        </section>


        {/* ===================================================
            INFORMATION
        =================================================== */}

        <section className="privacy-preferences-info">

          <div className="privacy-preferences-info-icon">
            <FiCheck />
          </div>


          <div>

            <h3>
              Your preferences are in your control
            </h3>

            <p>
              You can change these preferences anytime.
              Turning off personalization will not affect
              your ability to use MealMitra.
            </p>

          </div>

        </section>


        {/* ===================================================
            SMALL INFORMATION CARD
        =================================================== */}

        <section className="privacy-preferences-note">

          <div className="privacy-preferences-note-icon">
            <FiInfo />
          </div>


          <div>

            <h3>
              How personalization works
            </h3>

            <p>
              MealMitra may use information such as your
              activity, preferences and location to make
              your food discovery experience more relevant.
            </p>

          </div>

        </section>


      </main>

    </div>

  );
}


export default PrivacyPreferences;