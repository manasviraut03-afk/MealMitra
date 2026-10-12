import {
  FiArrowLeft,
  FiInfo,
  FiShield,
  FiFileText,
  FiChevronRight,
} from "react-icons/fi";

import "./AboutMealMitra.css";


/* =================================================
   PROPS
================================================= */

type AboutMealMitraProps = {
  onBack: () => void;
  darkMode: boolean;
  onPrivacyPolicy: () => void;
  onTermsConditions: () => void;
};


/* =================================================
   ABOUT MEALMITRA COMPONENT
================================================= */

function AboutMealMitra({
  onBack,
  darkMode,
  onPrivacyPolicy,
  onTermsConditions,
}: AboutMealMitraProps) {


  return (

    <div
      className={
        darkMode
          ? "about-mealmitra-page dark-mode"
          : "about-mealmitra-page"
      }
    >


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="about-mealmitra-header">

        <button
          type="button"
          className="about-mealmitra-back-button"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div className="about-mealmitra-header-title">

          <div className="about-mealmitra-header-icon">

            <FiInfo />

          </div>


          <div>

            <h1>
              About MealMitra
            </h1>

            <p>
              Learn more about MealMitra
            </p>

          </div>

        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="about-mealmitra-main">


        {/* =================================================
            INTRO
        ================================================= */}

        <section className="about-mealmitra-intro">

          <div className="about-mealmitra-logo">

            <span>
              M
            </span>

          </div>


          <div>

            <span className="about-mealmitra-label">
              ABOUT MEALMITRA
            </span>

            <h2>
              Your food, your way.
            </h2>

            <p>
              Discover delicious food and enjoy a simple
              and convenient ordering experience.
            </p>

          </div>

        </section>


        {/* =================================================
            VERSION
        ================================================= */}

        <section className="about-mealmitra-section">


          <div className="about-mealmitra-version-card">

            <div className="about-mealmitra-version-icon">

              <FiInfo />

            </div>


            <div className="about-mealmitra-version-content">

              <h3>
                Version
              </h3>

              <p>
                MealMitra Version 1.0.0
              </p>

            </div>

          </div>


        </section>


        {/* =================================================
            LEGAL INFORMATION
        ================================================= */}

        <section className="about-mealmitra-section">


          <div className="about-mealmitra-section-heading">

            <span>
              LEGAL
            </span>

            <h2>
              Legal information
            </h2>

          </div>


          <div className="about-mealmitra-list">


            {/* =================================================
                PRIVACY POLICY
            ================================================= */}

            <button
              type="button"
              className="about-mealmitra-list-item"
              onClick={onPrivacyPolicy}
            >

              <div className="about-mealmitra-list-left">

                <div className="about-mealmitra-icon red">

                  <FiShield />

                </div>


                <div>

                  <h3>
                    Privacy Policy
                  </h3>

                </div>

              </div>


              <FiChevronRight />

            </button>


            {/* =================================================
                TERMS & CONDITIONS
            ================================================= */}

            <button
              type="button"
              className="about-mealmitra-list-item"
              onClick={onTermsConditions}
            >

              <div className="about-mealmitra-list-left">

                <div className="about-mealmitra-icon yellow">

                  <FiFileText />

                </div>


                <div>

                  <h3>
                    Terms & Conditions
                  </h3>

                </div>

              </div>


              <FiChevronRight />

            </button>


          </div>

        </section>


        {/* =================================================
            FOOTER INFORMATION
        ================================================= */}

        <section className="about-mealmitra-footer-info">

          <div className="about-mealmitra-footer-logo">
            M
          </div>


          <h3>
            MealMitra
          </h3>


          <p>
            Your everyday food companion.
          </p>


          <span>
            © 2026 MealMitra. All rights reserved.
          </span>

        </section>


      </main>


    </div>

  );

}


export default AboutMealMitra;